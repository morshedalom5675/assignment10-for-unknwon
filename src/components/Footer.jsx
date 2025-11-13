import React from "react";

import { Link } from "react-router"; 
import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    
    <footer className="bg-base-300 text-base-content mt-16 border-t border-base-300">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl">
        
        <div>
          <div className="flex items-center gap-2 mb-3">
            
            <Leaf className="w-6 h-6 text-success" /> 
            <h2 className="text-2xl font-bold text-success">
              CleanTrack
            </h2>
          </div>
  
          <p className="text-sm text-base-content/70 leading-relaxed">
            Empowering communities to keep their surroundings clean and green.
            Report, track, and contribute to local cleanup efforts easily.
          </p>
        </div>

        <div>
          
          <h3 className="text-lg font-semibold mb-3 text-base-content">
            Useful Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                
                className="hover:text-success transition" 
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/allIssue"
                className="hover:text-success transition"
              >
                All Issues
              </Link>
            </li>
            <li>
              <Link
                to="/addIssue"
                className="hover:text-success transition"
              >
                Report Issue
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-success transition"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3 text-base-content">
            Contact
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{" "}
              <a
                href="mailto:support@cleantrack.com"
                className="text-success hover:underline" 
              >
                support@cleantrack.com
              </a>
            </li>
            <li className="text-base-content/70">Phone: +880 1234-567890</li>
            <li className="text-base-content/70">Dhaka, Bangladesh</li>
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-1 flex flex-col justify-between">
          <h3 className="text-lg font-semibold mb-3 text-base-content">
            Stay Clean, Stay Green
          </h3>
          <p className="text-sm text-base-content/60">
            © {new Date().getFullYear()} CleanTrack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;