// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrhMeYUsY8bjTcOrifE75fl77Xg4IoYC0",
  authDomain: "myecom-9d4cd.firebaseapp.com",
  projectId: "myecom-9d4cd",
  storageBucket: "myecom-9d4cd.appspot.com",
  messagingSenderId: "844854420877",
  appId: "1:844854420877:web:a37a5b5243b5ae1c3e09c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB=getFirestore(app);
const auth=getAuth(app);
export {auth,fireDB};