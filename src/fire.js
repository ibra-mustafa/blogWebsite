// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth , GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDosrFlwF-kQt9uB4-nY8J8NGxTmER8FIw",
  authDomain: "blog-5bdcd.firebaseapp.com",
  projectId: "blog-5bdcd",
  storageBucket: "blog-5bdcd.appspot.com",
  messagingSenderId: "642382710543",
  appId: "1:642382710543:web:0acde7abfe1b42ddb3a07a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()