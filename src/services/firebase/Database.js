import {
  collection,
  setDoc,
  addDoc,
  doc,
  where,
  query,
  getDocs,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore';
import { db } from './Firebase';

const getRandomDocument = async table => {
  const colRef = collection(db, table);
  let random = Math.floor(Math.random() * 50000);
  let q = query(
    colRef,
    where('random', '>=', random),
    orderBy('random'),
    limit(1),
  );
  let querySnapshot = await getDocs(q);
  if (querySnapshot.size != 0) {
    return querySnapshot.docs[0].data();
  } else {
    q = query(
      colRef,
      where('random', '<=', random),
      orderBy('random'),
      limit(1),
    );
    querySnapshot = await getDocs(q);
    return querySnapshot.size == 0 ? null : querySnapshot.docs[0].data();
  }
};

const saveDocument = async (table, document, data) => {
  try {
    if (document) {
      return await setDoc(doc(db, table, document), data, { merge: true });
    } else {
      return await addDoc(collection(db, table), data);
    }
  } catch (err) {
    return {
      error: true,
      message: err.message,
    };
  }
};

const getAllBlogs = async () => {
  let blogs = [];
  const querySnapshot = await getDocs(collection(db, 'blogs'));
  querySnapshot.forEach(doc => {
    blogs.push({
      refId: doc.id,
      ...doc.data(),
    });
  });
  return blogs;
};

const getBlog = async blogID => {
  let blog;
  const q = query(collection(db, 'blogs'), where('seoTitle', '==', blogID));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(doc => {
    blog = {
      ...doc.data(),
      refId: doc.id,
    };
  });
  return blog;
};

const createBlog = async (blog, edit, oldTitle) => {
  let blogRef;
  if (edit) {
    blogRef = await saveDocument('blogs', oldTitle, blog);
  } else {
    blogRef = await saveDocument('blogs', null, blog);
  }
  return blogRef;
};

const getDataCountByTag = async (tagsList, col) => {
  const blogsRef = collection(db, col);
  return Promise.all(
    tagsList.map(async tag => {
      const queryResult = await query(
        blogsRef,
        where('tags', 'array-contains', tag.id),
      );
      const querySnapshot = await getDocs(queryResult);
      tag.count = querySnapshot.size;
      return tag;
    }),
  );
};

const getTagByID = async id => {
  const tagsRef = collection(db, 'tags');
  const queryResult = await query(tagsRef, where('id', '==', id), limit(1));

  const querySnapshot = await getDocs(queryResult);
  let tagsList = [];
  querySnapshot.forEach(doc => {
    tagsList.push({
      ...doc.data(),
      refId: doc.id,
    });
  });
  if (tagsList.length) {
    return tagsList[0];
  }
  return false;
};

const getDataByTag = async (id, mode, lastDoc, totalSize, col) => {
  let dataList = [];
  let queryResult;
  const blogRef = collection(db, col);
  switch (mode) {
    case 'creatednew': {
      queryResult = lastDoc
        ? await query(
            blogRef,
            where('tags', 'array-contains', id),
            orderBy('created', 'asc'),
            startAfter(lastDoc),
            limit(totalSize),
          )
        : await query(
            blogRef,
            where('tags', 'array-contains', id),
            orderBy('created', 'asc'),
            limit(totalSize),
          );
      break;
    }
    case 'createdold': {
      queryResult = lastDoc
        ? await query(
            blogRef,
            where('tags', 'array-contains', id),
            orderBy('created', 'desc'),
            startAfter(lastDoc),
            limit(totalSize),
          )
        : await query(
            blogRef,
            where('tags', 'array-contains', id),
            orderBy('created', 'desc'),
            limit(totalSize),
          );
      break;
    }
    case 'topold': {
      queryResult = lastDoc
        ? await query(
            blogRef,
            where('tags', 'array-contains', id),
            orderBy('likes', 'asc'),
            startAfter(lastDoc),
            limit(totalSize),
          )
        : await query(
            blogRef,
            where('tags', 'array-contains', id),
            orderBy('likes', 'asc'),
            limit(totalSize),
          );
      break;
    }
    case 'topviews': {
      queryResult = lastDoc
        ? await query(
            blogRef,
            where('tags', 'array-contains', id),
            orderBy('views', 'desc'),
            startAfter(lastDoc),
            limit(totalSize),
          )
        : await query(
            blogRef,
            where('tags', 'array-contains', id),
            orderBy('views', 'desc'),
            limit(totalSize),
          );
      break;
    }
    default: {
      queryResult = lastDoc
        ? await query(
            blogRef,
            where('tags', 'array-contains', id),
            orderBy('likes', 'desc'),
            startAfter(lastDoc),
            limit(totalSize),
          )
        : await query(
            blogRef,
            where('tags', 'array-contains', id),
            orderBy('likes', 'desc'),
            limit(totalSize),
          );
      break;
    }
  }
  const querySnapshot = await getDocs(queryResult);
  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
  querySnapshot.forEach(doc => {
    dataList.push({
      ...doc.data(),
      refId: doc.id,
    });
  });

  return {
    list: dataList,
    lastVisible,
  };
};

const fetchAllTags = async type => {
  let tagsList = [];
  const querySnapshot = await getDocs(
    await query(collection(db, 'tags'), where('type', '==', type)),
  );
  querySnapshot.forEach(doc => {
    tagsList.push({
      ...doc.data(),
      refId: doc.id,
    });
  });
  return tagsList;
};

module.exports = {
  getRandomDocument,
  saveDocument,
  getAllBlogs,
  getBlog,
  createBlog,
  fetchAllTags,
  getDataByTag,
  getTagByID,
  getDataCountByTag,
};
