import React from "react";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Local Resident",
      text: "CleanTrack has completely transformed our neighborhood. Reporting issues is now incredibly easy, and the response time is impressive!",
      img: "https://i.pravatar.cc/150?u=alex",
    },
    {
      id: 2,
      name: "Sarah Miller",
      role: "Volunteer",
      text: "The best platform for community service. I love how transparent the process is, allowing us to see the real impact of our contributions.",
      img: "https://i.pravatar.cc/150?u=sarah",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "City Planner",
      text: "A highly efficient way to bridge the gap between citizens and authorities. This project is a great example of smart community management.",
      img: "https://i.pravatar.cc/150?u=mike",
    },
    {
      id: 4,
      name: "Emma Davis",
      role: "Active Citizen",
      text: "I finally feel like I have a voice in keeping my city clean. The reward of seeing an issue resolved is truly satisfying.",
      img: "https://i.pravatar.cc/150?u=emma",
    },
  ];

  return (
    <section className="py-24 bg-base-100 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Heading Consistent with your Theme */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-gray-200 relative inline-block">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              What Our Community Says
            </span>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-green-500 rounded-full"></span>
          </h2>
          <p className="mt-8 text-gray-500 dark:text-gray-400 italic">
            Trusted by thousands of citizens and volunteers
          </p>
        </div>

        {/* 2x2 Grid for Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="relative p-8 bg-base-200 dark:bg-gray-800 rounded-3xl border border-base-300 dark:border-gray-700 hover:border-green-500 hover:shadow-xl transition-all duration-500 group"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-green-500/10 group-hover:text-green-500/20 transition-colors" />
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="relative">
                  <img
                    src={rev.img}
                    alt={rev.name}
                    className="w-20 h-20 rounded-full border-4 border-white dark:border-gray-700 shadow-lg object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-gray-600 dark:text-gray-300 italic mb-4 leading-relaxed text-sm md:text-base">
                    "{rev.text}"
                  </p>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    {rev.name}
                  </h4>
                  <span className="text-sm text-green-600 font-semibold uppercase tracking-wider">
                    {rev.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
