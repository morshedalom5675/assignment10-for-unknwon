import React, { use } from "react";
import {
  MapPin,
  Image as ImageIcon,
  FileText,
  Coins,
  CalendarDays,
} from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const ReportIssue = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const handleReportSubmit = (e) => {
    e.preventDefault();
    const newReport = {
      title: e.target.title.value,
      category: e.target.category.value,
      location: e.target.location.value,
      description: e.target.description.value,
      image: e.target.image.value,
      amount: e.target.amount.value,
      email: user?.email,
      status: "Ongoing",
      date: new Date().toISOString().split("T")[0],
    };

    fetch("http://localhost:3000/issue", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newReport),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          navigate("/");
          Swal.fire({
            title: "Thanks for your report, we will try solve this",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <section className="max-w-3xl mx-auto my-16 p-8 bg-white dark:bg-slate-900 shadow-xl rounded-2xl border border-gray-200 dark:border-slate-700 transition-colors duration-300">
      <title>CleanTrack || Add Issue</title>
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
        Report a Community Issue
      </h2>

      <form onSubmit={handleReportSubmit} className="space-y-5">
        {/* Issue Title */}
        <div>
          <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
            Issue Title
          </label>
          <input
            name="title"
            type="text"
            placeholder="e.g. Overflowing garbage on Road 21"
            className="w-full p-3 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
            Category
          </label>
          <select
            name="category"
            className="w-full p-3 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
            required
          >
            <option>Select Category</option>
            <option>Garbage</option>
            <option>Drainage</option>
            <option>Waterlogging</option>
            <option>Infrastructure</option>
          </select>
        </div>

        {/* Location */}
        <div className="relative">
          <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
            Location
          </label>
          <div className="flex items-center border border-gray-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800">
            <MapPin className="ml-3 text-green-600 dark:text-green-400" size={20} />
            <input
              name="location"
              type="text"
              placeholder="e.g. Mohakhali, Dhaka"
              className="w-full p-3 outline-none rounded-xl bg-transparent text-gray-800 dark:text-gray-100"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
            Description
          </label>
          <textarea
            name="description"
            rows="4"
            placeholder="Describe the issue in detail..."
            className="w-full p-3 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
            required
          ></textarea>
        </div>

        {/* Image */}
        <div className="relative">
          <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
            Image URL
          </label>
          <div className="flex items-center border border-gray-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800">
            <ImageIcon className="ml-3 text-blue-600 dark:text-blue-400" size={20} />
            <input
              name="image"
              type="url"
              placeholder="https://example.com/image.jpg"
              className="w-full p-3 outline-none rounded-xl bg-transparent text-gray-800 dark:text-gray-100"
              required
            />
          </div>
        </div>

        {/* Amount */}
        <div className="relative">
          <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
            Suggested Fix Budget (৳)
          </label>
          <div className="flex items-center border border-gray-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800">
            <Coins className="ml-3 text-yellow-500 dark:text-yellow-400" size={20} />
            <input
              name="amount"
              type="number"
              placeholder="Enter estimated cost"
              className="w-full p-3 outline-none rounded-xl bg-transparent text-gray-800 dark:text-gray-100"
              required
            />
          </div>
        </div>

        {/* Email (readonly) */}
        <div>
          <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
            Reporter Email
          </label>
          <input
            type="email"
            readOnly
            value={user?.email}
            className="w-full p-3 border border-gray-300 dark:border-slate-600 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 rounded-xl cursor-not-allowed"
          />
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-sm">
          <span className="font-semibold">Status:</span> Ongoing
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-4 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          Submit Issue
        </button>
      </form>
    </section>
  );
};

export default ReportIssue;
