import React, { use, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const MyIssues = () => {
  const { user } = use(AuthContext);
  const [myIssue, setMyIssue] = useState([]);
  const modalRef = useRef(null);
  useEffect(() => {
    fetch(`http://localhost:3000/issue?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyIssue(data);
      });
  }, [user]);

  // update issue
  const updateSubmit = (e,id) => {
    e.preventDefault();
    const updateData = {
      title: e.target.title.value,
      category: e.target.category.value,
      description: e.target.description.value,
      amount: e.target.amount.value,
      state: e.target.status.value,
    };
    // console.log("id", id);
    fetch(`http://localhost:3000/issue/${id}`, {
      method: "PUT",
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(updateData)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        modalRef.current.close()
      });
  };


//   delete issue
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
        fetch(`http://localhost:3000/issue/${_id}`, {
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

              // update UI 
              const remainingIssue = myIssue.filter((issue) => issue._id !== _id);
              setMyIssue(remainingIssue);
            }
          });
      }
    });
  };

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

          {/* Body (Dummy Data) */}
          {myIssue.map((issue, index) => (
            <tbody key={index}>
              <tr className="hover:bg-green-50">
                <th>{index + 1}</th>
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
                <td className="py-3 px-4 space-x-2">
                  <button
                    onClick={() => modalRef.current.showModal()}
                    className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    Update
                  </button>

                  {/* open update modal */}
                  <dialog
                    ref={modalRef}
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle"
                  >
                    {/* modal form */}
                    <div className="modal-box max-h-[90vh] overflow-y-auto">
                      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-8 border">
                        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
                          Update Your Issue
                        </h2>

                        <form
                          onSubmit={() =>
                            updateSubmit(event,issue._id)
                          }
                          className="space-y-5"
                        >
                          {/* Issue Title */}
                          <div>
                            <label className="block text-gray-700 font-medium mb-1">
                              Issue Title
                            </label>
                            <input
                              defaultValue={issue.title}
                              name="title"
                              type="text"
                              placeholder="Enter issue title"
                              className="w-full p-3 border border-gray-300 rounded-xl bg-gray-100"
                            />
                          </div>

                          {/* Amount */}
                          <div>
                            <label className="block text-gray-700 font-medium mb-1">
                              Amount
                            </label>
                            <input
                              defaultValue={issue.amount}
                              name="amount"
                              type="text"
                              placeholder="Enter contribution amount"
                              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                            />
                          </div>

                          {/* issue category */}
                          <div>
                            <label className="block text-gray-700 font-medium mb-1">
                              Category
                            </label>
                            <select
                              defaultValue={issue.category}
                              name="category"
                              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                            >
                              <option>Update Category</option>
                              <option>Garbage</option>
                              <option>Drainage</option>
                              <option>Waterlogging</option>
                              <option>Infrastructure</option>
                            </select>
                          </div>

                          {/* Description */}
                          <div>
                            <label className="block text-gray-700 font-medium mb-1">
                              Description
                            </label>
                            <textarea
                              defaultValue={issue.description}
                              name="description"
                              rows="4"
                              placeholder="Describe the issue in detail..."
                              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                            ></textarea>
                          </div>

                          {/* status */}
                          <div>
                            <label className="block text-gray-700 font-medium mb-1">
                              Status
                            </label>
                            <select
                              defaultValue={issue.status}
                              name="status"
                              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                            >
                              <option>Select Status</option>
                              <option>Ongoing</option>
                              <option>Ended</option>
                            </select>
                          </div>

                          {/* Submit Button */}
                          <button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition duration-300"
                          >
                            Update
                          </button>
                        </form>
                      </div>
                    </div>

                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                  <button
                    
                    onClick={() => handleDeleteIssue(issue._id)}
                    className="btn btn-sm bg-red-500 hover:bg-red-600 text-white">
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
