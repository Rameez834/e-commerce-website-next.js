"use client";
import {useRouter } from "next/navigation";
import { use, useState } from "react";

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const submitHandler = (e)=>{
    e.preventDefault();
    console.log("submit")
  }
  const auth = ()=>{
    if(email==="admin@me.com" && password==="123"){
    router.push("/")
  }
  }
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-5">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center text-gray-800">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Login to your Nova Wears account
        </p>


        <form onSubmit={submitHandler}
         className="mt-8 space-y-5">

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>

            <input value={email} 
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>


          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>

            <input onChange={(e)=>{
              setPassword(e.target.value)
            }}
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>


          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm">

            <label className="flex gap-2 items-center">
              <input type="checkbox" />
              Remember me
            </label>

            <a className="text-blue-600 hover:underline">
              Forgot Password?
            </a>

          </div>


          {/* Button */}
          <button onClick={()=>auth()}
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>

    </main>
  );
};

export default Page;