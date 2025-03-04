// handles user signup with authentication
const { auth, database } = require("../config/firebase.js") 


const signup = async function (req, res) {
    try {
        const { name, email, password} = req.body
    
        const userCredentials = await auth.createUser({
            email,
            password
        })

        await database.collection("users").doc(userCredentials.uid).set({
            name: name,
            email: email, 
            password: password
        })

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
    }


}

// add login function here

module.exports = { signup }; // make sure to include export login function