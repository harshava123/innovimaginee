import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/bgimg.png";
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false); // Close menu on small screens
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-28 mr-2" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => handleScroll('services')} className="text-white hover:text-gray-300">
              Services
            </button>
            <button onClick={() => handleScroll('portfolio')} className="text-white hover:text-gray-300">
              Portfolio
            </button>
            <button onClick={() => handleScroll('innovations')} className="text-white hover:text-gray-300">
              Innovations
            </button>
            <button onClick={() => handleScroll('contact')} className="text-white hover:text-gray-300">
              Connect
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-black shadow-md">
            <nav className="flex flex-col items-center py-4 space-y-4">
              <button onClick={() => handleScroll('services')} className="text-white hover:text-gray-300">
                Services
              </button>
              <button onClick={() => handleScroll('portfolio')} className="text-white hover:text-gray-300">
                Portfolio
              </button>
              <button onClick={() => handleScroll('innovations')} className="text-white hover:text-gray-300">
                Innovations
              </button>
              <button onClick={() => handleScroll('contact')} className="text-white hover:text-gray-300">
                Connect
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
