// handles user signup with authentication
const { auth, database } = require("../config/firebase.js") 


const signup = async function (req, res) {
    try {
        const { email, firstName, lastName, username, password} = req.body
    
        const userCredentials = await auth.createUser({
            email,
            password
        })

        await database.collection("users").doc(userCredentials.uid).set({
            email: email, 
            firstName: firstName,
            lastName: lastName,
            username: username
        })
        
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
    }


}

  module.exports = { signup };