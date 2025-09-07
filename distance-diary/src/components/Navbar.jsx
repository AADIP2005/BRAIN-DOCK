import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png'; // keep your logo here

const Navbar = () => {
  return (
    <nav className="bg-white-400 text-black font-poppins shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-14 h-14 rounded-full" />
          <h1 className="text-2xl font-bold text-primary">Brain Dock</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 items-center">
          <li>
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          </li>
          <li>
            <Link to="/resources" className="hover:text-primary transition-colors">Resources</Link>
          </li>
          <li>
            <Link to="/news" className="hover:text-primary transition-colors">News & Updates</Link>
          </li>
          <li>
            <Link to="/readit" className="hover:text-primary transition-colors">Readit</Link>
          </li>
          <li>
            <Link to="/login">
              <button className="bg-primary text-dark px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Login
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

