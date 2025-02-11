import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#121212] px-6">
      <div className="w-full max-w-md bg-white dark:bg-[#1E1E1E] shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-4">
          {isSignUp ? "Create an Account" : "Welcome Back"}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {isSignUp ? "Join the Virtual Art Gallery today!" : "Log in to continue exploring artworks."}
        </p>

        <form className="space-y-4">
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-[#181818] dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-[#181818] dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-[#181818] dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500"
          />

          {isSignUp && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-[#181818] dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          )}

          <button className="w-full bg-gray-900 text-white font-semibold py-3 rounded-md hover:opacity-90 dark:bg-gray-100 dark:text-gray-900  dark:hover:bg-gray-300 transition">
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="text-gray-600 dark:text-gray-400 mt-4">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}  
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-gray-400 dark:text-gray-300 hover:underline ml-2"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>

        <Link to="/" className="block mt-6 text-gray-500 dark:text-gray-300 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
