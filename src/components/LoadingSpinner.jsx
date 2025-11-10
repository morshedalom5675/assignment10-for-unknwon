import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="relative w-20 h-20">
        {/* Outer Gradient Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-green-400 border-t-blue-500 border-b-green-600 animate-spin"></div>
        {/* Inner Ring Shadow */}
        <div className="absolute inset-4 rounded-full bg-white shadow-inner"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
