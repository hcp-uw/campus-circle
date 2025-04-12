import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import dotenv from "dotenv";

dotenv.config(); // loads environment files

const serviceAccount = JSON.parse(
  Buffer.from(process.env.FIREBASE_ADMIN, "base64").toString("utf8")
);

const app = initializeApp({
  credential: cert(serviceAccount),
});

export const auth = getAuth(app);
export const database = getFirestore(app);