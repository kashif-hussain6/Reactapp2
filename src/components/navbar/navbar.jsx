import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-around fixed w-full top-0 bg-white  ">
        <img className="w-28 " src="./Image/logo.png"/>
        <ul className="flex gap-8 p-4 items-center">
          <li className="flex items-center gap-1   ">
            <span>
              {" "}
              <FaHome />
            </span>
            <Link to="/">Home</Link>
          </li>
          <li className="">
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
            className="bg-blue-600 p-2 text-white rounded-md"
          >
            {" "}
            <Link to="/getstarted">Get Started</Link>
          </button>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
