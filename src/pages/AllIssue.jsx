import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import IssueCard from "../components/IssueCard";
import { AuthContext } from "../context/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";

const AllIssue = () => {
  const data = useLoaderData();
  const { loading } = use(AuthContext);
  const [sortCategory, setSortCategory] = useState("");

  // --- প্যাগিনেশন স্টেট ---
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // প্রতি পেজে ৮টি করে কার্ড দেখাবে

  if (loading) {
    return <LoadingSpinner />;
  }

  // ১. প্রথমে ফিল্টার করা
  const filteredData = sortCategory
    ? data.filter((issue) => issue.category === sortCategory)
    : data;

  // ২. প্যাগিনেশন ক্যালকুলেশন (ফিল্টার করা ডেটার ওপর ভিত্তি করে)
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // ৩. হ্যান্ডেলার: ক্যাটাগরি চেঞ্জ হলে পেজ ১-এ ফিরিয়ে নেওয়া
  const handleFilterChange = (e) => {
    setSortCategory(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <title>CleanTrack || All Issue</title>

      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-gray-100 relative inline-block">
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            All Community Issues
          </span>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-[3px] bg-green-500 rounded-full"></span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-6 text-sm sm:text-base max-w-2xl mx-auto">
          Explore all reported cleanliness and maintenance issues submitted by
          our community members.
        </p>
      </div>

      <div className="flex justify-end mb-8 items-center gap-2">
        <label className="font-medium text-gray-700 dark:text-gray-300">
          Filter by Category:
        </label>
        <select
          value={sortCategory}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
        >
          <option value="">All Categories</option>
          <option value="Garbage">Garbage</option>
          <option value="Drainage">Drainage</option>
          <option value="Waterlogging">Waterlogging</option>
          <option value="Infrastructure">Infrastructure</option>
        </select>
      </div>

      {/* গ্রিডে এখন sortedData-র বদলে currentItems দেখাবে */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[400px]">
        {currentItems.map((issue) => (
          <IssueCard key={issue._id} issue={issue} />
        ))}
      </div>

      {/* --- প্যাগিনেশন কন্ট্রোল --- */}
      {totalPages > 1 && (
        <div className="flex flex-col items-center mt-12 gap-4">
          <div className="join border border-green-500/30 shadow-sm">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="join-item btn btn-md bg-base-100 dark:bg-gray-800"
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`join-item btn btn-md ${
                  currentPage === index + 1
                    ? "btn-success text-white"
                    : "bg-base-100 dark:bg-gray-800"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="join-item btn btn-md bg-base-100 dark:bg-gray-800"
            >
              Next
            </button>
          </div>
          <p className="text-sm text-gray-500">
            Page {currentPage} of {totalPages}
          </p>
        </div>
      )}

      {/* যদি কোনো ডেটা না থাকে */}
      {filteredData.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          No issues found in this category.
        </div>
      )}
    </section>
  );
};

export default AllIssue;
