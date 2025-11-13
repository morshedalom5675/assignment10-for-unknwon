import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { Search, PlayCircle } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const HeroBanner = () => {
  const slides = [
    {
      id: "slide1",
      img: "https://static.vecteezy.com/system/resources/previews/024/178/276/non_2x/beach-full-of-garbage-and-plastic-waste-as-wide-banner-for-environmental-and-recycle-concepts-ai-generative-photo.jpg",
      title: ["Clean City", "Healthy Life"],
      desc: "Report garbage issues and be part of a sustainable community effort.",
      buttons: (
        <div className="flex flex-wrap gap-4">
          <Link
            to="/addIssue"
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
    {
      id: "slide2",
      img: "https://d2v4sgc2k02d5t.cloudfront.net/hydro-cleansing.com/media/pages/cleaning-services/environmental-cleaning-hpwj.webp",
      title: ["Join Community Clean Drives"],
      desc: "Together, we can make every street shine again.",
      buttons: (
        <button className="btn bg-green-500 hover:bg-green-600 text-white">
          Join Now
        </button>
      ),
    },
    {
      id: "slide3",
      img: "https://www.tuvsud.com/-/media/regions/in/images/sustainability/ss_767486674_7-key-themes.png?h=365&w=1280&la=en-IN&hash=D99AA352C3F1D70879FE429E99938732",
      title: ["Report. Track.", "Restore."],
      desc: "Let’s rebuild our environment — one report at a time.",
      buttons: (
        <Link
          to="/allIssue"
          className="btn btn-outline border-white text-white hover:bg-white hover:text-green-700"
        >
          View Issues
        </Link>
      ),
    },
    {
      id: "slide4",
      img: "https://imageio.forbes.com/specials-images/imageserve/65ad49201b8a4682439df59f/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      title: ["Be a Change Maker"],
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
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Manual navigation
  const prevSlide = () =>
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img src={slide.img} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center md:items-start justify-center px-4 sm:px-8 md:px-16 text-white text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 md:mb-4">
              <Typewriter
                words={slide.title}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h1>
            <p className="max-w-xl text-base sm:text-lg md:text-xl mb-5">
              {slide.desc}
            </p>
            {slide.buttons}
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
      >
        ❯
      </button>
    </div>
  );
};

export default HeroBanner;
