import React, { use, useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, signInWithGoogle } = use(AuthContext);

  const navigate = useNavigate();

  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        event.target.reset();
        toast.success("Login Successful");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Login Successful");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen py-10 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
      <title>CleanTrack || Login</title>
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-xl rounded-2xl w-full max-w-md p-8 border border-gray-100 dark:border-gray-700">
        {/* Header */}
        <div className="text-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7188/7188472.png"
            alt="logo"
            className="w-16 mx-auto mb-3"
          />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Login Your Account
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Login to get started 🌱
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogIn} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail size={18} className="absolute left-3 top-3 text-gray-400 dark:text-gray-500" />
              <input
                name="email"
                type="email"
                placeholder="example@email.com"
                required
                className="w-full border border-gray-300 dark:border-gray-600 pl-10 pr-3 py-2 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-3 text-gray-400 dark:text-gray-500" />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
                className="w-full border border-gray-300 dark:border-gray-600 pl-10 pr-10 py-2 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white font-semibold py-2 rounded-lg shadow-md transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <hr className="flex-1 border-gray-300 dark:border-gray-600" />
          <p className="text-gray-500 dark:text-gray-400 text-sm">OR</p>
          <hr className="flex-1 border-gray-300 dark:border-gray-600" />
        </div>

        {/* Google Sign In */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full border border-gray-300 dark:border-gray-600 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />
          <span className="font-medium text-gray-700 dark:text-gray-200">
            Continue with Google
          </span>
        </button>

        {/* Footer */}
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-5">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-green-600 dark:text-green-400 font-medium cursor-pointer hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
