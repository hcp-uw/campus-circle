// import { initializeApp, cert } from "firebase-admin/app";
// import { getAuth } from "firebase-admin/auth";
// import { getFirestore } from "firebase-admin/firestore";
// import dotenv from "dotenv";

// dotenv.config(); // loads environment files

// const serviceAccount = JSON.parse(
//   Buffer.from(process.env.FIREBASE_ADMIN, "base64").toString("utf8")
// );

// const app = initializeApp({
//   credential: cert(serviceAccount),
// });

// export const auth = getAuth(app);
// export const database = getFirestore(app);




import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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