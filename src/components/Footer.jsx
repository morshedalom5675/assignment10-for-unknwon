import React from "react";
import { Link } from "react-router";
import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-slate-900 text-gray-700 dark:text-gray-300 mt-16 border-t border-gray-200 dark:border-slate-700">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* 🌿 Logo & Description */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Leaf className="w-6 h-6 text-green-600 dark:text-green-400" />
            <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">
              CleanTrack
            </h2>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Empowering communities to keep their surroundings clean and green.
            Report, track, and contribute to local cleanup efforts easily.
          </p>
        </div>

        {/* 🔗 Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
            Useful Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-green-600 dark:hover:text-green-400 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/allIssue"
                className="hover:text-green-600 dark:hover:text-green-400 transition"
              >
                All Issues
              </Link>
            </li>
            <li>
              <Link
                to="/addIssue"
                className="hover:text-green-600 dark:hover:text-green-400 transition"
              >
                Report Issue
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-green-600 dark:hover:text-green-400 transition"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* ☎️ Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
            Contact
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{" "}
              <a
                href="mailto:support@cleantrack.com"
                className="text-green-600 dark:text-green-400 hover:underline"
              >
                support@cleantrack.com
              </a>
            </li>
            <li>Phone: +880 1234-567890</li>
            <li>Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* 🪴 Copyright */}
        <div className="sm:col-span-2 lg:col-span-1 flex flex-col justify-between">
          <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
            Stay Clean, Stay Green
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} CleanTrack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
