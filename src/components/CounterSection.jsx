import React from "react";
import { Users, CheckCircle, Clock } from "lucide-react";

const CounterSection = () => {
  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* --- A. COMMUNITY STATS SECTION (Uses DaisyUI Stats Component) --- */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-gray-200 relative inline-block">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Our Community Impact
            </span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-green-500 rounded-full mt-2"></span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm sm:text-base">
            Statistics showing the collective effort and progress made in
            cleanliness and resolution.
          </p>
        </div>

        {/* DaisyUI Stats Component - Automatically Responsive */}
        <div className="stats stats-vertical lg:stats-horizontal w-full shadow-lg mb-20">
          {/* Stat 1: Total Registered Users */}
          <div className="stat p-6">
            <div className="stat-figure text-primary">
              <Users className="w-8 h-8" />
            </div>
            <div className="stat-title">Registered Users</div>
            {/* ⚠️ Note: Data will be fetched dynamically, using dummy data now */}
            <div className="stat-value text-primary">1,254+</div>
            <div className="stat-desc">Growing daily</div>
          </div>

          {/* Stat 2: Issues Resolved */}
          <div className="stat p-6">
            <div className="stat-figure text-success">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="stat-title">Issues Resolved</div>
            <div className="stat-value text-success">89%</div>
            <div className="stat-desc">Out of all issues reported</div>
          </div>

          {/* Stat 3: Issues Pending */}
          <div className="stat p-6">
            <div className="stat-figure text-warning">
              <Clock className="w-8 h-8" />
            </div>
            <div className="stat-title">Issues Pending</div>
            <div className="stat-value">56</div>
            <div className="stat-desc">Awaiting cleanup drives</div>
          </div>
        </div>

        {/* --- B. VOLUNTEER CALL-TO-ACTION (CTA) SECTION --- */}

        {/* DaisyUI Hero Component for a prominent CTA */}
        <div className="hero p-10 bg-primary/10 rounded-xl shadow-inner border border-primary/20">
          <div className="hero-content flex-col lg:flex-row p-0">
            <div className="text-center lg:text-left lg:pr-10">
              <h1 className="text-3xl font-bold text-primary">
                Join the Clean Drive!
              </h1>
              <p className="py-4 text-base-content/80">
                Your local community needs your help. Volunteer a few hours of
                your time to participate in our scheduled cleanup drives and
                make a real difference.
              </p>
              <button className="btn btn-lg btn-primary text-white mt-4">
                Become a Volunteer
              </button>
            </div>

            {/* Image Placeholder (Replace with a relevant image) */}
            <div className="w-full lg:w-1/2 mt-6 lg:mt-0 " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
