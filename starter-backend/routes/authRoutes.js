import express from "express";
const router = express.Router();
import { signup, login } from "../controllers/authController.js";

console.log("W")
router.post('/signup', signup);
// router.post('/login', login); // uncomment when login function is completed

export default router;
