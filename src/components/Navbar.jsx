import React, { use, useEffect, useState } from "react";
import { FaGear, FaUser } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
// Import Link from react-router-dom, as recommended practice
import { Link, NavLink } from "react-router"; 
import { AuthContext } from "../context/AuthContext";
import { Leaf, LogIn, UserPlus } from "lucide-react";
import { HashLoader } from "react-spinners";

const Navbar = () => {
  const { user, signOutUser, loading } = use(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // ... (useEffect for theme handling remains the same)
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  // -----------------------------------------------------------------------------------
  // Helper Component: Mobile Auth Links (Login/Register)
  const MobileAuthLinks = () => (
    <>
      <li className="p-2"> {/* Added p-2 padding for better visual spacing */}
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

  // Helper Component: Mobile User Info & Logout
  const MobileUserMenu = () => (
      <div className="pb-2 border-t border-base-300 pt-2 mt-2">
        <div className="pb-2 border-b border-base-300 mb-2">
            <li className="text-sm font-bold ml-4">{user?.displayName}</li>
            <li className="text-xs ml-4">{user?.email}</li>
        </div>
        
        {/* User Dropdown Links */}
        <li>
            <Link to="/">
                <FaUser /> Profile
            </Link>
        </li>
        <li>
            <Link to="/">
                <FaGear /> Settings
            </Link>
        </li>
        <li>
            <button
                onClick={signOutUser}
                className="btn btn-sm btn-error text-white mt-1 w-full justify-start" // Changed to btn-error for Logout
            >
                <IoLogOut /> Logout
            </button>
        </li>
      </div>
  );
  // -----------------------------------------------------------------------------------

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-30"> 
      {/* Left side (Logo & Dropdown) */}
      <div className="navbar-start">
        <div className="dropdown">
          {/* Hamburger Menu Icon */}
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
          
          {/* MOBILE DROPDOWN MENU */}
          <ul
            tabIndex={0} // Ensure tabIndex is 0 or removed for proper accessibility
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-60 p-2 shadow-xl"
          >
            {/* Standard Nav Links */}
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/allIssue">All Issue</NavLink></li>
            
            {/* Conditional Mobile Links */}
            {user && (
                <>
                    <li><NavLink to="/addIssue">Add Issue</NavLink></li>
                    <li><NavLink to="/myIssue">My Issue</NavLink></li>
                    <li><NavLink to="/myContribution">My Contribution</NavLink></li>
                    {/* User Profile/Logout in Mobile Menu */}
                    <MobileUserMenu />
                </>
            )}
            
            {!user && <MobileAuthLinks />}

          </ul>
        </div>

        {/* LOGO */}
        <Link to="/" className="flex items-center text-success ml-2">
            <Leaf className="w-6 h-6 mr-1" />
            <h2 className="text-2xl font-bold">CleanTrack</h2>
        </Link>
      </div>

      {/* Center (Desktop Links) */}
      <div className="navbar-center hidden lg:flex">
        {user ? (
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/allIssue">All Issue</NavLink></li>
            <li><NavLink to="/addIssue">Add Issue</NavLink></li>
            <li><NavLink to="/myIssue">My Issue</NavLink></li>
            <li><NavLink to="/myContribution">My Contribution</NavLink></li>
          </ul>
        ) : (
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/allIssue">All Issue</NavLink></li>
          </ul>
        )}
      </div>

      {/* Right side (Theme Toggle + Auth/Avatar) */}
      <div className="navbar-end">
        {/* theme toggle (Kept outside Auth block) */}
        <label
          onChange={(e) => handleTheme(e.target.checked)}
          className="toggle text-base-content mr-3"
        >
            {/* Theme Toggle Input and SVG (Code shortened for brevity) */}
            <input
                type="checkbox"
                checked={theme === 'dark'} // Use 'checked' prop to control state
                value="synthwave"
                className="theme-controller"
            />
            {/* SVG icons for Sun and Moon */}
             <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>
             <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
        </label>
        
        {/* Auth/User Avatar (Only visible on large screens or as Avatar dropdown) */}
        {user ? (
            <div className="dropdown dropdown-end z-50 hidden lg:block"> {/* Only show avatar dropdown on Lg screens */}
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

                {/* Desktop Avatar Dropdown (Menu content remains the same) */}
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
                >
                    <div className="pb-3 border-b border-b-gray-200">
                        <li className="text-sm font-bold">{user?.displayName}</li>
                        <li className="text-xs">{user?.email}</li>
                    </div>

                    <li className="mt-3">
                        <Link to="/">
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
                            className="btn btn-sm btn-error text-white mt-1 w-full justify-start"
                        >
                            <IoLogOut /> Logout
                        </button>
                    </li>
                </ul>
            </div>
        ) : loading ? (
          <HashLoader size={25} color="#16a34a" />
        ) : (
            // Show Auth buttons only on large screens, or hide them entirely if preferred
            <div className="hidden lg:flex items-center space-x-3"> 
                <Link
                    to="/register"
                    className="btn btn-sm btn-outline btn-success rounded-full 
                            transition duration-300 shadow-sm hover:shadow-lg hover:scale-[1.02] border-2"
                >
                    <UserPlus className="w-4 h-4" />
                    <span>Register</span>
                </Link>

                <Link
                    to="/login"
                    className="btn btn-sm btn-primary text-white rounded-full 
                            transition duration-300 shadow-md hover:shadow-lg hover:scale-105"
                >
                    <LogIn className="w-4 h-4" />
                    <span>Login</span>
                </Link>
            </div>
        )}
        
        {/* MOBILE AVATAR (Visible only on small screens) */}
        {user && (
             <div className="dropdown dropdown-end z-50 lg:hidden">
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
                {/* Mobile avatar menu content is now handled within the main dropdown for links */}
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                    <MobileUserMenu />
                </ul>
            </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;