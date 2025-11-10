import React from "react";
import { useLoaderData } from "react-router";
import IssueCard from "../components/IssueCard";

const AllIssue = () => {
  const data = useLoaderData();

  return (
    <section className="container mx-auto px-4 py-16">
      {/* 🔹 Page Header */}
      <div className="text-center mb-12">
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

      {/* 🔹 Grid Layout */}
      {
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((issue) => (
            <IssueCard key={issue._id} issue={issue} />
          ))}
        </div>
      }
    </section>
  );
};

export default AllIssue;
