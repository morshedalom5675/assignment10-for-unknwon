import React, { use } from "react";
import IssueCard from "./IssueCard";

const RecentIssue = ({ issuePromise }) => {
  const data = use(issuePromise);

  return (
    <section className="container mx-auto my-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 relative inline-block">
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Latest Cleanup Issues
          </span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-green-500 rounded-full mt-2"></span>
        </h2>
        <p className="text-gray-500 mt-3 text-sm sm:text-base">
          Recently reported cleanliness and maintenance issues from your
          community.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
        {data.map((issue) => (
          <IssueCard key={issue._id} issue={issue} />
        ))}
      </div>
    </section>
  );
};

export default RecentIssue;
