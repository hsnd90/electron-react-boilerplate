// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA2yNG87tVZyUPyXeapRSx16FsllbEgWXA',
  authDomain: 'kabizlik-form.firebaseapp.com',
  projectId: 'kabizlik-form',
  storageBucket: 'kabizlik-form.appspot.com',
  messagingSenderId: '850482745509',
  appId: '1:850482745509:web:a422f5b8eb4cc73208fd4c',
  measurementId: 'G-7FDQQFQM4M',
};

const app = initializeApp(firebaseConfig);
export default getFirestore();
