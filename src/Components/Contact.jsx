// import React from 'react';
import { FaFacebook, FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const Contact = () => {

 const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ld934jh', 'template_5q344nk', form.current, {
        publicKey: 'V5MNJUUa3XaoH3AYt',
      })
      .then(
        () => {
          Swal.fire({
  title: "Message Sent!",
  icon: "success",
  draggable: true
});
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div id='contact' className="bg-gray-50 flex flex-col items-center justify-center mt-15 pb-15">
      <h2 className="text-4xl font-bold my-12">Contact Me</h2>

      <div className="bg-white rounded-md shadow-sm p-8 lg:p-12 w-full max-w-4xl flex flex-col lg:flex-row justify-between gap-8">
        
        {/* Left Form Section */}
        <form  ref={form} onSubmit={sendEmail} className="flex-1 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
               type="text" name="user_name"
              className="w-full border-b border-black bg-transparent focus:outline-none py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
            <input
              type="email" name="user_email"
              className="w-full border-b border-black bg-transparent focus:outline-none py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
            name='message'
              rows="3"
              className="w-full border-b border-black bg-transparent focus:outline-none py-2"
            />
          </div>
          <button
            type="submit" value="Send"
            className="btn bg-green-700 hover:bg-green-800 text-gray-200 font-bold"
          >
            Contact Me
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
          
          <div className="flex pt-7 pb-5 gap-3">
                <Link to='https://www.facebook.com/niamot.ullah.652643' target="_blank"><FaFacebook target="_blank" size={36} className="text-blue-700"/></Link>
                <Link to='https://github.com/Niamot-Ullah' target="_blank"><FaGithub size={36}/></Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
