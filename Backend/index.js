import express from "express";
const app=express()
import dotenv from "dotenv"
import { config } from "dotenv";
import bookRoute from "./Route/Book.js"
import cors from "cors"
import userRouter from "./Route/Signup.js"
dotenv.config();

const port=process.env.port || 3000;

app.use("/books",bookRoute);
app.use("/userRouter",userRouter)
app.use(cors())
app.get("/",(req,res)=>{
    res.send("hi")
})


app.listen(port)