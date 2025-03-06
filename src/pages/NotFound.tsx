import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] bg-gray-100 dark:bg-[#121212] flex items-center justify-center text-center p-6">
      <div className="max-w-lg p-8 bg-white dark:bg-[#1E1E1E] rounded-lg shadow-lg">
        <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white">404</h1>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-300 mt-2">
          We couldn't find the page you were looking for.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-gray-900 hover:opacity-90 dark:bg-gray-100 text-white py-2 px-6 rounded-lg text-lg dark:text-gray-900 dark:hover:bg-gray-300 transition"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
