import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  initializeAuth,
  getReactNativePersistence,
  getAuth,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC4Hxn2fnUalb3ixh6aUuHV8bzfbopT0eM',
  authDomain: 'week1labs-74f38.firebaseapp.com',
  projectId: 'week1labs-74f38',
  storageBucket: 'week1labs-74f38.firebasestorage.app',
  messagingSenderId: '923306846545',
  appId: '1:923306846545:web:6ea6870e045dcca19e4b70',
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);

let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch (error) {
  auth = getAuth(app);
}

export { auth };
