import React, { use, useEffect, useState } from "react";
import { FaGear, FaUser } from "react-icons/fa6";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { Leaf, LogIn, UserPlus } from "lucide-react";
import { HashLoader } from "react-spinners";

const Navbar = () => {
  const { user, signOutUser, loading } = use(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Left side */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/addIssue">Add Issue</NavLink>
            </li>
            <li>
              <NavLink to="/myIssue">My Issue</NavLink>
            </li>
            <li>
              <NavLink to="/myContribution">My Contribution</NavLink>
            </li>
          </ul>
        </div>

        <Leaf className="w-6 h-6 text-success mr-1" />
        <h2 className="text-2xl font-bold text-success">CleanTrack</h2>
      </div>

      {/* Center Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/allIssue">All Issue</NavLink>
          </li>
          <li>
            <NavLink to="/addIssue">Add Issue</NavLink>
          </li>
          <li>
            <NavLink to="/myIssue">My Issue</NavLink>
          </li>
          <li>
            <NavLink to="/myContribution">My Contribution</NavLink>
          </li>
        </ul>
      </div>

      {/* Right Side (User / Login) */}
      <div className="navbar-end">
        {/* theme toggle */}
        <label
          onChange={(e) => handleTheme(e.target.checked)}
          className="toggle text-base-content mr-3"
        >
          <input
            type="checkbox"
            value="synthwave"
            className="theme-controller"
          />

          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>

          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>
        {user ? (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-9 border-2 border-gray-300 rounded-full">
                <img
                  alt="User avatar"
                  referrerPolicy="no-referrer"
                  src={
                    user?.photoURL ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>
            </div>

            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              <div className="pb-3 border-b border-b-gray-200">
                <li className="text-sm font-bold">{user?.displayName}</li>
                <li className="text-xs">{user?.email}</li>
              </div>

              <li className="mt-3">
                <Link to="/profile">
                  <FaUser /> Profile
                </Link>
              </li>

              <li>
                <a>
                  <FaGear /> Settings
                </a>
              </li>

              <li>
                <button
                  onClick={signOutUser}
                  className="btn btn-xs bg-green-500 hover:bg-green-600 text-white mt-1"
                >
                  <IoLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : loading ? (
          <HashLoader size={25} color="#16a34a" />
        ) : (
          <>
            {/* Login button */}
            <div className="flex items-center space-x-3">
              <Link
                to="/register"
                className="btn btn-sm btn-outline btn-success rounded-full 
                           transition duration-300 shadow-sm 
                           hover:shadow-lg hover:scale-[1.02] border-2"
              >
                    
                    <UserPlus className="w-4 h-4" />
                <span>Register</span>
              </Link>

              <Link
                to="/login"
                className="btn btn-sm btn-primary text-white rounded-full 
                           transition duration-300 shadow-md 
                           hover:shadow-lg hover:scale-105"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
