import React from 'react';
import { FaUserGraduate, FaLaptopCode, FaFutbol } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <div id='about' className="w-11/12 md:w-10/12 mx-auto bg-white rounded-2xl shadow-sm p-8 pb-12 mt-10">
      <h2 className="text-4xl text-center font-bold mb-6 mt-2 text-gray-800">About Me</h2>
      
      <div className="space-y-4 text-gray-700">
        <div className="flex items-start gap-4">
          <FaUserGraduate className="text-blue-500 text-xl mt-1" />
          <p>
            I'm <span className="font-semibold">Neyamat Ullah</span>, currently studying <span className="font-semibold">Economics</span> at the <span className="font-semibold">University of Barishal</span>.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <FaLaptopCode size={35} className="text-green-500 text-xl mt-1" />
          <p>
            Besides academics, I’m passionate about web development and work as a <span className="font-semibold">MERN Stack Developer</span>. I enjoy building responsive, interactive web apps that solve real-world problems.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <FaFutbol className="text-red-500 text-xl mt-1" />
          <p>
            Outside of coding, I love to play <span className="font-semibold">cricket</span>, which keeps me active and motivated.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
