import React from "react";
import { AlertTriangle, Home } from "lucide-react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex flex-col items-center justify-center text-center px-4">
      <div className="p-10 rounded-3xl shadow-2xl bg-white max-w-md w-full">
        <div className="flex justify-center mb-6">
          <AlertTriangle className="w-16 h-16 text-red-500 animate-bounce" />
        </div>

        <h1 className="text-6xl font-extrabold text-gray-800 mb-3">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          Oops! The page you’re looking for doesn’t exist or may have been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <Home className="w-5 h-5" /> Back to Home
        </Link>
      </div>

      <p className="mt-6 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} CleanTrack — All Rights Reserved
      </p>
    </div>
  );
};

export default ErrorPage;
