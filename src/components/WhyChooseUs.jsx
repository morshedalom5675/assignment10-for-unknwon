import React from "react";
import { ShieldCheck, Zap, Users, Globe, ChevronRight } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <Zap className="w-6 h-6 text-white" />,
      iconBg: "bg-yellow-500",
      title: "Lightning Fast Responses",
      desc: "Our automated routing system ensures that every report reaches local authorities without any manual delay.",
    },
    {
      id: 2,
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      iconBg: "bg-green-600",
      title: "Community Verified Trust",
      desc: "Transparency is our priority. Every reported issue is cross-checked by the community to maintain data integrity.",
    },
    {
      id: 3,
      icon: <Users className="w-6 h-6 text-white" />,
      iconBg: "bg-blue-600",
      title: "Empowering Citizens",
      desc: "We provide the tools for every citizen to become a guardian of their own environment and neighborhood.",
    },
  ];

  return (
    <section className="py-24 bg-base-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Big Visual Element (No Card) */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800"
                alt="Community Cleanup"
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Decorative background shape */}
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-green-500/10 rounded-3xl -z-10 -rotate-3"></div>
          </div>

          {/* Right Side: Detailed List */}
          <div className="lg:w-1/2">
            <div className="mb-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-gray-200 relative inline-block">
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Redefining Community Service
                </span>
                <span className="absolute -bottom-2 left-0 w-16 h-[3px] bg-green-500 rounded-full"></span>
              </h2>
              <p className="mt-6 text-gray-500 dark:text-gray-400 text-lg">
                We don't just report issues; we build a sustainable ecosystem
                for a cleaner tomorrow.
              </p>
            </div>

            <div className="space-y-8">
              {features.map((item) => (
                <div key={item.id} className="flex gap-5 group">
                  <div
                    className={`flex-shrink-0 w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                      {item.title}
                      <ChevronRight className="w-4 h-4 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
