import React, { use, useEffect, useState } from "react";
import { FileDown } from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const MyContribution = () => {
  const { user } = use(AuthContext);
  const [myContribution, setMyContribution] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/contributes?${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyContribution(data);
      });
  }, [user]);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Data Export", 14, 16);
    autoTable(doc, {
      startY: 20,
      head: [["SL", "Issue Title", "Category", "Paid Amount", "Date"]],
      body: myContribution.map((item, index) => [
        index + 1,
        item.title,
        item.address,
        item.amount,
        item.date,
      ]),
      styles: { fontSize: 10 },
      headStyles: { fillColor: [34, 197, 94] }, // green header
    });
    doc.save("Data.pdf");
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <title>CleanTrack || My Contribution</title>

      {/* Page Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-gray-100 relative inline-block">
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            My Contributions
          </span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-[3px] bg-green-500 rounded-full mt-2"></span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
          Track your cleanup contribution payments and download reports anytime.
        </p>
      </div>

      {/* Download Button */}
      {myContribution.length > 0 && (
        <div className="text-right mb-4">
          <button
            onClick={downloadPDF}
             className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition transform duration-300 ease-in-out gap-2"
          >
            <FileDown size={16} /> Download Report
          </button>
        </div>
      )}

      {/* Table Section */}
      <div className="overflow-x-auto bg-white dark:bg-gray-900 shadow-xl rounded-2xl border border-gray-100 dark:border-gray-700">
        <table className="table w-full">
          {/* Table Head */}
          <thead className="bg-green-600 text-white uppercase text-sm">
            <tr>
              <th className="py-3 px-4 rounded-tl-2xl">SL.</th>
              <th className="py-3 px-4">Issue Title</th>
              <th className="py-3 px-4">Address</th>
              <th className="py-3 px-4">Paid Amount</th>
              <th className="py-3 px-4">Date</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {myContribution.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-green-50 dark:hover:bg-gray-800"
              >
                <th className="py-3 px-4 text-gray-800 dark:text-gray-100">
                  {index + 1}
                </th>
                <td className="py-3 px-4 font-semibold text-gray-800 dark:text-gray-200">
                  {item.title}
                </td>
                <td className="py-3 px-4 text-gray-700 dark:text-gray-400">
                  {item.address}
                </td>
                <td className="py-3 px-4 text-green-700 dark:text-green-500 font-medium">
                  ৳{item.amount}
                </td>
                <td className="py-3 px-4 text-gray-700 dark:text-gray-400">
                  {item.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty State */}
        {myContribution.length === 0 && (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            No contributions found 💰
          </div>
        )}
      </div>
    </section>
  );
};

export default MyContribution;
