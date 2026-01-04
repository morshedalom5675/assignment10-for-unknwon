import React from "react";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="py-20 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          {/* Contact Form Section */}
          <div className="p-10 lg:p-16 flex-1">
            <h2 className="text-4xl font-black mb-2">Get in Touch</h2>
            <p className="text-gray-500 mb-8">
              Have questions? We'd love to hear from you.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full rounded-xl bg-base-100 h-14"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="input input-bordered w-full rounded-xl bg-base-100 h-14"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered w-full rounded-xl bg-base-100 h-14"
              />
              <textarea
                className="textarea textarea-bordered w-full rounded-xl bg-base-100 h-32"
                placeholder="Tell us more..."
              ></textarea>
              <button className="btn btn-success w-full text-white h-14 rounded-xl text-lg shadow-lg shadow-green-200">
                Send Message
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div className="bg-green-600 p-10 lg:p-16 text-white lg:w-96 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500 rounded-xl">
                  <Mail />
                </div>
                <div>
                  <p className="text-sm opacity-80">Email us</p>
                  <p className="font-bold">support@cleantrack.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500 rounded-xl">
                  <Phone />
                </div>
                <div>
                  <p className="text-sm opacity-80">Call us</p>
                  <p className="font-bold">+880 1234 567 890</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500 rounded-xl">
                  <MapPin />
                </div>
                <div>
                  <p className="text-sm opacity-80">Office</p>
                  <p className="font-bold">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
            <div className="mt-12 flex gap-4 italic text-sm opacity-70">
              <MessageSquare size={20} /> "Your feedback helps us grow cleaner."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
