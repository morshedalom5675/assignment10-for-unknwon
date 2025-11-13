import React, { use } from "react";
import { Target, Lightbulb, HeartHandshake } from "lucide-react"; // Lucide Icons for key points
import { AuthContext } from "../context/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";
import { useNavigation } from "react-router";

const About = () => {
  const { loading } = use(AuthContext);
  const navigation = useNavigation();
  if (loading || navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-gray-200 relative inline-block">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Our Mission & Story
            </span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-green-500 rounded-full mt-2"></span>
          </h2>
          <p className="text-base-content/70 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            We believe that a clean community is a shared responsibility. Find
            out how CleanTrack empowers every citizen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 p-6 rounded-xl bg-base-200 shadow-xl border border-base-300">
            <div className="w-full h-80 flex items-center justify-center text-primary/70 text-lg font-semibold">
              <img src="https://i.ibb.co.com/cK6hWYdW/image.jpg" alt="" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-base-content mb-6">
              Empowering Change, One Report at a Time.
            </h3>
            <p className="mb-8 text-base-content/80 leading-relaxed">
              CleanTrack was founded on the idea that local issues often go
              unresolved due to a lack of proper communication channels. We
              provide a simple, transparent portal for citizens to instantly
              report issues like illegal dumping, road damage, and broken public
              property.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Target className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-base-content">
                    Transparent Tracking
                  </h4>
                  <p className="text-sm text-base-content/70">
                    Track the status of every reported issue, from 'Ongoing' to
                    'Resolved'.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Lightbulb className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-base-content">
                    Community Funding
                  </h4>
                  <p className="text-sm text-base-content/70">
                    Contribute financially to help fund immediate cleanup and
                    repair operations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <HeartHandshake className="w-6 h-6 text-info flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-base-content">
                    Action & Volunteering
                  </h4>
                  <p className="text-sm text-base-content/70">
                    Join local cleanup drives and turn reported issues into
                    community action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
