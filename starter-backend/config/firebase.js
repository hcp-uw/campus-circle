const admin = require('firebase-admin/app');
const serviceAccount = require('')
require('dotenv').config();

admin.initializeApp({
    credential: admin.credential.cert(process.env.FIREBASEAUTH)
});

module.exports = admin;