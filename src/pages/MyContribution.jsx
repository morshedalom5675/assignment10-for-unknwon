import React, { use, useEffect, useState } from "react";
import { FileDown } from "lucide-react";
import { AuthContext } from "../context/AuthContext";

const MyContribution = () => {
  const { user } = use(AuthContext);
  const [myContribution, setMyContribution] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/contributes?${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyContribution(data);
      });
  }, [user]);

  return (
    <section className="container mx-auto px-4 py-12">
      <title>CleanTrack || My Contribution</title>
      {/* 🔹 Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-700">My Contributions</h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Track your cleanup contribution payments and download reports anytime.
          {myContribution.length}
        </p>
      </div>

      {/* 🔹 Table Section */}
      <div className="overflow-x-auto bg-white shadow-xl rounded-2xl border border-gray-100">
        <table className="table w-full">
          {/* Table Head */}
          <thead className="bg-green-600 text-white uppercase text-sm">
            <tr>
              <th className="py-3 px-4 rounded-tl-2xl">SL.</th>
              <th className="py-3 px-4">Issue Title</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Paid Amount</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4 text-center rounded-tr-2xl">
                Download Report
              </th>
            </tr>
          </thead>

          {/* Table Body (Dummy Data) */}
          {myContribution.map((table,index) => (
            <tbody>
              <tr className="hover:bg-green-50">
                <th>{index + 1}</th>
                <td className="py-3 px-4 font-semibold text-gray-800">
                  {table.title}
                </td>
                <td className="py-3 px-4 text-gray-700">{table.category}</td>
                <td className="py-3 px-4 text-green-700 font-medium">
                  ৳{table.amount}
                </td>
                <td className="py-3 px-4 text-gray-700">{table.date}</td>
                <td className="py-3 px-4 text-center">
                  <button className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white gap-2">
                    <FileDown size={16} />
                    Download
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
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
