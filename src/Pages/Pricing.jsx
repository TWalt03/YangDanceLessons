import React from "react";
import Navbar from "../Components/Navbar/Navbar.jsx";

function Prices() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen  text-center max-w-4xl mx-auto p-4">
        <h1 className="text-5xl m-16 text-shadow-lg">Prices</h1>
        <div className="shadow-lg w-full">
          <h3 className="text-2xl font-bold underline m-6">
            Individual/Parter Private Lesson <strong>- ($45):</strong>
          </h3>
          <p className="m-auto mb-6 p-6 text-lg text-center max-w-full sm:max-w-xl text-shadow-2xs">
            One lesson in any Ballroom style, either by yourself or with a
            partner. Pricing does not change; the set price can be split amongst
            both dancers.{" "}
          </p>
        </div>
        <div className="flex flex-col justify-center shadow-lg w-full">
          <h3 className="text-2xl font-bold underline m-6">
            Group Private Lesson<strong>- ($75+):</strong>
          </h3>
          <p className="m-auto mb-6 p-6 text-lg text-center sm:max-w-xl">
            One lesson in any Ballroom style, with 3+ dancers in attendance. Flat
            rate of $75 (for 3 dancers) plus an additional $20 per dancer in
            attendance. Whether parties come with even numbers of leaders and
            followers is up to the group's discretion. If uneven, partners may
            rotate, or instructors may come in as substitute partners.{" "}
          </p>
        </div>
        <div className="flex flex-col justify-center shadow-lg w-full">
          <h3 className="text-2xl font-bold underline m-6">
            Choreography and Routine Lessons - (TBD):{" "}
          </h3>
          <p className="m-auto mb-6 p-6 text-lg text-center sm:max-w-xl">
            Dancers may request <strong>Routine Consultations</strong>, lessons
            geared towards working with instructors to create a routine of their
            desire, or <strong>Instructor Choreography</strong>, where instructors
            demonstrate how to perform personally constructed routines based on
            dancers' descriptions. Prices can vary based on routine complexity
          </p>
        </div>
        <div className="flex flex-col justify-center shadow-lg w-full">
          <h3 className="text-2xl font-bold underline m-6">
            Wedding Day/Special Event Package - (TBD):
          </h3>
          <p className="m-auto mb-6 p-6 text-lg text-center sm:max-w-xl">
            Lesson package for a leader and follower looking to create
            choreography for weddings and special events. Dancers will request
            music to be paired with choreography, and a personalized routine will
            be made prior to lessons. Routines may be altered at the dancer's
            discretion.
          </p>
        </div>
        <div className="flex flex-col justify-center shadow-lg w-full">
          <h3 className="text-2xl font-bold underline m-6">Demo Lesson</h3>
          <p className="m-auto mb- p-6 text-lg text-center sm:max-w-xl">
            One-time introductory lesson for those who haven't taken a lesson with
            Yang Ballroom and Wedding Dance before.
          </p>
        </div>
        <h2 className="font-bold m-4 mt-10"><strong>***</strong>All lessons are 50 minutes long unless specified otherwise.<strong>***</strong></h2>
        <h2 className="font-bold m-4">
          We are currently only taking cash, but Venmo is accepted if absolutely
          necessary
        </h2>
        <p className="font-bold m-4">
          UPDATE: For the upcoming summer of 2025 Yang Ballroom and Wedding
          Dance looks to provide more opportunities for all to dance, so all
          mentions of additional fees and general pricings are negotiable.
        </p>
        <div className="flex flex-col justify-center shadow-md w-full">
          <h1 className="text-2xl font-extrabold m-6 mt-10">Lesson Location Disclaimer</h1>
          <p className="m-auto mb-6 p-6 text-lg text-center sm:max-w-xl">
            As a small local business run by undergraduate college students, Yang
            Ballroom Dance <strong>does not have a dance studio</strong> at its
            disposal to hold these lessons. So instead, we are offering to teach
            at available public locations in the <strong>Town of Warwick</strong>.
            We apologize ahead of time for the inconvenience this may cause for
            dancers who were looking for professional dance floors, but we also
            believe that for those looking for an affordable and fun way to learn
            Ballroom Dance, learning the foundations and routines does not
            necessarily require a professional dance floor. That being said, if
            you are aware of any locations that may be used as dance space please
            contact us below! However, for those looking to have a Ballroom Dance
            experience in alternative locations, this can be arranged through
            communication during appointment booking. Alternative options include
            having{" "}
            <strong>
              instructors teach dancers in the comfort of their own homes
            </strong>
            , as well as <strong>booking dance studio space</strong> to hold these
            lessons. If dancers opt to choose these alternative options, there
            will be an additional fee added that will depend on the location of a
            dancer's home or the price to book studio space. Any other locations
            dancers may desire to hold their lesson are free to be discussed.
            <p className="m-auto mb-6 p-6 text-lg text-center sm:max-w-xl">
              Thank you for understanding, and we yet again apologize for this
              inconvenience.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Prices;
