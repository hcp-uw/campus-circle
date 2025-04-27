import { auth, database } from "../config/firebase.js"; 
import { doc, updateDoc, getDoc } from "firebase/firestore";


export const getProfile = async (req, res) =>  {
    try {
        const userId = req.user.uid; 
        const userDoc = await getDoc(doc(database, "users", userId));

        if (!userDoc.exists()) {
            return res.status(404).send({ error: "User not found in Firestore" });
        }

        res.json({profile: userDoc.data()}) 
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to fetch profile data' });
    }
}

export const updateProfile = async (req, res) => {
    try {
        const userId = req.user.uid; 
        const { major, year, bio, groups, interests, classes } = req.body
        await updateDoc(doc(database, "users", userId), {
            major,  
            year,
            bio, 
            groups, 
            interests, 
            classes
        })

        res.json({ message: "Profile updated successfully!" })
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to fetch profile data' });        
    }
}

export const changePassword = async (req, res) => {
    try {
        const userId = req.user.uid; 

        res.json({ message: "Password changed successfully! "})
    } catch (error) { 
        console.error(error);
        res.status(500).send({ error: 'Failed to fetch profile data' });
    }

}

