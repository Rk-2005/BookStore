import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const url ="mongodb+srv://ronakkriplani9:Ronak123456789@cluster0.ctnht.mongodb.net/BookStore"; // Use environment variable instead of hardcoding



mongoose.connect(url, {
}).then(() => {
    console.log("✅ Connected to MongoDB Successfully");
}).catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
});

const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    print: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String }
});

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
})

export const Book = mongoose.model("Book", bookSchema);
export const User =mongoose.model("User",userSchema);

