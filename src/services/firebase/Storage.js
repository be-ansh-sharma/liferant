import { storage } from './Firebase';

import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const uploadImage = async file => {
  const storageRef = ref(storage, `/blogs/${file.name}`);
  await uploadBytes(storageRef, file);
  let url = await getDownloadURL(storageRef);
  return url;
};

const getImage = async path => {
  let url = await getDownloadURL(ref(storage, path));
  if (url) {
    return url;
  }
};

module.exports = {
  uploadImage,
  getImage,
};
