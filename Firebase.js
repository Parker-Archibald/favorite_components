import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDePCiYYV3UxTObYqsmehQLvRQa-XDirys",
    authDomain: "calendar-6cf2a.firebaseapp.com",
    projectId: "calendar-6cf2a",
    storageBucket: "calendar-6cf2a.appspot.com",
    messagingSenderId: "121747625687",
    appId: "1:121747625687:web:cbd37288e38adc1399c292",
    measurementId: "G-TVJNFTYJ12"
  };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};