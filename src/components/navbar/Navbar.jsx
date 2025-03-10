import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full backdrop-blur-xl border-b border-[#6737C3] text-white p-5 flex items-center justify-between z-50">
      <img className="h-10" src="mainlogo.png" alt="Logo" />
      
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
      
      {/* Desktop & Mobile Navigation */}
      <ul
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-[#000000] md:bg-transparent p-5 md:p-0 flex flex-col md:flex-row gap-5 md:gap-8 text-blue-100 items-center transition-transform duration-300 ease-in-out ${menuOpen ? 'block' : 'hidden md:flex'}`}
      >
        {['Home', 'About', 'Services', 'Statistics', 'FAQs'].map((item) => (
          <li key={item}>
            <NavLink
              to={`/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `hover:text-white cursor-pointer ${isActive ? 'text-white font-semibold' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
      
      {/* Contact Button */}
      <NavLink to="/contact" className="hidden md:block">
        <button className="bg-[#6737C3] hover:bg-blue-800 px-5 py-2 rounded-lg transition">
          Contact
        </button>
      </NavLink>
    </nav>
  );
};

export default Navbar;