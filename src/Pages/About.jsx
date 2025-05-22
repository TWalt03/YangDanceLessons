import React from "react";
import Navbar from "../Components/Navbar/Navbar.jsx";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className=" overscroll-auto m-auto p-0">
      <Navbar />
      <h1 className="text-5xl mt-15 sm:mb-1 mb-8 max-w-120 m-auto font-bold flex justify-center rounded-lg ">
        About Jason Yang
      </h1>
      {/* grid grid-cols-2 table-auto */}
      <div className=" p-12 flex flex-wrap items-center justify-center  text-justify shadow-xl">
        <img
          className="flex grid-cols-2 items-center max-w-4xl max-h-2xl m-auto p-4 hover:shadow-md hover:bg-gray-100 hover:ease-in-out hover:duration-200"
          src="src/assets/aboutpic.JPG"
          alt="Jason Yang receiving reward for dance competition"
        />
        <p className=" text-md ml-5 p-2 max-w-6xl rounded-lg hover:shadow-md hover:bg-gray-100 hover:ease-in-out hover:duration-200 ">
          Jason Yang is a collegiate Ballroom dancer proficient in the Standard,
          Smooth, Latin, and Rhythm Ballroom dance styles. As one of the head
          coaches of the SUNY Binghamton Ballroom dance team, Jason has placed
          first in many styles and has advanced to the Gold/Open level at
          competitions all across the east coast. His training has included
          world-class coaches who have had experience competing all over the
          United States and Internationally as well. As Head instructor at
          Binghamton, Jason has assisted students in creating and achieving
          their goals with exceptional results. He also has experience
          choreographing routines for all-skill level dancers, for any
          competition or performative needs.{" "}
        </p>
      </div>
      <div className="p-12 flex items-center text-justify shadow-xl">
        <h1 className="text-5xl p-15 mb-8 font-bold flex justify-center ">
          The Mission
        </h1>
        <p className="m-6 rounded-lg hover:shadow-lg hover:bg-gray-100 hover:ease-in-out hover:duration-200">
          Ballroom dance and partner dancing is a joy that all individuals
          should be able to enjoy; however, the fact is that it is quite often
          inaccessible, and even beginners are expected to pay fees regularly of
          $100+ for introductory lessons to the art. Yang Ballroom and Wedding
          Dance brings a more affordable price for those eager to learn more
          about Ballroom in your local community!
        </p>
      </div>
      <div className="flex flex-col flex-wrap justify-center items-center shadow-xl max-w-none">
        <p className="text-center m-6 "> *** All lessons provided are beginner and intermediate-level friendly, so whether you have prior ballroom experience or are utterly new to partner dancing, the classes will be suitable for all. All age levels are welcome as well! ***</p>
        <div className="flex flex-row justify-center items-center">
          <Link to='https://www.facebook.com' target='_blank'>
            <button className=" xs:text-3xl sm:text-3xl md:w-10 lg:w-10 xl:w-10 ml-6 p-.75 rounded-lg hover:bg-gray-700 hover:ease-in-out hover:duration-200">
              <i class='bx bxl-facebook-circle'></i>
            </button>
          </Link>
          <p className=" sm:w-140 md:w-180 lg:w-240 xl:w-280 mt-6 mb-6 pl-6 font-bold text-center">
            NOTICE: Yang Ballroom and Wedding Dance is ACTIVELY looking for any locations that can be used as floor space, even if there is a cost to book. If you are aware of an available location contact us as soon as possible!</p>
            <Link to='https://www.facebook.com' target='_blank'>
              <button className=" sm:text-3xl md:w-8 lg:w-10 xl:w-10 mr-6 ml-4 p-.75 rounded-lg hover:bg-gray-700 hover:ease-in-out hover:duration-200">
              <i class='bx bx-envelope' ></i>
              </button>
            </Link>
        </div>
        <p className="m-6  text-center"><strong>*</strong>All current appointments are to be made through Facebook Messenger, Phone Number, or Email. Booking system will be implemented shortly.<strong>*</strong></p>
        <p className="mb-6 text-center"><strong>*</strong>Please read our location disclaimer on the Lesson Details and Pricing page.<strong>*</strong></p>
      </div>
    </div>
  );
}
export default About;
