import React from "react";
import { Search, PlayCircle } from "lucide-react";
import { Link } from "react-router";

const HeroBanner = () => {
  return (
    <div className="carousel w-full">
      {/* Common Style */}
      {[
      // slide-1
        {
          id: "slide1",
          next: "slide2",
          prev: "slide4",
          img: "https://static.vecteezy.com/system/resources/previews/024/178/276/non_2x/beach-full-of-garbage-and-plastic-waste-as-wide-banner-for-environmental-and-recycle-concepts-ai-generative-photo.jpg",
          title: (
            <>
              Clean City, <span className="text-green-400">Healthy Life</span>
            </>
          ),
          desc:
            "Report garbage issues and be part of a sustainable community effort.",
          buttons: (
            <div className="flex flex-wrap gap-4">
              <Link
                to="/report"
                className="btn bg-green-500 hover:bg-green-600 text-white font-semibold"
              >
                <Search size={18} className="mr-2" />
                Report Issue
              </Link>

              <button className="btn btn-outline border-white text-white hover:bg-white hover:text-green-700">
                <PlayCircle size={18} className="mr-2" />
                Watch Video
              </button>
            </div>
          ),
        },
        // slide-2
        {
          id: "slide2",
          next: "slide3",
          prev: "slide1",
          img: "https://d2v4sgc2k02d5t.cloudfront.net/hydro-cleansing.com/media/pages/cleaning-services/environmental-cleaning-hpwj.webp",
          title: (
            <>
              Join <span className="text-green-400">Community Clean Drives</span>
            </>
          ),
          desc: "Together, we can make every street shine again.",
          buttons: (
            <button className="btn bg-green-500 hover:bg-green-600 text-white">
              Join Now
            </button>
          ),
        },
        // slide-3
        {
          id: "slide3",
          next: "slide4",
          prev: "slide2",
          img: "https://www.tuvsud.com/-/media/regions/in/images/sustainability/ss_767486674_7-key-themes.png?h=365&w=1280&la=en-IN&hash=D99AA352C3F1D70879FE429E99938732",
          title: (
            <>
              Report. Track. <span className="text-green-400">Restore.</span>
            </>
          ),
          desc:
            "Let’s rebuild our environment — one report at a time.",
          buttons: (
            <Link
              to="/issues"
              className="btn btn-outline border-white text-white hover:bg-white hover:text-green-700"
            >
              View Issues
            </Link>
          ),
        },
        // slide-4
        {
          id: "slide4",
          next: "slide1",
          prev: "slide3",
          img: "https://imageio.forbes.com/specials-images/imageserve/65ad49201b8a4682439df59f/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          title: (
            <>
              Be a <span className="text-green-400">Change Maker</span>
            </>
          ),
          desc: "Become a volunteer and lead your area’s clean-up mission.",
          buttons: (
            <Link
              to="/volunteer"
              className="btn bg-green-500 hover:bg-green-600 text-white font-semibold"
            >
              Join as Volunteer
            </Link>
          ),
        },
      ].map((slide) => (
        <div
          key={slide.id}
          id={slide.id}
          className="carousel-item relative w-full"
        >
          <img
            src={slide.img}
            className="w-full h-[60vh] md:h-[90vh] object-cover"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center md:items-start justify-center px-4 sm:px-8 md:px-16 text-white text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 md:mb-4">
              {slide.title}
            </h1>
            <p className="max-w-xl text-base sm:text-lg md:text-xl mb-5">
              {slide.desc}
            </p>
            {slide.buttons}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 justify-between">
            <a href={`#${slide.prev}`} className="btn btn-circle btn-sm sm:btn-md">
              ❮
            </a>
            <a href={`#${slide.next}`} className="btn btn-circle btn-sm sm:btn-md">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroBanner;
