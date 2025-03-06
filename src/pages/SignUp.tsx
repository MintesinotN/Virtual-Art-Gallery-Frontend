import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { DevTool } from "@hookform/devtools";

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp: React.FC = () => {

  const { register, handleSubmit, control } = useForm<FormData>();

  const [isSignUp, setIsSignUp] = useState(true);

  const [token, setToken] = useState("");

  const onSubmit: SubmitHandler<FormData> = async (data) => {

    let newUrl = "http://localhost:5000";
    if (!isSignUp) {
      newUrl += "/api/users/login"
    }
    else{
      newUrl += "/api/users/register"
    }
    console.log(data);
    
    try {
    const response = await axios.post(newUrl, data, {headers:{Authorization:token}});
    setToken(response.data.token);
    console.log(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error")
        console.error("Error:", error.response?.data?.message || "Something went wrong");
      } else {
        console.error("Unexpected Error:", error);
      }
    } 
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#121212] px-6">
      <div className="w-full max-w-md bg-white dark:bg-[#1E1E1E] shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-4">
          {isSignUp ? "Create an Account" : "Welcome Back"}
        </h2>
        <DevTool control={control} />
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {isSignUp ? "Join the Virtual Art Gallery today!" : "Log in to continue exploring artworks."}
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required: true, maxLength: 25, pattern: /^[A-Za-z\s]+$/ })}
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-[#181818] dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-[#181818] dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-[#181818] dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500"
          />

          {isSignUp && (
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", { required: true })}
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-[#181818] dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          )}

          <button type="submit" className="w-full bg-gray-900 text-white font-semibold py-3 rounded-md hover:opacity-90 dark:bg-gray-100 dark:text-gray-900  dark:hover:bg-gray-300 transition select-none">
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="text-gray-600 dark:text-gray-400 mt-4">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}  
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-gray-400 dark:text-gray-300 ml-2"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>

        <Link to="/" className="block mt-6 text-gray-500 dark:text-gray-300 hover:scale-105 transition">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
