import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC4Hxn2fnUalb3ixh6aUuHV8bzfbopT0eM',
  authDomain: 'week1labs-74f38.firebaseapp.com',
  projectId: 'week1labs-74f38',
  storageBucket: 'week1labs-74f38.firebasestorage.app',
  messagingSenderId: '923306846545',
  appId: '1:923306846545:web:6ea6870e045dcca19e4b70',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
