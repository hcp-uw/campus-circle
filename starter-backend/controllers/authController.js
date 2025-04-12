// handles user signup with authentication

import { auth, database } from "../config/firebase.js";
export const signup = async (req, res) => {
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
        res.send({messages: "User successfully created!"})
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage)
        res.status(500).send({error: errorMessage})
    }

}

export const login = async (req, res) => {
    try {

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        res.status(500).send({ error: errorMessage });
    }
}
