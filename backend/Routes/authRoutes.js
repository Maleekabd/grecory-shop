import express from "express";
import { Signin, Signup } from "../Controllers/authController.js";

const router = express.Router();

// post data login ke path login
router.post("/login", Signin);

// register user
router.post("/register", Signup);

export default router;
