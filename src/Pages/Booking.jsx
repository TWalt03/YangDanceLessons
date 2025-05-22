import React from "react";
import Navbar from '../Components/Navbar/Navbar.jsx';
import { Link } from "react-router-dom";
// import './Home.css'

function Booking() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-10">
        <p className="text-xl text-center"><strong>***</strong>Currently booking through the site is not available, for now please reach out to us to book.<strong>***</strong></p>

      </div>
        <div className="flex flex-col items-center justify-center mt-10 border-1 border-gray-300 bg-white shadow-md p-6 rounded-lg">
          <h1 className="text-3xl font-bold mb-4">Contact Information</h1>
          <div className="flex flex-row justify-center items-center">
            <Link to="mailto:tylerwalters537@gmail.com" target="_blank" className="hover:shadow-lg hover:bg-gray-100 hover:ease-in-out hover:duration-200 rounded-xl">
              <button className='font-bold text-xl flex p-4 items-center hover:cursor-auto'href="mailto:tylerwalters537@gmail.com">Booking Email <i class='bx bx-envelope' ></i></button>
            </Link>
            <Link to="mailto:jyang@gmail.com" target="_blank" className="hover:shadow-lg hover:bg-gray-100 hover:ease-in-out hover:duration-200 rounded-xl">
              <button className='font-bold text-xl flex p-4 items-center hover:cursor-auto'href="mailto:tylerwalters537@gmail.com">Jason's Email <i class='bx bx-envelope' ></i></button>
            </Link>
          </div>
          <Link to='https://www.facebook.com' target='_blank' className="hover:shadow-lg hover:bg-gray-100 hover:ease-in-out hover:duration-200 rounded-xl">
              <button className='font-bold text-xl flex p-4 items-center hover:cursor-auto'href="mailto:tylerwalters537@gmail.com">Facebook <i class='bx bxl-facebook-circle'></i> </button>
            </Link>
            <Link to='https://www.instagram.com/jas_y59/' target='_blank' className="hover:shadow-lg hover:bg-gray-100 hover:ease-in-out hover:duration-200 rounded-xl">
              <button className='font-bold text-xl flex p-4 items-center hover:cursor-default'href="mailto:tylerwalters537@gmail.com">Jason's Instagram <i class='bx bxl-instagram-alt' ></i> </button>
            </Link>
         
        </div>
      </div>
  );
}

export default Booking;