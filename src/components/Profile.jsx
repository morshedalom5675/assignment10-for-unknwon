import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { 
  User, 
  Mail, 
  Calendar, 
  ShieldCheck, 
  Camera,
  ExternalLink
} from "lucide-react";

const Profile = () => {
  const { user } = use(AuthContext);

  return (
    <div className="max-w-4xl mx-auto">
      {/* প্রোফাইল হেডার কার্ড */}
      <div className="relative mb-8">
        {/* কভার ফটো স্টাইল ব্যাকগ্রাউন্ড */}
        <div className="h-40 bg-gradient-to-r from-green-500 to-blue-600 rounded-t-3xl"></div>
        
        {/* প্রোফাইল তথ্য সেকশন */}
        <div className="bg-white dark:bg-gray-800 px-8 pb-8 rounded-b-3xl shadow-sm border border-base-200 dark:border-gray-700">
          <div className="relative flex flex-col md:flex-row items-center md:items-end -mt-16 md:-mt-12 gap-6">
            {/* প্রোফাইল ইমেজ */}
            <div className="relative group">
              <div className="w-32 h-32 rounded-2xl border-4 border-white dark:border-gray-800 overflow-hidden shadow-xl">
                <img 
                  src={user?.photoURL || "https://i.ibb.co/mS7zF9P/user.png"} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-2 right-2 p-2 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:bg-gray-100 transition-colors border border-gray-200 dark:border-gray-600">
                <Camera size={16} className="text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            {/* নাম ও মেম্বারশিপ স্ট্যাটাস */}
            <div className="text-center md:text-left flex-1">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 justify-center md:justify-start">
                {user?.displayName || "Anonymous User"}
                <span className="badge badge-success badge-sm text-white p-3 px-4">Active Member</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1 justify-center md:justify-start italic">
                Community Guardian since {user?.metadata?.creationTime ? new Date(user.metadata.creationTime).getFullYear() : '2024'}
              </p>
            </div>

            {/* এডিট প্রোফাইল বাটন */}
            <button className="btn btn-outline btn-success rounded-xl px-8">
              Update Profile
            </button>
          </div>
        </div>
      </div>

      {/* বিস্তারিত তথ্য গ্রিড */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ইউজার ইনফো কার্ড */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-base-200 dark:border-gray-700">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <User className="text-green-600" size={20} /> Personal Information
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-2xl">
              <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <Mail size={18} className="text-blue-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-semibold">Email Address</p>
                <p className="text-sm font-medium">{user?.email || "Not Available"}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-2xl">
              <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <ShieldCheck size={18} className="text-green-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-semibold">Verified Status</p>
                <p className="text-sm font-medium">{user?.emailVerified ? "Verified User" : "Pending Verification"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-2xl">
              <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <Calendar size={18} className="text-purple-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-semibold">Last Sign In</p>
                <p className="text-sm font-medium">{user?.metadata?.lastSignInTime ? new Date(user.metadata.lastSignInTime).toLocaleDateString() : 'N/A'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* কুইক স্ট্যাটাস বা অ্যাক্টিভিটি সামারি */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-base-200 dark:border-gray-700 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <ExternalLink className="text-blue-600" size={20} /> Quick Stats
            </h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-2xl border border-green-100 dark:border-green-800">
                <p className="text-2xl font-bold text-green-600">12</p>
                <p className="text-xs text-gray-500">Reports</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-800">
                <p className="text-2xl font-bold text-blue-600">05</p>
                <p className="text-xs text-gray-500">Resolved</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-800 rounded-2xl">
             <p className="text-sm text-yellow-800 dark:text-yellow-500 font-medium">
               Keep contributing to clean your community and earn badges!
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;