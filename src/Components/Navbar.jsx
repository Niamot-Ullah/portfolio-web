import React from "react";
import { Link, NavLink } from "react-router";
import logo from '../assets/Screenshot 2025-06-29 110636.png'

const Navbar = () => {

     const link = (
        <>
            <li> <a className='font-semibold'> Home</a></li>
            <li ><a className='font-semibold' href='#About'>About Me</a></li>
            <li><a className='font-semibold' href='#skills'>Skills</a></li>
            <li><a className='font-semibold'>Contact</a></li>
        </>
    )
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="w-11/12 md:w-10/12 mx-auto flex">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className=" md:hidden">
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                className="h-15 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {
                link
              }
            </ul>
          </div>
          <img src={logo} alt="Niamot" className="w-10 rounded-lg ml-3"></img>
          
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            {link}
          </ul>
        </div>
        <div className="navbar-end">
 <Link className="btn bg-green-700 hover:bg-green-800 text-gray-200 font-bold">Resume</Link>        </div>
      </div>
    </div>
  );
};

export default Navbar;
