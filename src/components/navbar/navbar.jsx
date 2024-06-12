import { Link, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div>
      <nav className="flex justify-between fixed w-full top-0 bg-white flex-col md:flex-row p-4">
        <div className="flex justify-between items-center w-full sm:w-auto">
          <img className="w-20 sm:w-28" alt="" src="./Image/logo.png" />
          <div className="md:hidden">
            <button className="text-black" onClick={toggleMenu}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 20 20"
                className="w-6 h-6"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        <ul className="hidden md:flex space-x-4 gap-4 md:gap-8  p-4 flex-col items-start sm:flex-row sm:items-  center">
          <li className="flex items-center gap-1">
            <span>
              <FaHome />
            </span>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link to="*">Nopage</Link>
          </li>
          <button
            type="button"
            className="bg-red-600 p-2 md:p-2 text-white rounded-md"
          >
            <Link to="/getstarted">Get Started</Link>
          </button>
        </ul>

        {isMenuOpen && (
          <ul className="md:hidden space-y-4 p-4 flex flex-col items-start ">
            <li className="flex items-start gap-1">
              <span>
                <FaHome />
              </span>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
            <li>
              <Link to="*">Nopage</Link>
            </li>
            <button
              type="button"
              className="bg-red-600 p-2 md:p-2 text-white rounded-md"
            >
              <Link to="/getstarted">Get Started</Link>
            </button>
          </ul>
        )}
      </nav>

      <Outlet />
    </div>
  );
}
