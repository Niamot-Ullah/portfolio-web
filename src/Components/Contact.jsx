import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-[#f5f0ec] min-h-screen flex flex-col items-center justify-center p-8">
      <h2 className="text-5xl font-bold mb-12">Contact Us</h2>

      <div className="bg-white rounded-md shadow-md p-8 lg:p-12 w-full max-w-4xl flex flex-col lg:flex-row justify-between gap-8">
        
        {/* Left Form Section */}
        <form className="flex-1 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              className="w-full border-b border-black bg-transparent focus:outline-none py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
            <input
              type="email"
              className="w-full border-b border-black bg-transparent focus:outline-none py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows="3"
              className="w-full border-b border-black bg-transparent focus:outline-none py-2"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition"
          >
            Contact Us
          </button>
        </form>

        {/* Right Info Section */}
        <div className="flex-1 space-y-8 text-gray-800">
          <div>
            <h3 className="font-semibold text-lg">Contact</h3>
            <p className="text-gray-600">niamotullah009@gmail.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Mobile</h3>
            <p className="text-gray-600">01519609115</p>
          </div>
          
          <div className="flex gap-4 pt-4 text-xl text-gray-700">
            <FaFacebookF className="hover:text-black cursor-pointer" />
            <FaInstagram className="hover:text-black cursor-pointer" />
            <FaTwitter className="hover:text-black cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
