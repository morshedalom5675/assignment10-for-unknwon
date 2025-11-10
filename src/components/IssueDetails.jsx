import React from "react";
import { useLoaderData, Link } from "react-router";

const IssueDetails = () => {
  const issue = useLoaderData(); 
  console.log(issue);



  const { title, category, location, description, image, date, amount, _id } = issue;

  return (
    <section className="container mx-auto px-4 py-16">
      {/* 🔹 Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
          {title}
        </h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          {category} • {location}
        </p>
      </div>

      {/* 🔹 Content Grid */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image */}
        <div className="flex-1 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Details */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Info Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md space-y-3">
            <div className="flex justify-between text-gray-700">
              <span className="font-medium">Category:</span>
              <span className="font-semibold capitalize">{category}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span className="font-medium">Location:</span>
              <span className="font-semibold">{location}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span className="font-medium">Date:</span>
              <span className="font-semibold">{date}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span className="font-medium">Amount:</span>
              <span className="font-semibold text-green-700">৳{amount}</span>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Description</h2>
            <p className="text-gray-600">{description}</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              to="/allIssue"
              className="flex-1 text-center px-4 py-3 rounded-xl bg-gray-300 text-gray-800 font-medium hover:bg-gray-400 transition-colors"
            >
              ← Back to All Issues
            </Link>
            <button
              className="flex-1 text-center px-4 py-3 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition-colors"
              onClick={() => alert(`Paying ৳${amount} for clean-up contribution`)}
            >
              Pay Clean-Up Contribution
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IssueDetails;
