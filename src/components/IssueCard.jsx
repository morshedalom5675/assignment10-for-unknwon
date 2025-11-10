import React from "react";
import { MapPin, Tag, Eye } from "lucide-react";
import { Link } from "react-router";

const IssueCard = ({issue}) => {
    const { image, title, category, location, amount, _id } = issue
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* 🖼️ Image */}
      <div className="w-full h-48 sm:h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* 🧾 Content */}
      <div className="flex flex-col flex-1 p-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 line-clamp-1 mb-2">
          {title}
        </h2>

        <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 gap-2">
          <div className="flex items-center gap-1">
            <Tag size={14} className="text-green-600" />
            <span className="capitalize">{category}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} className="text-blue-600" />
            <span className="truncate">{location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <p className="text-gray-700 font-medium">Amount:</p>
          <p className="text-lg sm:text-xl font-bold text-green-700">
            ৳{amount}
          </p>
        </div>

        <Link
          to={`/issueDetails/${_id}`}
          className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-green-600 text-white text-sm sm:text-base font-medium hover:bg-green-700 transition-colors duration-200"
        >
          <Eye size={16} />
          See More
        </Link>
      </div>
    </div>
  );
};

export default IssueCard;
