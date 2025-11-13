import React from "react";
import { Link } from "react-router";
import { Frown, MapPinOff } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-base-100 p-6">
      <div className="text-center max-w-lg p-8 bg-base-200 rounded-2xl shadow-2xl border border-base-300">
        <Frown className="w-20 h-20 mx-auto text-error mb-4" />

        <h1 className="text-8xl font-extrabold text-error mb-4">404</h1>

        <h2 className="text-3xl sm:text-4xl font-bold text-base-content mb-3">
          Page Not Found
        </h2>

        <p className="text-base-content/80 mb-6 leading-relaxed">
          Oops! It looks like the path you were looking for is not clean, or
          doesn't exist. We couldn't find the requested report or page on our
          server.
        </p>

        <Link
          to="/"
          className="btn btn-primary btn-lg text-white font-semibold rounded-full 
                               transition duration-300 transform hover:scale-[1.05] shadow-lg"
        >
          <MapPinOff className="w-5 h-5" />
          Go Back Home
        </Link>

        <p className="text-sm text-base-content/60 mt-6">
          If you believe this is an error, please contact support.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
