import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB1sadL5KlNqHpGtb6Dt_3bKdTxNg3-qV8',
  authDomain: 'liferant-8ddac.firebaseapp.com',
  projectId: 'liferant-8ddac',
  storageBucket: 'liferant-8ddac.appspot.com',
  messagingSenderId: '817135162833',
  appId: '1:817135162833:web:2a1ce601a5f7d6535bfcf0',
  measurementId: 'G-ZJMZZKFCT8',
};

const Firebase = initializeApp(firebaseConfig);
const Auth = getAuth(Firebase);
const db = getFirestore(Firebase);

module.exports = {
  Auth,
  db,
  Firebase,
};
