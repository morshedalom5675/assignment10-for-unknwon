import React from "react";
import { Trash2, Building2, Wrench } from "lucide-react"; // Lucide-React Icons
import { FaRoad } from "react-icons/fa";
import { Link } from "react-router";

const CategorySection = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-16 text-base-content">
          🔍 Core Issue Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* CARD 1: Garbage */}
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 border-t-4 border-error">
            <div className="card-body items-center text-center">
              <Trash2 className="w-12 h-12 mb-4 text-error" />
              <h3 className="card-title text-xl font-bold text-base-content mb-2">
                Garbage Buildup
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Report accumulation of waste or uncollected garbage in public
                areas.
              </p>
              <div className="card-actions">
                <Link to="/allIssue" className="btn btn-sm btn-error text-white mt-4">
                  View & Report
                </Link>
              </div>
            </div>
          </div>

          {/* CARD 2: Illegal Construction */}
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 border-t-4 border-warning">
            <div className="card-body items-center text-center">
              <Building2 className="w-12 h-12 mb-4 text-warning" />
              <h3 className="card-title text-xl font-bold text-base-content mb-2">
                Illegal Construction
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Report construction work violating local rules or encroachment
                issues.
              </p>
              <div className="card-actions">
                <Link to="/allIssue" className="btn btn-sm btn-warning text-white mt-4">
                  View & Report
                </Link>
              </div>
            </div>
          </div>

          {/* CARD 3: Broken Public Property */}
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 border-t-4 border-info">
            <div className="card-body items-center text-center">
              <Wrench className="w-12 h-12 mb-4 text-info" />
              <h3 className="card-title text-xl font-bold text-base-content mb-2">
                Broken Public Property
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Report damage to footpaths, streetlights, or public utilities.
              </p>
              <div className="card-actions">
                <Link to="/allIssue" className="btn btn-sm btn-info text-white mt-4">
                  View & Report
                </Link>
              </div>
            </div>
          </div>

          {/* CARD 4: Road Damage */}
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 border-t-4 border-primary">
            <div className="card-body items-center text-center">
              <FaRoad className="w-12 h-12 mb-4 text-primary" />
              <h3 className="card-title text-xl font-bold text-base-content mb-2">
                Road Damage / Potholes
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Report large potholes or structural damage to main roads.
              </p>
              <div className="card-actions">
                <Link to="/allIssue" className="btn btn-sm btn-primary text-white mt-4">
                  View & Report
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
