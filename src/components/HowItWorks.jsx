import React from "react";
import { Camera, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <Camera className="w-8 h-8" />,
      title: "Snap & Report",
      desc: "Spot a problem? Just take a quick photo and upload it with the location.",
      stepNo: "01",
    },
    {
      id: 2,
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Community Review",
      desc: "The community and our local team verify the issue to ensure authenticity.",
      stepNo: "02",
    },
    {
      id: 3,
      icon: <MapPin className="w-8 h-8" />,
      title: "Fix Budget",
      desc: "A suggested budget is created for the cleaning drive or repair work.",
      stepNo: "03",
    },
    {
      id: 4,
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Action & Clean",
      desc: "The issue is resolved, and you get a notification with the clean-up proof.",
      stepNo: "04",
    },
  ];

  return (
    <section className="py-24 bg-base-100 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* আপনার দেওয়া হেডিং স্টাইল এখানে ব্যবহার করা হয়েছে */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-gray-200 relative inline-block">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              How Our Process Works
            </span>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-green-500 rounded-full"></span>
          </h2>
          <p className="mt-6 text-gray-500 dark:text-gray-400">
            Step-by-step from reporting to resolving
          </p>
        </div>

        {/* Timeline Layout (No Cards) */}
        <div className="relative mt-10">
          {/* ডেক্সটপের জন্য কানেক্টিং ড্যাশ লাইন */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 border-t-2 border-dashed border-green-500/30 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center group">
                {/* আইকন সার্কেল */}
                <div className="w-20 h-20 bg-white dark:bg-gray-800 border-2 border-green-500 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/10 ring-8 ring-base-100 dark:ring-gray-900 relative group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  {step.icon}
                  {/* স্টেপ নম্বর ব্যাজ */}
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white dark:border-gray-800">
                    {step.stepNo}
                  </span>
                </div>

                {/* টেক্সট কন্টেন্ট */}
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed px-2">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
