import express from "express";
const router = express.Router();
import { getProfile, updateProfile, changePassword } from "../controllers/profileController.js";

router.get('/profile', getProfile);
router.put('/profile', updateProfile)
router.post('/profile/change-password', changePassword); 

export default router;
