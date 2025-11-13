import React, { use, useEffect, useRef, useState } from "react";
import { useLoaderData, Link, useParams } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const IssueDetails = () => {
  const { user } = use(AuthContext);
  const { id: issueId } = useParams();
  const issue = useLoaderData();
  const modalRef = useRef(null);
  const [contributes, setContributes] = useState([]);

  const { title, category, location, description, image, date, amount, _id } =
    issue;

  const contributionSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const amount = e.target.amount.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const newContributor = {
      issue: issueId,
      title: title,
      contributor_name: name,
      contributor_email: user?.email,
      contributor_phone: phone,
      contributor_image: user?.photoURL,
      amount: amount,
      address: address,
      date: new Date().toISOString().split("T")[0],
    };
    fetch("https://cleantrack-assignment-server.vercel.app/contributes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newContributor),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          modalRef.current.close();
          Swal.fire({
            title: "Thanks for your contribution 👌",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  useEffect(() => {
    fetch(
      `https://cleantrack-assignment-server.vercel.app/issue/contributes/${issueId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setContributes(data);
      });
  }, [issueId]);

  return (
    <section className="container mx-auto px-4 py-16">
      <title>CleanTrack || Issue Details</title>

      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-gray-100">
          {title}
        </h1>
        <p className="text-gray-500 dark:text-gray-300 mt-2 text-sm sm:text-base">
          {category} • {location}
        </p>
      </div>

      {/* Content Grid */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image */}
        <div className="flex-1 rounded-2xl overflow-hidden shadow-lg dark:shadow-gray-700">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Details */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Info Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md dark:shadow-gray-700 space-y-3">
            <div className="flex justify-between text-gray-700 dark:text-gray-200">
              <span className="font-medium">Category:</span>
              <span className="font-semibold capitalize">{category}</span>
            </div>
            <div className="flex justify-between text-gray-700 dark:text-gray-200">
              <span className="font-medium">Location:</span>
              <span className="font-semibold">{location}</span>
            </div>
            <div className="flex justify-between text-gray-700 dark:text-gray-200">
              <span className="font-medium">Date:</span>
              <span className="font-semibold">{date}</span>
            </div>
            <div className="flex justify-between text-gray-700 dark:text-gray-200">
              <span className="font-medium">Amount:</span>
              <span className="font-semibold text-green-700 dark:text-green-500">
                ৳{amount}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md dark:shadow-gray-700">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Description
            </h2>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              to="/allIssue"
              className="flex-1 text-center px-4 py-3 rounded-xl bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-100 font-medium hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors"
            >
              ← Back to All Issues
            </Link>

            {/* Open modal */}
            <button
              onClick={() => modalRef.current.showModal()}
              className="flex-1 text-center px-4 py-3 rounded-xl bg-green-600 dark:bg-green-500 text-white font-medium hover:bg-green-700 dark:hover:bg-green-600 transition-colors"
            >
              Pay Clean-Up Contribution
            </button>

            <dialog
              ref={modalRef}
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box max-h-[90vh] overflow-y-auto">
                <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700 rounded-2xl p-8 border dark:border-gray-700">
                  <h2 className="text-3xl font-bold text-center text-green-700 dark:text-green-500 mb-6">
                    Contribute to a Clean-up
                  </h2>

                  <form onSubmit={contributionSubmit} className="space-y-5">
                    {/* Issue Title */}
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
                        Issue Title
                      </label>
                      <input
                        value={title}
                        type="text"
                        placeholder="Enter issue title"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 cursor-not-allowed"
                        readOnly
                      />
                    </div>

                    {/* Amount */}
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
                        Amount
                      </label>
                      <input
                        name="amount"
                        type="number"
                        placeholder="Enter contribution amount"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 outline-none bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      />
                    </div>

                    {/* Contributor Name */}
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
                        Contributor Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 outline-none bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        readOnly
                        value={user?.email}
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 cursor-not-allowed"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
                        Phone Number
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="Enter phone number"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 outline-none bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      />
                    </div>

                    {/* Address */}
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
                        Address
                      </label>
                      <input
                        name="address"
                        type="text"
                        placeholder="Enter your address"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 outline-none bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition duration-300"
                    >
                      Confirm Contribution
                    </button>
                  </form>
                </div>
              </div>

              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>

      {/* Contribution Table */}
      <div className="overflow-x-auto my-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-gray-100 relative inline-block">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              People contributes to this issue : {contributes.length}
            </span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-green-500 rounded-full mt-2"></span>
          </h2>
        </div>
        <table className="table bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <thead>
            <tr>
              <th className="text-gray-700 dark:text-gray-200">SL.</th>
              <th className="text-gray-700 dark:text-gray-200">Name</th>
              <th className="text-gray-700 dark:text-gray-200">
                Email & Number
              </th>
              <th className="text-gray-700 dark:text-gray-200">
                Contributing Price
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contributes.map((contribute, index) => (
              <tr
                key={index}
                className="hover:bg-green-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100"
              >
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={
                            contribute.contributor_image ||
                            "https://img.daisyui.com/images/profile/demo/2@94.webp"
                          }
                          alt="Avatar"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {contribute.contributor_name}
                      </div>
                      <div className="text-sm opacity-50">
                        {contribute.address}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {contribute.contributor_email}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {contribute.contributor_phone}
                  </span>
                </td>
                <td>{contribute.amount}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default IssueDetails;
