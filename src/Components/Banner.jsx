import React from "react";
import image from "../assets/me.jpg";
import { Link } from "react-router";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="">
      <div className="hero bg-base-200 py-0 md:py-15">
        <div className="hero-content flex gap-7 lg:gap-24 flex-col md:flex-row-reverse  w-11/12 md:w-10/12 mx-auto">
          <img
            src={image}
            alt="niamot ullah"
            className="max-w-sm rounded-4xl shadow-sm "
          />
          <div>
            <h1 className="text-5xl font-bold">Neyamat Ullah</h1>
            <p className="py-4 font-semibold text-gray-600">MERN Stack web Developer</p>
            <p className=" text-gray-500">
              Hello! I'm a MERN Stack Developer from Bangladesh, with a background in Economics from the University of Barishal. I love building full-stack web apps and solving real-world problems through code.
            </p>
            <div className="flex pt-7 pb-5 gap-3">
                <Link to='https://www.facebook.com/niamot.ullah.652643' target="_blank"><FaFacebook target="_blank" size={36} className="text-blue-700"/></Link>
                <Link to='https://github.com/Niamot-Ullah' target="_blank"><FaGithub size={36}/></Link>
            </div>
            <Link className="btn bg-green-700 hover:bg-green-800 text-gray-200 font-bold">Resume</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
