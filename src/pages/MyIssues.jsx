import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import Modal from "../components/Modal";

const MyIssues = () => {
  const { user } = use(AuthContext);
  const [myIssue, setMyIssue] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://cleantrack-assignment-server.vercel.app/issue?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setMyIssue(data));
    }
  }, [user]);

  // Update issue
  const updateSubmit = (e, id) => {
    e.preventDefault();
    const updateData = {
      title: e.target.title.value,
      category: e.target.category.value,
      description: e.target.description.value,
      amount: e.target.amount.value,
      status: e.target.status.value,
    };

    fetch(`https://cleantrack-assignment-server.vercel.app/issue/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then(() => {
        setSelectedIssue(null); // modal close
        Swal.fire({
          title: "Your issue has been updated",
          icon: "success",
          draggable: true,
        });
        // reload issues
        fetch(
          `https://cleantrack-assignment-server.vercel.app/issue?email=${user.email}`
        )
          .then((res) => res.json())
          .then((data) => setMyIssue(data));
      });
  };

  //  Delete issue
  const handleDeleteIssue = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://cleantrack-assignment-server.vercel.app/issue/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your issue has been deleted.",
                icon: "success",
              });
              setMyIssue(myIssue.filter((issue) => issue._id !== _id));
            }
          });
      }
    });
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <title>CleanTrack || My Issue</title>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 relative inline-block">
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            My Reported Issues
          </span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-[3px] bg-green-500 rounded-full mt-2"></span>
        </h1>
        <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
          Manage and track the issues you have reported in your community
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white dark:bg-gray-900 shadow-xl rounded-2xl border border-gray-100 dark:border-gray-700">
        <table className="table w-full">
          <thead className="bg-green-600 text-white uppercase text-sm">
            <tr>
              <th className="py-3 px-4 rounded-tl-2xl">SL</th>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 rounded-tr-2xl text-center">Actions</th>
            </tr>
          </thead>

          {myIssue.map((issue, index) => (
            <tbody key={index}>
              <tr className="hover:bg-green-50 dark:hover:bg-gray-800">
                <th className="py-3 px-4">{index + 1}</th>
                <td className="py-3 px-4 font-semibold">{issue.title}</td>
                <td className="py-3 px-4">{issue.category}</td>
                <td className="py-3 px-4">{issue.location}</td>
                <td className="py-3 px-4">{issue.date}</td>
                <td className="py-3 px-4 text-green-700 dark:text-green-400">
                  ৳{issue.amount}
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      issue.status === "Ongoing"
                        ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-400"
                        : "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-400"
                    }`}
                  >
                    {issue.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-center space-x-2">
                  <button
                    onClick={() => setSelectedIssue(issue)}
                    className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDeleteIssue(issue._id)}
                    className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>

        {myIssue.length === 0 && (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            No issues found 😔
          </div>
        )}
      </div>

      {/* Custom Modal */}
      <Modal
        isOpen={!!selectedIssue}
        onClose={() => setSelectedIssue(null)}
        title="Update Your Issue"
      >
        {selectedIssue && (
          <form
            onSubmit={(e) => updateSubmit(e, selectedIssue._id)}
            className="space-y-5"
          >
            <input
              defaultValue={selectedIssue.title}
              name="title"
              type="text"
              placeholder="Enter issue title"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            />

            <input
              defaultValue={selectedIssue.amount}
              name="amount"
              type="text"
              placeholder="Enter contribution amount"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            />

            <select
              defaultValue={selectedIssue.category}
              name="category"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              <option>Garbage</option>
              <option>Drainage</option>
              <option>Waterlogging</option>
              <option>Infrastructure</option>
            </select>

            <textarea
              defaultValue={selectedIssue.description}
              name="description"
              rows="4"
              placeholder="Describe the issue..."
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            ></textarea>

            <select
              defaultValue={selectedIssue.status}
              name="status"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              <option>Ongoing</option>
              <option>Ended</option>
            </select>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition"
            >
              Update
            </button>
          </form>
        )}
      </Modal>
    </section>
  );
};

export default MyIssues;
