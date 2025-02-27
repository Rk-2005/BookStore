import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box w-96 shadow-md dark:bg-slate-800 border dark:border-gray-400 ">
          <h3 className="font-bold text-xl text-pink-500  ">LOGIN</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="pt-7  ">
            <div className=" text-pink-500  ">
            Email:
            </div>
    
            <div className="flex justify-center ">
            <input  type="email" {...register("email", { required: "Email is required" })}  placeholder="Enter your email" className="rounded-xl w-full text-center mt-3  p-0.5 "></input>

            </div>
            {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}

          </div>
          <div className="pt-7    ">
            <div className=" text-pink-500 ">
            Password:
            </div>
            <div className="flex justify-center ">
            <input type="password" {...register("password", { required: "Password is required" })} placeholder="Enter your password" className="rounded-xl w-full text-center mt-3  p-0.5   "></input>

      {/* errors will return when field validation fails  */}
            </div>
            {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div className="  flex justify-between mt-8">
          <button className="btn btn-secondary h-9   ">Login</button>
           <div className="text-black mt-1 dark:text-slate-400">Not registerd?
            <Link to="Signup">
            <span className="text-blue-600 underline cursor-pointer "> Signup</span>{""}
            </Link>
            </div>
          </div>
          </form>
        </div>  
        
        
      </dialog>
      <form method="dialog" className="modal-backdrop">
          <Link to={"/"}>close</Link>
        </form>
    </div>
  );
}

export default Login;
