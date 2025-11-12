import React, { use } from "react";
import IssueCard from "./IssueCard";
import { Link } from "react-router";

const RecentIssue = ({ issuePromise }) => {
  const data = use(issuePromise) || [];

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
        {Array.isArray(data) && data.length > 0 ? (
          data.map((issue) => <IssueCard key={issue._id} issue={issue} />)
        ) : (
          <div className="col-span-full flex justify-center py-10">
            <div className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl p-8 sm:p-10 max-w-md text-center">
              {/* Icon */}
              <div className="flex justify-center mb-5">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png"
                  alt="No data"
                  className="w-24 h-24 opacity-90 drop-shadow-sm"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                No Recent Issues Found 😔
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                It looks like there are no reported issues right now.
                <br />
                Check back later or be the first to make your community cleaner!
              </p>

              {/* Button */}
              <Link
                to="/addIssue"
                className="inline-block bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                Report a New Issue
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentIssue;
