import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import dotenv from "dotenv";


const firebaseConfig = {
  apiKey: "AIzaSyA74VCUnZdevkK36MFehR3Eg4yiyHQY1ss",
  authDomain: "campus-circle-ce096.firebaseapp.com",
  projectId: "campus-circle-ce096",
  storageBucket: "campus-circle-ce096.firebasestorage.app",
  messagingSenderId: "639228972590",
  appId: "1:639228972590:web:1db0c11cce307dd7d8d9bf",
  measurementId: "G-5665300WNZ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);