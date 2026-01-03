import React from "react";
import { Trash2, Building2, Wrench } from "lucide-react";
import { FaRoad } from "react-icons/fa";
import { Link } from "react-router";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      title: "Garbage Buildup",
      desc: "Report accumulation of waste or uncollected garbage in public areas.",
      icon: <Trash2 className="w-12 h-12 mb-4 text-error" />,
      borderColor: "border-error",
      btnClass: "btn-error",
      link: "/allIssue",
    },
    {
      id: 2,
      title: "Illegal Construction",
      desc: "Report construction work violating local rules or encroachment issues.",
      icon: <Building2 className="w-12 h-12 mb-4 text-warning" />,
      borderColor: "border-warning",
      btnClass: "btn-warning",
      link: "/allIssue",
    },
    {
      id: 3,
      title: "Broken Public Property",
      desc: "Report damage to footpaths, streetlights, or public utilities.",
      icon: <Wrench className="w-12 h-12 mb-4 text-info" />,
      borderColor: "border-info",
      btnClass: "btn-info",
      link: "/allIssue",
    },
    {
      id: 4,
      title: "Road Damage / Potholes",
      desc: "Report large potholes or structural damage to main roads.",
      icon: <FaRoad className="w-12 h-12 mb-4 text-primary" />,
      borderColor: "border-primary",
      btnClass: "btn-primary",
      link: "/allIssue",
    },
  ];

  return (
    <section className="py-24 bg-base-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        {/* আপনার প্রিয় গ্রাডিয়েন্ট হেডিং স্টাইল */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 dark:text-gray-200 relative inline-block">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Core Issue Categories
            </span>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-green-500 rounded-full"></span>
          </h2>
          <p className="mt-8 text-gray-500 dark:text-gray-400">
            Select a category to report and help us keep the community clean
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((item) => (
            <div
              key={item.id}
              className={`card bg-base-200 dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 ${item.borderColor}`}
            >
              <div className="card-body items-center text-center p-8">
                <div className="p-4 bg-base-100 dark:bg-gray-700 rounded-full shadow-inner mb-2 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="card-title text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
                <div className="card-actions mt-6">
                  <Link
                    to={item.link}
                    className={`btn btn-sm ${item.btnClass} text-white px-6 rounded-full hover:scale-105 transition-transform`}
                  >
                    View & Report
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
