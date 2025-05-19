import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between bg-blue-300 p-4">
      <div>
        <h1 className='text-3xl italic font-bold'> Yang Ballroom Dance</h1>
      </div>
      <div className="flex ml-auto items-center">
        <ul className= 'flex flex-grow justify-center items-center space-x-6 text-xl gap-8 font-semibold '> 
          <Link to="/" > 
            <li>Home</li>
          </Link>

          <Link to= '/About'>
            <li >About</li>
          </Link>

          <Link to= '/Prices' >
            <li>Prices</li>
          </Link>
        </ul>
      </div>
      <div className="ml-auto" >
        <Link to= '/Booking'  >
          <button className=' p-1.5 border rounded-full' >Book Here</button>
        </Link>
      </div>
      
    </div>
  );
}

export default Navbar;
