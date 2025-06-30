import React from "react";
// import { Features } from 'tailwindcss';
import imgone from "../assets/p1.png";
import imgtwo from "../assets/p2.png";
import imgthree from "../assets/p3.png";
import { Link } from "react-router";

const Projects = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-7 space-y-8">
      <h1 className="text-center font-bold text-4xl pt-7">Projects</h1>

      {/* project one  */}
      <div className="card flex-col lg:flex-row bg-gray-100 max-w-5xl mx-auto card-side shadow-sm p-5">
        <figure className="flex-2/3">
          <img src={imgone} alt="Movie" className="object-fill" />
        </figure>
        <div className="card-body flex-1/3 text-gray-600">
          <h2 className="card-title">Job Portal</h2>
          <p>
             A modern, responsive web application designed for those who are looking for job or those those need employee. 
          </p>
          <div className="font-bold">
            - Job posting & Job hunting <br />- Theme change <br /> - Responsive Layout
          </div>
          <div className="grid grid-cols-3  text-[10px] font-semibold gap-2 my-3">
            <p className="border-gray-300 border bg-green-50 text-center py-1 rounded-2xl">
              Tailwind css
            </p>
            <p className="border-gray-300 border bg-green-50 text-center py-1 rounded-2xl">
              React
            </p>
            <p className="border-gray-300 border bg-green-50 text-center py-1 rounded-2xl">
              MongoDB
            </p>
            <p className="border-gray-300 border bg-green-50 text-center py-1 rounded-2xl">
              Express js
            </p>
            <p className="border-gray-300 border bg-green-50 text-center py-1 rounded-2xl">
              Node js
            </p>
            <p className="border-gray-300 border bg-green-50 text-center py-1 rounded-2xl">
              Firebase
            </p>
          </div>
          <div className="card-actions ">
            <Link to='https://curious-biscuit-e53fe9.netlify.app/' target="_blank" className="btn bg-green-700 hover:bg-green-800 text-gray-200 font-bold rounded-2xl">
              Live
            </Link>
            <Link to='https://github.com/Niamot-Ullah/Job-Portal.' target="_blank" className="btn bg-green-700 hover:bg-green-800 text-gray-200 font-bold rounded-2xl">
              Repository
            </Link>
            
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-green-700 hover:bg-green-800 text-gray-200 font-bold rounded-3xl" onClick={()=>document.getElementById('my_modal_1').showModal()}>Details</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">

    
          <h2 className="card-title">Job Portal</h2>
          <p>
             A modern, responsive web application designed for those who are looking for job or those those need employee. 
          </p>
          <div className="font-bold">
            - Job posting & Job hunting <br />- Theme change
          </div>
          <div className="grid grid-cols-3  text-[10px] font-semibold gap-2 my-3">
            <p className="border-gray-300 border bg-green-50 text-center py-1 rounded-2xl">
              Tailwind css
            </p>
            <p className="border-gray-300 border bg-green-50 text-center py-1 rounded-2xl">
              React
            </p>
            <p className="border-gray-300 border bg-green-50 text-center py-1 rounded-2xl">
              MongoDB
            </p>
            <p className="border-gray-300 border bg-green-50 text-center py-1 rounded-2xl">
              Express js
            </p>
            <p className="border-gray-300 border bg-green-50 text-center py-1 rounded-2xl">
              Node js
            </p>
            <p className="border-gray-300 border bg-green-50 text-center py-1 rounded-2xl">
              Firebase
            </p>
          </div>

    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
          </div>
        </div>
      </div>

      {/* project two  */}
      <div className="card flex-col lg:flex-row bg-gray-100 max-w-5xl mx-auto card-side shadow-sm p-5">
        <figure className="flex-2/3">
          <img src={imgtwo} alt="Movie" className="object-cover" />
        </figure>
        <div className="card-body flex-1/3 text-gray-600">
          <h2 className="card-title">Auto Wheels</h2>
          <p>
             A responsive web application designed for Renting Cars where user can post his car for rent as well as book cars from here.
          </p>
          <div className="font-bold">
            - Rent & Book Cars <br />- Search functionality <br />- Sorting <br />- card view to list view <br /> - Responsive Layout
          </div>
          <div className="grid grid-cols-3  text-[10px] font-semibold gap-2 my-3">
            <p className="border-gray-300 border bg-green-50 text-center py-1 rounded-2xl">
              Tailwind css
            </p>
            <p className="border-gray-300 border bg-green-50 text-center py-1 rounded-2xl">
              React
            </p>
            <p className="border-gray-300 border bg-green-50 text-center py-1 rounded-2xl">
              MongoDB
            </p>
            <p className="border-gray-300 border bg-green-50 text-center py-1 rounded-2xl">
              Express js
            </p>
            <p className="border-gray-300 border bg-green-50 text-center py-1 rounded-2xl">
              Node js
            </p>
            <p className="border-gray-300 border bg-green-50 text-center py-1 rounded-2xl">
              Firebase
            </p>
          </div>
          <div className="card-actions ">
            <Link to='https://ph-assaignment-11-renting-cars.web.app/' target="_blank" className="btn bg-green-700 hover:bg-green-800 text-gray-200 font-bold rounded-2xl">
              Live
            </Link>
            <Link to='https://github.com/Niamot-Ullah/Auto-Wheels' target="_blank" className="btn bg-green-700 hover:bg-green-800 text-gray-200 font-bold rounded-2xl">
              Repository
            </Link>
            
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-green-700 hover:bg-green-800 text-gray-200 font-bold rounded-3xl" onClick={()=>document.getElementById('my_modal_2').showModal()}>Details</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">

    
           <h2 className="card-title">Auto Wheels</h2>
          <p>
             A responsive web application designed for Renting Cars where user can post his car for rent as well as book cars from here.
          </p>
          <div className="font-bold">
            - Rent & Book Cars <br />- Search functionality <br />- Sorting <br />- card view to list view <br /> - Responsive Layout
          </div>
          <div className="grid grid-cols-3  text-[10px] font-semibold gap-2 my-3">
            <p className="border-gray-300 border bg-green-50 text-center py-1 rounded-2xl">
              Tailwind css
            </p>
            <p className="border-gray-300 border bg-green-50 text-center py-1 rounded-2xl">
              React
            </p>
            <p className="border-gray-300 border bg-green-50 text-center py-1 rounded-2xl">
              MongoDB
            </p>
            <p className="border-gray-300 border bg-green-50 text-center py-1 rounded-2xl">
              Express js
            </p>
            <p className="border-gray-300 border bg-green-50 text-center py-1 rounded-2xl">
              Node js
            </p>
            <p className="border-gray-300 border bg-green-50 text-center py-1 rounded-2xl">
              Firebase
            </p>
          </div>

    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
          </div>
        </div>
      </div>


      {/* project three  */}
      <div className="card flex-col lg:flex-row bg-gray-100 max-w-5xl mx-auto card-side shadow-sm p-5">
        <figure className="flex-2/3">
          <img src={imgthree} alt="Movie" className="object-fill" />
        </figure>
        <div className="card-body flex-1/3 text-gray-600">
          <h2 className="card-title">LawBD</h2>
          <p>
            A modern, responsive web application designed for bookings of lawers of bangladesh .
          </p>
          <div className="font-bold">
            -  Add to cart or booking functionality <br /> - Responsive Layout
          </div>
          <div className="grid grid-cols-3  text-[10px] font-semibold gap-2 my-3">
            <p className="border-gray-300 border bg-green-50 text-center py-1 rounded-2xl">
              Tailwind css
            </p>
            <p className="border-gray-300 border bg-green-50 text-center py-1 rounded-2xl">
              React
            </p>
          </div>
          <div className="card-actions ">
            <Link to='https://ornate-rabanadas-1be12f.netlify.app/' target="_blank" className="btn bg-green-700 hover:bg-green-800 text-gray-200 font-bold rounded-2xl">
              Live
            </Link>
            <Link to='https://github.com/Niamot-Ullah/LawBD' target="_blank" className="btn bg-green-700 hover:bg-green-800 text-gray-200 font-bold rounded-2xl">
              Repository
            </Link>
            
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-green-700 hover:bg-green-800 text-gray-200 font-bold rounded-3xl" onClick={()=>document.getElementById('my_modal_3').showModal()}>Details</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">

    
          <h2 className="card-title">LawBD</h2>
          <p>
            A modern, responsive web application designed for bookings of lawers of bangladesh .
          </p>
          <div className="font-bold">
            -  Add to cart or booking functionality <br /> - Responsive Layout
          </div>
          <div className="grid grid-cols-3  text-[10px] font-semibold gap-2 my-3">
            <p className="border-gray-300 border bg-green-50 text-center py-1 rounded-2xl">
              Tailwind css
            </p>
            <p className="border-gray-300 border bg-green-50 text-center py-1 rounded-2xl">
              React
            </p>
          </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
          </div>
        </div>
      </div>




    </div>
  );
};

export default Projects;
