import express, { Router } from "express";
import bcryptjs from "bcryptjs"
import {User} from "../DataBase/db.js";
import { login } from "./Login.js";
import cors from "cors"
const router=express.Router();

router.use(express.json())
router.use(cors())
router.post("/signup",async(req,res)=>{
    const {name,email,password}=req.body;
    const check = await User.findOne({ email: email });
    if(check){
        return res.status(400).json({
            Msg:"User already exits"
        })
    }
    const hashedpassword=await bcryptjs.hash(password,10);
    const newUser=new User({
        name,
        email, 
        password:hashedpassword
    })
   await newUser.save();
    res.json({
        user: {
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
        }
    })

})


router.post("/login",login)
export default router;

