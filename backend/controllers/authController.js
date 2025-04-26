// handles user signup with authentication
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, database } from "../config/firebase.js"; 

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;

    await setDoc(doc(database, "users", uid), {
      name: name,
      email: email,
      createdAt: new Date(),
    });

    res.status(200).send({message: "User signed up and added to Firestore!"});
  } catch (error) {
    console.error("Signup failed:", error.message);
    res.status(500).send({error: error.message})
  }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        const userDoc = await getDoc(doc(database, "users", user.uid));

        if (!userDoc.exists()) {
            return res.status(404).send({ error: "User not found in Firestore" });
        }

        res.status(200).send({ message: "User logged in successfully!", user: { uid: user.uid, email: user.email } });
        

    } catch (error) {
        console.error("Login failed:", error.message);
        res.status(500).send({error: error.message})
    }
}


