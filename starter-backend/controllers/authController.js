// handles user signup with authentication
const { createUserWithEmailAndPassword } = require("firebase/auth")
const { auth } = require("../config/firebase.js")


// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });