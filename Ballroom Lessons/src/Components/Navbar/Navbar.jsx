import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav bg-blue-300 flex justify-between items-center p-4">
      <div>
        <h1 className='italic m-4 mr-8 font-bold text-3xl bg-amber-50'> Yang Ballroom Dance</h1>
      </div>
      <ul className= 'flex justify-center items-center gap-8 '>
        <Link to="/" > 
          <li>Home</li>
        </Link>

        <Link to= '/About'>
          <li >About</li>
        </Link>

        <Link to= '/Prices' >
          <li >Prices</li>
        </Link>
        <div className = 'ml-auto mr-4 rounded-sm' >
          <Link to= '/Booking' style={{ textDecoration: 'none', color: 'black'}} >
            <button className='border rounded-2xl' >Book Here</button>
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
