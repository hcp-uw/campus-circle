const { initializeApp, cert } = require("firebase-admin/app")
const { getAuth }  = require("firebase-admin/auth")
const { getFirestore } = require("firebase-admin/firestore")
const dotenv = require("dotenv")

dotenv.config(); // loads environment files

const serviceAccount = JSON.parse(Buffer.from(process.env.FIREBASE_ADMIN, "base64").toString("utf8"));

const app = initializeApp({
    credential: cert(serviceAccount)
})

const auth = getAuth(app);

const database = getFirestore(app);

module.exports =  { auth, database }




