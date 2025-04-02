import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import stoneCarpetLogo from '../assets/Stone Carpet no-bg logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResidentialOpen, setIsResidentialOpen] = useState(false);
  const [isCommercialOpen, setIsCommercialOpen] = useState(false);
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);

  return (
    <nav className="text-white z-50">
      <div className="bg-blue-400">
        <div className="flex justify-between py-2 text-sm container mx-auto">
          <h1 className="font-medium text-2xl">#1 rated power washers in Nairobi</h1>
          <div className="flex space-x-4">
            <h1 className="font-medium text-xl">Call 0722000000</h1>
            <Link to={"/get-quote"}><button className="bg-orange-500 px-3 py-1 rounded">Get Free Estimate</button></Link>
          </div>
        </div>
      </div>
      <div className="bg-amber-500">
        <div className="flex justify-between items-center text-white container mx-auto">
          <Link to={"/"} className="flex items-center space-y-2 py-4">
            <img src={stoneCarpetLogo} alt="Stone Carpet Logo" className="w-auto h-16" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-500">
              <li>Home</li>
            </Link>

            {/* Residential Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsResidentialOpen(true)}
              onMouseLeave={() => setIsResidentialOpen(false)}
            >
              <li className="cursor-pointer hover:text-blue-500">
                Residential Power Washing ▼
              </li>
              {isResidentialOpen && (
                <ul className="absolute left-0 w-48 bg-blue-500 shadow-lg rounded-lg z-50">
                  <li>
                    <Link to="/residential-cleaning#window-cleaning" className="block px-4 py-2 hover:bg-amber-500 hover:rounded-lg">
                      Window cleaning
                    </Link>
                  </li>
                  <li>
                    <Link to="/residential-cleaning#pressure-washing" className="block px-4 py-2 hover:bg-amber-500 hover:rounded-lg">
                      Pressure washing
                    </Link>
                  </li>
                  <li>
                    <Link to="/residential-cleaning#soft-washing" className="block px-4 py-2 hover:bg-amber-500 hover:rounded-lg">
                      Soft washing
                    </Link>
                  </li>
                  <li>
                    <Link to="/residential-cleaning#floor-washing" className="block px-4 py-2 hover:bg-amber-500 hover:rounded-lg">
                      Floor Washing
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            {/* Commercial Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsCommercialOpen(true)}
              onMouseLeave={() => setIsCommercialOpen(false)}
            >
              <li className="cursor-pointer hover:text-blue-500">Commercial ▼</li>
              {isCommercialOpen && (
                <ul className="absolute left-0 w-48 bg-blue-500 shadow-lg rounded-lg z-50">
                  <li>
                    <Link to="/commercial-washing#corporate-washing" className="block px-4 py-2 hover:bg-amber-500 hover:rounded-lg">
                      Commercial Corporate Washing
                    </Link>
                  </li>
                  <li>
                    <Link to="/commercial-washing#corporate-carpet-cleaning" className="block px-4 py-2 hover:bg-amber-500 hover:rounded-lg">
                      Specialized Commercial Detailing
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            {/* Discover Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsDiscoverOpen(true)}
              onMouseLeave={() => setIsDiscoverOpen(false)}
            >
              <li className="cursor-pointer hover:text-blue-500">Discover Our Story ▼</li>
              {isDiscoverOpen && (
                <ul className="absolute left-0 w-48 bg-blue-500 shadow-lg rounded-lg z-50">
                  <li>
                    <Link to="/blogs" className="block px-4 py-2 hover:bg-amber-500 hover:rounded-lg">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-story" className="block px-4 py-2 hover:bg-amber-500 hover:rounded-lg">
                      About Us
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full">
            <ul className="flex flex-col items-center space-y-4 py-6 text-gray-700 text-lg">
              <li className="hover:text-blue-500 cursor-pointer">
                <Link to="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                <Link to="/residential-cleaning" onClick={() => setIsOpen(false)}>
                  Residential Power Washing
                </Link>
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                <Link to="/commercial-washing" onClick={() => setIsOpen(false)}>
                  Commercial
                </Link>
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                <Link to="/our-story" onClick={() => setIsOpen(false)}>
                  Our Story
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
