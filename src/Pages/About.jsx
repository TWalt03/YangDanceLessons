import React from "react";
import Navbar from "../Components/Navbar/Navbar.jsx";

function About() {
  return (
    <div>
      <Navbar />
      <h1 className="text-5xl m-15 mb-8 font-bold flex justify-center hover:underline hover:italic">
        About Jason Yang
      </h1>
      <div className=" p-12 grid grid-cols-2 table-auto items-center  justify-center  text-justify shadow-xl">
        <img
          className="flex grid-cols-2 items-center m-auto p-4"
          src="src/assets/aboutpic.JPG"
          alt="Jason Yang receiving reward for dance competition"
        />
        <p className="ml-5 p-2 ">
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
        <h1 className="text-5xl p-15 mb-8 font-bold flex justify-center hover:underline hover:italic">
          The Mission
        </h1>
        <p className="m-6  ">
          Ballroom dance and partner dancing is a joy that all individuals
          should be able to enjoy; however, the fact is that it is quite often
          inaccessible, and even beginners are expected to pay fees regularly of
          $100+ for introductory lessons to the art. Yang Ballroom and Wedding
          Dance brings a more affordable price for those eager to learn more
          about Ballroom in your local community!
        </p>
      </div>
      <div className="p-12 justify-center items-center shadow-xl">
        <p className="text-center m-6 "> *** All lessons provided are beginner and intermediate-level friendly, so whether you have prior ballroom experience or are utterly new to partner dancing, the classes will be suitable for all. All age levels are welcome as well! ***</p>
        <p className="m-6 font-bold text-center">NOTICE: Yang Ballroom and Wedding Dance is ACTIVELY looking for any locations that can be used as floor space, even if there is a cost to book. If you are aware of an available location contact us as soon as possible!</p>
        <p className="m-6 text-center">All current appointments are to be made through Facebook Messenger, Phone Number, or Email. Booking system will be implemented shortly.</p>
        <p className="m-6 text-center">Please read our location disclaimer on the Lesson Details and Pricing page.</p>
      </div>
    </div>
  );
}
export default About;
