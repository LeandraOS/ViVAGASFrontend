// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: 'AIzaSyCj1SbppIkmRH1pbWxLy7QMRaM5TdnPBGg',
  authDomain: 'vivagas-11f7b.firebaseapp.com',
  projectId: 'vivagas-11f7b',
  storageBucket: 'vivagas-11f7b.appspot.com',
  messagingSenderId: '201453322841',
  appId: '1:201453322841:web:e7297e1b0f2aabb0dae748',
  measurementId: 'G-TQ4ZT68RLS'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app);
