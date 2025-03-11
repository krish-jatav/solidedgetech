import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { GoArrowUpRight } from 'react-icons/go';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full backdrop-blur-xl border-b border-[#2c8de8] text-white p-5 flex items-center justify-between z-50">
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
        className={`absolute md:static top-20 left-0 w-full rounded-b-[10vw] md:w-auto bg-[#CDC9C9] md:bg-transparent p-5 md:p-0 flex flex-col md:flex-row gap-5 md:gap-8 text-black md:text-white text-lg items-center transition-transform duration-500 ease-in-out ${menuOpen ? 'block' : 'hidden md:flex'}`}
      >
        {['Home', 'About', 'Services', 'Statistics', 'FAQs', 'Contact'].map((item) => (
          <li key={item}>
            <Link
              to={`/${item.toLowerCase()}`}
              className={({ isActive }) =>
                ` hover:font-bold cursor-pointer ${isActive ? 'border-b border-black' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
           
          </li>
        ))}
      </ul>
      
      {/* Contact Button */}
      <NavLink to="/contact" className="hidden md:block">
        <button className="text-[#000000] flex justify-center items-center gap-2 bg-[#CDC9C9] hover:bg-blue-800 px-5 py-2 rounded-lg transition">
          Contact <span> <GoArrowUpRight></GoArrowUpRight> </span>
        </button>
      </NavLink>
    </nav>
  );
};

export default Navbar;