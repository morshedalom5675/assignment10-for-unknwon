import React from "react";
import { Search, PlayCircle } from "lucide-react";
import { Link } from "react-router";



const HeroBanner = () => {
    
    
    return (
      
         <div className="carousel w-full">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://static.vecteezy.com/system/resources/previews/024/178/276/non_2x/beach-full-of-garbage-and-plastic-waste-as-wide-banner-for-environmental-and-recycle-concepts-ai-generative-photo.jpg"
          className="w-full object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-start justify-center px-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Clean City, <span className="text-green-400">Healthy Life</span>
          </h1>
          <p className="max-w-xl text-lg mb-6">
            Report garbage issues and be part of a sustainable community effort.
          </p>

          <div className="flex gap-4">
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
        </div>

        {/* Navigation Arrows */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://d2v4sgc2k02d5t.cloudfront.net/hydro-cleansing.com/media/pages/cleaning-services/environmental-cleaning-hpwj.webp"
          className="w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col items-start justify-center px-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Join <span className="text-green-400">Community Clean Drives</span>
          </h1>
          <p className="max-w-xl text-lg mb-6">
            Together, we can make every street shine again.
          </p>

          <button className="btn bg-green-500 hover:bg-green-600 text-white">
            Join Now
          </button>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://www.tuvsud.com/-/media/regions/in/images/sustainability/ss_767486674_7-key-themes.png?h=365&w=1280&la=en-IN&hash=D99AA352C3F1D70879FE429E99938732"
          className="w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col items-start justify-center px-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Report. Track. <span className="text-green-400">Restore.</span>
          </h1>
          <p className="max-w-xl text-lg mb-6">
            Let’s rebuild our environment — one report at a time.
          </p>

          <Link
            to="/issues"
            className="btn btn-outline border-white text-white hover:bg-white hover:text-green-700"
          >
            View Issues
          </Link>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/65ad49201b8a4682439df59f/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"
          className="w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col items-start justify-center px-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Be a <span className="text-green-400">Change Maker</span>
          </h1>
          <p className="max-w-xl text-lg mb-6">
            Become a volunteer and lead your area’s clean-up mission.
          </p>

          <Link
            to="/volunteer"
            className="btn bg-green-500 hover:bg-green-600 text-white font-semibold"
          >
            Join as Volunteer
          </Link>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
    
    //   <div
          
    //   className="hero min-h-screen relative flex items-center justify-center"
    //   style={{
    //     backgroundImage: `url('https://i.ibb.co.com/N25zdgrK/banner.webp')`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    //   >
 
    //   {/* Dim Overlay */}
    //   <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-green-800/50 to-blue-900/60 backdrop-blur-sm"></div>

    //   {/* Content */}
    //   <div className="hero-content text-left text-neutral-content max-w-6xl w-full px-6 md:px-12 relative z-10">
    //     <div className="max-w-2xl">
    //       {/* Eco Slogan */}
    //       <p className="text-lg md:text-xl font-medium text-green-200 tracking-widest uppercase mb-4 animate-fade-in">
    //         🌿 Together for a Cleaner Tomorrow
    //       </p>

    //       {/* Main Heading */}
    //       <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white drop-shadow-lg">
    //         Report. Track. <br />
    //         <span className="text-green-300">Restore Our City</span>
    //       </h1>

    //       {/* Description */}
    //       <p className="mt-6 text-lg md:text-xl text-gray-200 font-light leading-relaxed">
    //         Join hands to make our neighborhoods cleaner, safer, and greener.  
    //         Report issues, request cleanups, and be part of the change.
    //       </p>

    //       {/* Buttons */}
    //       <div className="flex flex-wrap gap-4 mt-8">
    //         <Link
    //           to="/report"
    //           className="btn bg-green-500 hover:bg-green-600 text-white font-semibold btn-lg shadow-lg transition-transform transform hover:scale-105"
    //         >
    //           <Search size={20} className="mr-2" />
    //           REPORT AN ISSUE
    //         </Link>

    //         <a
    //           href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-green-700 transition-all duration-300 btn-lg flex items-center"
    //         >
    //           <PlayCircle size={20} className="mr-2" />
    //           WATCH HOW IT WORKS
    //         </a>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Floating Tagline Bottom */}
    //   <div className=" md:absolute bottom-6 left-0 right-0 text-center text-gray-100 text-sm tracking-wide">
    //     “Small Actions. Big Impact. Let’s Clean Our City Together.” 💧
    //   </div>
    // </div>
  );
};

export default HeroBanner;
