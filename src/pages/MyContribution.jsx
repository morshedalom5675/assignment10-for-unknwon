import React from "react";
import { FileDown } from "lucide-react";

const MyContribution = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* 🔹 Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-700">My Contributions</h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Track your cleanup contribution payments and download reports anytime.
        </p>
      </div>

      {/* 🔹 Table Section */}
      <div className="overflow-x-auto bg-white shadow-xl rounded-2xl border border-gray-100">
        <table className="table w-full">
          {/* Table Head */}
          <thead className="bg-green-600 text-white uppercase text-sm">
            <tr>
              <th className="py-3 px-4 rounded-tl-2xl">Issue Title</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Paid Amount</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4 text-center rounded-tr-2xl">
                Download Report
              </th>
            </tr>
          </thead>

          {/* Table Body (Dummy Data) */}
          <tbody>
            <tr className="hover:bg-green-50">
              <td className="py-3 px-4 font-semibold text-gray-800">
                Street Cleaning Drive
              </td>
              <td className="py-3 px-4 text-gray-700">Cleanliness</td>
              <td className="py-3 px-4 text-green-700 font-medium">৳500</td>
              <td className="py-3 px-4 text-gray-700">2025-11-08</td>
              <td className="py-3 px-4 text-center">
                <button className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white gap-2">
                  <FileDown size={16} />
                  Download
                </button>
              </td>
            </tr>

            <tr className="hover:bg-green-50">
              <td className="py-3 px-4 font-semibold text-gray-800">
                Park Waste Removal
              </td>
              <td className="py-3 px-4 text-gray-700">Garbage</td>
              <td className="py-3 px-4 text-green-700 font-medium">৳800</td>
              <td className="py-3 px-4 text-gray-700">2025-10-29</td>
              <td className="py-3 px-4 text-center">
                <button className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white gap-2">
                  <FileDown size={16} />
                  Download
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Empty State */}
        <div className="hidden text-center py-8 text-gray-500">
          No contributions found 💰
        </div>
      </div>
    </section>
  );
};

export default MyContribution;
