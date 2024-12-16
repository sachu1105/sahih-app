import "@fontsource/poppins"; 
import logo from "../assets/images/logo3w.webp"; 
import { useState } from "react";  


const Navbar = () => {
  // Declare a state variable to track if the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  // Function to toggle the menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  // Toggle the value of isMenuOpen
  };

  return (
    <nav className="font-poppins font-bold flex justify-between items-center px-8 py-4 bg-white shadow-md shadow-amber-100 relative">
      {/* Logo Section */}
      <div className="">
        <img 
          src={logo}  // Display the logo image
          alt="Main logo of shahih.ae" 
          className="h-10"  // Set the height of the logo to 10 units
        />
      </div>
      
      {/* Hamburger Icon for Mobile View */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-black">
          {/* Hamburger Icon (3 horizontal lines) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"  // Set size for the icon
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"  // Path for the 3 lines
            />
          </svg>
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-9">  {/* Hidden on mobile (md:hidden), shown on medium and larger screens */}
        <a href="#home" className="text-black hover:text-amber-500">Home</a>
        <a href="#about" className="text-black hover:text-amber-500">About Us</a>
        <a href="#features" className="text-black hover:text-amber-500">Features</a>
        <a href="#pricing" className="text-black hover:text-amber-500">Pricing</a>
        <a href="#verify" className="text-black hover:text-amber-500">Verify Certificate</a>
      </div>

      {/* Desktop Buttons (Login and Register) */}
      <div className="hidden md:flex space-x-4">  {/* Hidden on mobile */}
        <button className="px-10 py-2 border border-amber-600 rounded-md">
          Login
        </button>
        <button className="px-10 py-2 bg-gradient-to-r from-[#e5c200] to-[#b99503] rounded-md hover:from-[#e5c200] hover:to-[#b99503]">
          Register
        </button>
      </div>

      {/* Mobile Menu (Initially hidden, shown when isMenuOpen is true) */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-white shadow-lg shadow-amber-100 z-20`}>
        {/* When the menu is open, it is shown as a block, otherwise it is hidden */}
        <div className="flex flex-col items-center space-y-4 py-4">
          <a href="#home" className="text-black hover:text-amber-500">Home</a>
          <a href="#about" className="text-black hover:text-amber-500">About Us</a>
          <a href="#features" className="text-black hover:text-amber-500">Features</a>
          <a href="#pricing" className="text-black hover:text-amber-500">Pricing</a>
          <a href="#verify" className="text-black hover:text-amber-500">Verify Certificate</a>

          {/* Mobile Buttons (Login and Register) */}
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
