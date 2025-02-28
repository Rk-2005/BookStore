import express from "express";

import {Book} from "../DataBase/db.js";
const router=express.Router();
import cors from "cors"
router.use(cors())
router.get("/",async(req,res)=>{
    const books=await Book .find({});
    res.json({
        books
    })
})

export default router;

