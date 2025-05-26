import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" fixed top-0 right-0 left-0 z-50 flex justify-between bg-white p-4 border-b-2 border-gray-300 shadow-md">
      <div>
        <h1 className='whitespace-nowrap mt-1 text-lg sm:text-2xl sm:mt-1.5 md:text-3xl md:mt-.25 italic font-bold'> Yang Ballroom Dance</h1>
      </div>
      <div className="flex ml-auto items-center">
        <ul className= 'flex flex-grow justify-center items-center space-x-6 text-xl  sm:gap-6 md:gap-8 xl:gap-14 font-semibold '> 
          <Link to="/" className=" mb-0 mr-0 p-1 sm:p-1 md:p-3 rounded-lg hover:bg-gray-100 hover:font-bolder hover:shadow-lg" > 
            <li>Home</li>
          </Link>

          <Link to= '/About' className=" mb-0 mr-0 p-1 sm:p-1 md:p-3 rounded-lg hover:bg-gray-100 hover:font-bolder hover:shadow-lg">
            <li >About</li>
          </Link>

          <Link to= '/Prices' className=" mr-0 mb-0 p-1 sm:p-1 md:p-3 rounded-lg hover:bg-gray-100 hover:font-bolder hover:shadow-lg" >
            <li>Prices</li>
          </Link>

          <Link to= '/Gallery' className="  mb-0 p-1 sm:p-1 md:p-3 rounded-lg hover:bg-gray-100 hover:font-bolder hover:shadow-lg" >
            <li>Gallery</li>
          </Link>
        </ul>
      </div>
      <div className="ml-auto" >
        <Link to= '/Booking'>
          <button className='whitespace-nowrap font-bold text-md sm:text-xl sm:p-2  border-2 mt-1 ml-2 rounded-lg sm:rounded-full hover:bg-gray-100 hover:shadow-lg' >Book Here</button>
        </Link>
      </div>
      
    </div>
  );
}

export default Navbar;
