import React, { use, useEffect, useState } from "react";
import { FaGear, FaUser } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { Leaf, LogIn, UserPlus, LayoutDashboard } from "lucide-react"; // LayoutDashboard যোগ করা হয়েছে
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

  // -----------------------------------------------------------------------------------
  // Helper Component: Mobile Auth Links
  const MobileAuthLinks = () => (
    <>
      <li className="p-2">
        <Link
          to="/register"
          className="btn btn-sm btn-outline btn-success rounded-full w-full justify-start"
        >
          <UserPlus className="w-4 h-4" />
          <span>Register</span>
        </Link>
      </li>
      <li className="p-2">
        <Link
          to="/login"
          className="btn btn-sm btn-primary text-white rounded-full w-full justify-start"
        >
          <LogIn className="w-4 h-4" />
          <span>Login</span>
        </Link>
      </li>
    </>
  );

  // Helper Component: Mobile User Info & Logout (Dashboard Link Added)
  const MobileUserMenu = () => (
    <div className="pb-2 border-t border-base-300 pt-2 mt-2">
      <div className="pb-2 border-b border-base-300 mb-2">
        <li className="text-sm font-bold ml-4">{user?.displayName}</li>
        <li className="text-xs ml-4 text-gray-500">{user?.email}</li>
      </div>

      {/* Dashboard Link for Mobile */}
      <li>
        <Link to="/dashboard" className="text-green-600 font-bold">
          <LayoutDashboard size={18} /> Dashboard
        </Link>
      </li>

      <li>
        <Link to="/dashboard/profile">
          <FaUser /> Profile
        </Link>
      </li>
      <li>
        <Link to="/dashboard/settings">
          <FaGear /> Settings
        </Link>
      </li>
      <li>
        <button
          onClick={signOutUser}
          className="btn btn-sm btn-error text-white mt-1 w-full justify-start"
        >
          <IoLogOut /> Logout
        </button>
      </li>
    </div>
  );
  // -----------------------------------------------------------------------------------

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-40">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-60 p-2 shadow-xl border border-base-200"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/allIssue">All Issue</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/process">Process</NavLink>
            </li>

            {!user && <MobileAuthLinks />}
          </ul>
        </div>

        <Link to="/" className="flex items-center text-success ml-2">
          <Leaf className="w-6 h-6 mr-1" />
          <h2 className="text-2xl font-bold tracking-tight">CleanTrack</h2>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/allIssue">All Issue</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/process">Process</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        {/* theme toggle */}
        <label className="swap swap-rotate btn btn-ghost btn-circle">
          <input
            type="checkbox"
            onChange={(e) => handleTheme(e.target.checked)}
            checked={theme === "dark"}
          />
          <svg
            className="swap-on fill-current w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <svg
            className="swap-off fill-current w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>

        {user ? (
          <div className="dropdown dropdown-end z-50 hidden lg:block">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar border-2 border-green-500 p-[2px]"
            >
              <div className="w-10 rounded-full">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-56 p-2 shadow-2xl border border-base-200"
            >
              <div className="pb-3 border-b border-b-base-300 px-4 py-2">
                <li className="text-sm font-bold">{user?.displayName}</li>
                <li className="text-xs text-gray-500">{user?.email}</li>
              </div>

              {/* Dashboard Link for Desktop */}
              <li className="mt-3">
                <Link to="/dashboard" className="text-green-600 font-bold py-2">
                  <LayoutDashboard size={18} /> Dashboard
                </Link>
              </li>

              <li>
                <Link to="/dashboard/profile" className="py-2">
                  <FaUser /> Profile
                </Link>
              </li>
              <li>
                <Link to="/dashboard/settings" className="py-2">
                  <FaGear /> Settings
                </Link>
              </li>

              <div className="divider my-1"></div>

              <li>
                <button
                  onClick={signOutUser}
                  className="btn btn-sm btn-error text-white w-full justify-start"
                >
                  <IoLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : loading ? (
          <HashLoader size={25} color="#16a34a" />
        ) : (
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/register"
              className="btn btn-sm btn-outline btn-success rounded-full border-2"
            >
              <UserPlus className="w-4 h-4" />
              <span>Register</span>
            </Link>
            <Link
              to="/login"
              className="btn btn-sm btn-primary text-white rounded-full shadow-md"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </Link>
          </div>
        )}

        {/* Mobile Avatar and Menu */}
        {user && (
          <div className="dropdown dropdown-end z-50 lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar border-2 border-green-500 p-[2px]"
            >
              <div className="w-9 rounded-full">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow-xl border border-base-200"
            >
              <MobileUserMenu />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
