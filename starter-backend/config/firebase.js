const { initializeApp } = require("firebase/app")
const { getFirestore } = require("firebase/firestore")
const { getAuth } = require("firebase/auth")
const dotenv = require("dotenv")

dotenv.config(); // loads environment files

const app = initializeApp(config);

const auth = getAuth(app)

const database = getFirestore(app)

module.exports =  { auth, database }




