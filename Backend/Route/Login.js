import express from "express";
import { User } from "../DataBase/db.js";
import bcryptjs from "bcryptjs";
import cors from "cors";

const router = express.Router();
router.use(cors());
router.use(express.json())
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    
    // Compare password
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    // Successful login response
    res.status(200).json({
      msg: "Login Success",
      user: {
        _id: user.id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ msg: "Server error. Please try again later." });
  }
};
