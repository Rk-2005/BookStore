import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../Context/Authprovider.jsx"; // Import Auth Context

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [authUser, setAuthUser] = useAuth(); // Use Auth Context
  const navigate=useNavigate();
  const handle=()=>{
    window.location.reload()
  }
  const onSubmit = async (data) => {
    const userdata = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:3000/userRouter/login", userdata);

      if (res.status === 200) {
        console.log(res);
        toast.success("Login successful");

        // Store the user in context & local storage
        setAuthUser(res.data.user);
        localStorage.setItem("Users", JSON.stringify(res.data.user));

        // Close modal before reloading
        document.getElementById("my_modal_2").close(); 
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        setTimeout(() => window.location.reload(), 500); // Delay reload for smooth UI
      } else {
        toast.error("Login failed, please try again.");
      }
    } catch (err) {
      console.error(err);
      if (err.response) {
        if (err.response.status === 401) {
          toast.error("Invalid email or password");
        } else {
          toast.error("An error occurred. Please try again later.");
        }
      } else {
        toast.error("Network error, please check your connection.");
      }
    }
  };

  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box w-96 shadow-md dark:bg-slate-800 border dark:border-gray-400">
          <h3 className="font-bold text-xl text-pink-500">LOGIN</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="pt-7">
              <div className="text-pink-500">Email:</div>
              <div className="flex justify-center">
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="Enter your email"
                  className="rounded-xl w-full text-center mt-3 p-0.5"
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
                  type="password"
                  {...register("password", { required: "Password is required" })}
                  placeholder="Enter your password"
                  className="rounded-xl w-full text-center mt-3 p-0.5"
                />
              </div>
              {errors.password && (
                <span className="text-red-500 text-sm">{errors.password.message}</span>
              )}
            </div>

            <div className="flex justify-between mt-8">
              <button className="btn btn-secondary h-9">Login</button>
              <div className="text-black mt-1 dark:text-slate-400">
                Not registered?
                <a onClick={handle}>
                  <span className="text-blue-600 underline cursor-pointer"> Signup</span>
                  </a>
              </div>
            </div>
          </form>
        </div>

        {/* Close Modal Correctly */}
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => document.getElementById("my_modal_2").close() }>Close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Login;
