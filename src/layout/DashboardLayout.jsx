import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import {
  LayoutDashboard,
  FilePlus,
  ClipboardList,
  UserCircle,
  Home,
  Menu,
  LogOut,
  Settings,
  DollarSign,
} from "lucide-react";

const DashboardLayout = () => {
  // মেনু আইটেমগুলো এখানে ডিফাইন করা (ভবিষ্যতে রোল অনুযায়ী আলাদা করা সহজ হবে)
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) =>
            isActive
              ? "bg-green-600 text-white font-bold"
              : "hover:bg-green-100 dark:hover:bg-gray-700"
          }
        >
          <UserCircle size={20} /> My Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/addIssue"
          className={({ isActive }) =>
            isActive
              ? "bg-green-600 text-white font-bold"
              : "hover:bg-green-100 dark:hover:bg-gray-700"
          }
        >
          <FilePlus size={20} /> Add New Issue
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/myIssue"
          className={({ isActive }) =>
            isActive
              ? "bg-green-600 text-white font-bold"
              : "hover:bg-green-100 dark:hover:bg-gray-700"
          }
        >
          <ClipboardList size={20} /> My Reported Issues
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/myContribution"
          className={({ isActive }) =>
            isActive
              ? "bg-green-600 text-white font-bold"
              : "hover:bg-green-100 dark:hover:bg-gray-700"
          }
        >
          <DollarSign size={20} /> My Contribution
        </NavLink>
      </li>

      {/* Divider */}
      <div className="divider my-4 px-4 opacity-50">General</div>

      <li>
        <NavLink to="/" className="hover:bg-blue-100 dark:hover:bg-gray-700">
          <Home size={20} /> Back to Home
        </NavLink>
      </li>
      <li>
        <button className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20">
          <LogOut size={20} /> Logout
        </button>
      </li>
    </>
  );

  return (
    <div className="drawer lg:drawer-open bg-base-200 dark:bg-gray-900 min-h-screen font-sans">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Content Area */}
      <div className="drawer-content flex flex-col">
        {/* Mobile Navbar */}
        <div className="w-full flex items-center justify-between lg:hidden bg-white dark:bg-gray-800 p-4 shadow-md">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
          >
            CleanTrack
          </Link>
          <label
            htmlFor="dashboard-drawer"
            className="btn btn-ghost drawer-button"
          >
            <Menu size={24} />
          </label>
        </div>

        {/* Main Page Content */}
        <main className="p-6 md:p-10">
          {/* Header Title for Pages */}
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Welcome Back!
              </h1>
              <p className="text-sm text-gray-500">
                Manage your reports and track community impact.
              </p>
            </div>
            <div className="hidden md:block">
              {/* এখানে আপনি ইউজারের নাম বা ছোট্ট গ্রাফ দেখাতে পারেন */}
              <Settings className="text-gray-400 hover:rotate-90 transition-transform cursor-pointer" />
            </div>
          </div>

          {/* এই Outlet এই আপনার সাব-পেজগুলো লোড হবে */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm min-h-[70vh] p-6 border border-base-300 dark:border-gray-700">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Sidebar Drawer */}
      <div className="drawer-side z-50">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-72 min-h-full bg-white dark:bg-gray-800 text-base-content shadow-xl space-y-2">
          {/* Dashboard Logo */}
          <div className="p-4 mb-6">
            <Link
              to="/"
              className="text-3xl font-black flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white">
                <LayoutDashboard size={24} />
              </div>
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Dashboard
              </span>
            </Link>
          </div>

          {navLinks}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
