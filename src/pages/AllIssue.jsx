import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import IssueCard from "../components/IssueCard";
import { AuthContext } from "../context/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";

const AllIssue = () => {
  const data = useLoaderData();
  const { loading } = use(AuthContext);
  const [sortCategory, setSortCategory] = useState("");

  if (loading) {
    return <LoadingSpinner />;
  }

  // Sort data by category if selected
  const sortedData = sortCategory
    ? [...data].filter((issue) => issue.category === sortCategory)
    : data;

  return (
    <section className="container mx-auto px-4 py-16">
      <title>CleanTrack || All Issue</title>

      {/* Page Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 relative inline-block">
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            All Community Issues
          </span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-[3px] bg-green-500 rounded-full mt-2"></span>
        </h1>
        <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
          Explore all reported cleanliness and maintenance issues submitted by
          our community members.
        </p>
      </div>

      {/* Sort Field */}
      <div className="flex justify-end mb-6 items-center gap-2">
        <label className="font-medium text-gray-700 dark:text-gray-300">
          Filter by Category:
        </label>
        <select
          value={sortCategory}
          onChange={(e) => setSortCategory(e.target.value)}
          className="p-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
        >
          <option value="">All Categories</option>
          <option value="Garbage">Garbage</option>
          <option value="Drainage">Drainage</option>
          <option value="Waterlogging">Waterlogging</option>
          <option value="Infrastructure">Infrastructure</option>
        </select>
      </div>

      {/* 🔹 Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedData.map((issue) => (
          <IssueCard key={issue._id} issue={issue} />
        ))}
      </div>
    </section>
  );
};

export default AllIssue;
