import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const MyIssues = () => {
  const { user } = use(AuthContext);
  const [myIssue, setMyIssue] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/issue?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyIssue(data);
      });
  }, [user]);

  return (
    <section className="container mx-auto px-4 py-12">
      {/*  Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-700">
          My Reported Issues
        </h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Manage and track the issues you have reported in your community
        </p>
      </div>

      {/*  Table */}
      <div className="overflow-x-auto bg-white shadow-xl rounded-2xl border border-gray-100">
        <table className="table w-full">
          {/* Head */}
          <thead className="bg-green-600 text-white uppercase text-sm">
            <tr>
              <th className="py-3 px-4 rounded-tl-2xl">Title</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 rounded-tr-2xl text-center">Actions</th>
            </tr>
          </thead>

          {/* Body (Dummy Data) */}
          {myIssue.map((issue) => (
            <tbody>
              <tr className="hover:bg-green-50">
                <td className="py-3 px-4 font-semibold text-gray-800">
                  {issue.title}
                  <p className="text-sm text-gray-500">{issue.description}</p>
                </td>
                <td className="py-3 px-4 text-gray-700">{issue.category}</td>
                <td className="py-3 px-4 text-gray-700">{issue.location}</td>
                <td className="py-3 px-4 text-gray-700">{issue.date}</td>
                <td className="py-3 px-4 text-green-700 font-medium">
                  ৳{issue.amount}
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      issue.status === "ongoing"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {issue.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-center space-x-2">
                  <button className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white">
                    Update
                  </button>
                  <button className="btn btn-sm bg-red-500 hover:bg-red-600 text-white">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>

        {/* Empty state */}
        <div className="hidden text-center py-8 text-gray-500">
          No issues found 😔
        </div>
      </div>
    </section>
  );
};

export default MyIssues;
