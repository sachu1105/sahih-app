import "@fontsource/poppins"; 
import logo from "../assets/images/logo1.jpg";
import { useState } from "react"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track if the menu is open

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <nav className="font-poppins font-bold flex justify-between items-center px-8 py-4 bg-white shadow-md shadow-amber-100 relative">
      {/* Logo */}
      <div className="">
        <img 
          src={logo} 
          alt="Logo" 
          className="h-10" 
        />
      </div>
      
      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Nav Links (Desktop) */}
      <div className="hidden md:flex space-x-9">
        <a href="#home" className="text-black hover:text-amber-500">Home</a>
        <a href="#about" className="text-black hover:text-amber-500">About Us</a>
        <a href="#features" className="text-black hover:text-amber-500">Features</a>
        <a href="#pricing" className="text-black hover:text-amber-500">Pricing</a>
        <a href="#verify" className="text-black hover:text-amber-500">Verify Certificate</a>
      </div>

      {/* Buttons (Desktop) */}
      <div className="hidden md:flex space-x-4">
        <button className="px-10 py-2 border border-amber-600 rounded-md">
          Login
        </button>
        <button className="px-10 py-2 bg-gradient-to-r from-[#e5c200] to-[#b99503] rounded-md hover:from-[#e5c200] hover:to-[#b99503]">
          Register
        </button>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-white shadow-lg z-20`}>
        <div className="flex flex-col items-center space-y-4 py-4">
          <a href="#home" className="text-black hover:text-amber-500">Home</a>
          <a href="#about" className="text-black hover:text-amber-500">About Us</a>
          <a href="#features" className="text-black hover:text-amber-500">Features</a>
          <a href="#pricing" className="text-black hover:text-amber-500">Pricing</a>
          <a href="#verify" className="text-black hover:text-amber-500">Verify Certificate</a>

          {/* Mobile Buttons */}
          <div className="flex flex-col space-y-4 pt-4">
            <button className="px-10 py-2 border border-amber-600 rounded-md">
              Login
            </button>
            <button className="px-10 py-2 bg-gradient-to-r from-[#e5c200] to-[#b99503] rounded-md hover:from-[#e5c200] hover:to-[#b99503]">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
