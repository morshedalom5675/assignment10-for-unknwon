import React, { use, useState } from "react";
import { Mail, Lock, Eye, EyeOff, User, Image } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile, signInWithGoogle } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const displayName = event.target.name.value;
    const photoURL = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordValidation.test(password)) {
      return toast.error(
        "❌ Password must have at least 1 uppercase, 1 lowercase letter, and be at least 6 characters long."
      );
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(displayName, photoURL);
        toast.success("User created successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    // toast.loading("Creating user...", { id: "create-user" });
    signInWithGoogle()
      .then((result) => {
        toast.success("User created successfully!");
        navigate("/");
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="py-10 min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
      <title>CleanTrack || Register</title>
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-xl rounded-2xl w-full max-w-md p-8 border border-gray-100 dark:border-gray-700">
        {/* Header */}
        <div className="text-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7188/7188472.png"
            alt="logo"
            className="w-16 mx-auto mb-3"
          />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Create Your Account
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Register to get started 🌱
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Full Name
            </label>
            <div className="relative">
              <User
                size={18}
                className="absolute left-3 top-3 text-gray-400 dark:text-gray-500"
              />
              <input
                name="name"
                type="text"
                placeholder="Enter your full name"
                required
                className="w-full border border-gray-300 dark:border-gray-600 pl-10 pr-3 py-2 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            </div>
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Photo URL
            </label>
            <div className="relative">
              <Image
                size={18}
                className="absolute left-3 top-3 text-gray-400 dark:text-gray-500"
              />
              <input
                name="photo"
                type="url"
                placeholder="https://example.com/photo.jpg"
                className="w-full border border-gray-300 dark:border-gray-600 pl-10 pr-3 py-2 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-3 top-3 text-gray-400 dark:text-gray-500"
              />
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
              <Lock
                size={18}
                className="absolute left-3 top-3 text-gray-400 dark:text-gray-500"
              />
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
            Register
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
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 dark:text-green-400 font-medium cursor-pointer hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
