import React from "react";
import { MapPin, Tag, Eye } from "lucide-react";
import { Link } from "react-router";

const IssueCard = ({ issue }) => {
  const { image, title, category, location, amount, _id } = issue;

  return (
    <div className="bg-white dark:bg-slate-800 shadow-md dark:shadow-lg rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-700 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 flex flex-col">
      <div className="w-full h-48 sm:h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col flex-1 p-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 line-clamp-1 mb-2">
          {title}
        </h2>

        <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 dark:text-gray-300 gap-2">
          <div className="flex items-center gap-1">
            <Tag size={14} className="text-green-600 dark:text-green-400" />
            <span className="capitalize">{category}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} className="text-blue-600 dark:text-blue-400" />
            <span className="truncate">{location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <p className="text-gray-700 dark:text-gray-300 font-medium">
            Amount:
          </p>
          <p className="text-lg sm:text-xl font-bold text-green-700 dark:text-green-400">
            ৳{amount}
          </p>
        </div>

        <Link
          to={`/issueDetails/${_id}`}
          className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-green-600 dark:bg-green-700 text-white text-sm sm:text-base font-medium hover:bg-green-700 dark:hover:bg-green-600 transition-colors duration-200"
        >
          <Eye size={16} />
          See More
        </Link>
      </div>
    </div>
  );
};

export default IssueCard;
