import React from "react";
import Carousel from "../Components/Carousel/Carousel.jsx";
import Navbar from "../Components/Navbar/Navbar.jsx";
import { Link } from "react-router";

function Home() {
  return (
    <div>
      <Navbar />
      <h1 class="flex justify-center text-5xl font-bold m-12 mb-24 mt-30 text-shadow-lg">
        What We Offer!
      </h1>
      <Carousel/>
      <div className="flex flex-col items-center justify-center mt-12 border-t-1 border-gray-400 ">
        <h2 className="m-12 mt-8 text-4xl font-bold text-center text-shadow-lg">
          Why Get Ballroom Lessons?
        </h2>
        <p className="text-center text-lg m-6 mb-12 max-w-180 rounded-lg hover:bg-gray-100 hover:ease-in-out hover:duration-200 hover:shadow-lg">
          Have you ever needed to get really good at dancing for a wedding thats
          coming up? Or ever just wanted to be able to go dancing with friends
          or family? Then look no further than Yang Ballroom Dance. Where you
          can get lessons for much cheaper and in a variety of styles that you
          can pick from and see above. If you are interested, click here:
        </p>

        <Link to="/Booking">
          <button className=" font-bold text-md sm:text-xl sm:p-1.5 border mt-1 mb-12 rounded-lg sm:rounded-full hover:bg-gray-100 hover:shadow-lg'">
            Book Here
          </button>
        </Link>

      </div>
      <div className="flex flex-col items-center justify-center mt-12 border-t-1 border-gray-400 shadow-lg">
        <h2 className="m-12 mt-8 text-4xl font-bold text-center text-shadow-lg">
          Our Gallery
        </h2>
        <p className="text-center text-lg m-6 mb-12 max-w-130 xl:max-w-140 rounded-lg hover:bg-gray-100 hover:ease-in-out hover:duration-200 hover:shadow-lg">
          Don't believe us? Check out pictures of Jason Yang and competiting in many different competitions for these dances!
        </p>
        <Link to="/Gallery">
          <button className=" font-bold text-md sm:text-xl sm:p-1.5 border mt-1 mb-12 rounded-lg sm:rounded-full hover:bg-gray-100 hover:shadow-lg'">
            Gallery
          </button>
        </Link>
        </div>
    </div>
  );
}

export default Home;
