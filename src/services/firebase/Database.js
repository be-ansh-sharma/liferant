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

module.exports = {
  getRandomDocument,
  saveDocument,
  getAllBlogs,
  getBlog,
  createBlog,
};
