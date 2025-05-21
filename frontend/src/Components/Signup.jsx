import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form"
import Login from './login';
import axios from 'axios';
import { Navigate , useNavigate} from 'react-router-dom';
function Signup() {
  const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userinfo={
          name:data.name,
          email:data.email,
          password:data.password
        }
        console.log(userinfo)
        await axios.post("https://bookstore-7jom.onrender.com/userRouter/signup",userinfo).then((res)=>{
          console.log(res.data.user)
          localStorage.setItem("Users", JSON.stringify(res.data.user)); 
          toast.success("Signup success");
          navigate("/")
          
        }).catch((err)=>{
          if(err.response){
            console.log(err)
            alert("Error" + err.response.data.message)
          }
          console.log(err);
        })
      }
  return (
    <div>
    
        <div className="flex  h-screen  items-center  justify-center border  dark:bg-slate-900 dark:text-white bg-white-50 " >
        <div className="border w-90 rounded-2xl p-10 dark:">
          <h3 className="font-bold text-xl text-pink-500 ">Signup</h3>
          <div className="pt-7">
            <div className="text-pink-500">Name:</div>
            <div className="flex justify-center">
              <input
                type="name"
                {...register("name", { required: "Name is required" })}
                placeholder="Enter your name"
                className="rounded-xl w-full text-center mt-3 p-0.5 dark:placeholder-white"
              />
            </div>
            {errors.name && (
                <span className="text-red-500 text-sm">{errors.name.message}</span>
              )}

          </div>
          <div className="pt-7">
            <div className="text-pink-500">Email:</div>
            <div className="flex justify-center">
              <input
                type="email"
                className="rounded-xl w-full text-center mt-3 p-0.5 dark:placeholder-white"
                placeholder="Enter your email"
                
                {...register("email", { required: "Email is required" })}
              />
            </div>
            {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}

          </div>
          <div className="pt-7">
            <div className="text-pink-500">Password:</div>
            <div className="flex justify-center">
              <input
                type="password" // Use type="password" for password fields
                {...register("password", { required: "Password is required" })}
                placeholder="Enter your password"
                className="rounded-xl w-full text-center mt-3 p-0.5 placeholder:to-black dark:placeholder-white"
              />
            </div>
            {errors.password && (
                <span className="text-red-500 text-sm">{errors.password.message}</span>
              )}
          </div>
          <div className="flex justify-between mt-8">
            <button onClick={handleSubmit(onSubmit)} className="btn btn-secondary h-9">Signup</button>
            <div className="text-black mt-1 dark:text-slate-400">
              Have Account?
              <a onClick={()=>document.getElementById('my_modal_2').showModal()}>
                <span className="text-blue-600 underline cursor-pointer"> Login</span>
                </a>
                <Login></Login>
            </div>
          </div>
          
        </div>
        {/* Modal backdrop for closing the modal */}
        
      </div>
  
      <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
    </div>
  )
}

export default Signup