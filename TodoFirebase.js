import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAIck9Uxb62EmdH-6X8SmWeVovlY67ANog",
    authDomain: "todo-ec483.firebaseapp.com",
    projectId: "todo-ec483",
    storageBucket: "todo-ec483.appspot.com",
    messagingSenderId: "310620080554",
    appId: "1:310620080554:web:b1db68fc259152379303d3",
    measurementId: "G-9D7EY8PZ4J"
  };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};