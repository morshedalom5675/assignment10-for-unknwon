import React from "react";
import { Camera, Send, ShieldCheck, Trophy, ArrowDown } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: <Camera size={60} />,
      title: "See an Issue? Capture It!",
      desc: "Whether it's a pile of waste, a clogged drain, or an environmental hazard, just grab your phone and snap a clear photo. Your eyes are the first step to a cleaner city.",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      img: "📸", // এখানে আপনি চাইলে ইলস্ট্রেশন ইমেজ পাথ দিতে পারেন
    },
    {
      icon: <Send size={60} />,
      title: "Pin & Submit Your Report",
      desc: "Upload the image via our user-friendly dashboard. Add the location and a brief description. Our system automatically logs your contribution to the community map.",
      color: "text-green-600",
      bgColor: "bg-green-100",
      img: "📍",
    },
    {
      icon: <ShieldCheck size={60} />,
      title: "Verified by Community Admin",
      desc: "Our dedicated team of admins verifies every report to ensure accuracy. Once confirmed, it is dispatched to the relevant local authorities for immediate action.",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      img: "🛡️",
    },
    {
      icon: <Trophy size={60} />,
      title: "Watch the Magic Happen",
      desc: "Stay updated through your dashboard as the status changes from 'Pending' to 'Resolved'. Celebrate a cleaner environment and earn your community impact points!",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      img: "🌟",
    },
  ];

  return (
    <div className="bg-base-100 overflow-hidden">
      {/* Hero Section of Process */}
      <div className="bg-green-600 py-24 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
          Our Working Process
        </h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto px-4">
          Making a difference shouldn't be complicated. Here is how we bridge
          the gap between problems and solutions.
        </p>
        <div className="mt-10 animate-bounce flex justify-center">
          <ArrowDown size={40} />
        </div>
      </div>

      {/* Steps Section */}
      <div className="max-w-7xl mx-auto py-20 px-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-12 mb-32 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Visual Part */}
            <div className="flex-1 flex justify-center">
              <div
                className={`w-64 h-64 md:w-96 md:h-96 ${step.bgColor} rounded-[60px] flex items-center justify-center text-[100px] md:text-[150px] shadow-inner `}
              >
                {step.img}
              </div>
            </div>

            {/* Content Part */}
            <div className="flex-1 text-center lg:text-left">
              <span className={`text-7xl font-black opacity-10 block mb-2`}>
                0{index + 1}
              </span>
              <div
                className={`${step.color} mb-6 flex justify-center lg:justify-start`}
              >
                {step.icon}
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white leading-tight">
                {step.title}
              </h2>
              <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed italic">
                {step.desc}
              </p>

              <div className="mt-8 flex items-center gap-2 justify-center lg:justify-start font-bold text-green-600">
                <div className="h-[2px] w-12 bg-green-600"></div>
                <span>Join the movement</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action at Bottom */}
      <div className="bg-gray-900 py-20 text-center text-white rounded-t-[100px]">
        <h2 className="text-4xl font-bold mb-8 italic">
          Ready to make your first report?
        </h2>
        <button className="btn btn-success btn-lg rounded-full px-12 text-white shadow-xl shadow-green-500/20">
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default Process;
