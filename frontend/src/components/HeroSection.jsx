import heroImage from "../assets/images/hero.jpg";
import pattern from "../assets/images/pattern.jpg";
import "@fontsource/poppins"; 
import { FaArrowRight } from "react-icons/fa"; 

const HeroSection = () => {
  return (
    <section className="font-poppins flex flex-col md:flex-row items-center px-8 pt-3 py-12 font-medium relative">
      {/* Left Content */}
      <div className="flex-1 space-y-4 z-10">
        <h1 className="text-5xl md:text-7xl font-black leading-tight pb-4">
          Digitize Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5c200] to-[#937601]">
            Credentials
          </span>
        </h1>
        <p className="text-2xl pb-6">
          Issue, Verify, and Validate with Confidence
        </p>
        {/* Buttons */}
        <div className="flex space-x-4 pb-4 relative z-10">
          {/* pattern image */}
          <div className="relative">

            <img 
              src={pattern} 
              alt="Background"
              className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 z-0" 
            />
            <button className="px-6 py-3 bg-gradient-to-r from-[#e5c200] to-[#b49900] rounded-md hover:opacity-90 z-10 relative">
              Get Started
            </button>
          </div>
          <button className="px-6 py-3 border border-[#d7b42b] text-black rounded-md hover:bg-[#ab9025]">
            Verify Certificate          
          </button>
        </div>

        <p className="text-lg pb-6 relative z-20">
          Join hundreds of companies issuing secure, digital credentials with ease
        </p>

        {/* Links with arrow */}
        <div className="flex space-x-6 text-lg font-bold">
          <a 
            href="#issue-certificate" 
            className="hover:underline text-transparent bg-clip-text bg-gradient-to-r from-[#e5c200] to-[#b99503] flex items-center"
          >
            Start Issuing Certificates
            <FaArrowRight className="ml-2 text-xl text-[#e5c200] " /> 
          </a>
          <a href="#explore-features" className="hover:underline flex items-center">
            Explore Features 
            <FaArrowRight className="ml-2 text-xl" /> 
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 mt-8 md:mt-0 relative">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full max-w-lg mx-auto md:max-w-xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
