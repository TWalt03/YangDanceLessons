import React from 'react'
import Carousel from "../Components/Carousel/Carousel.jsx";
import Navbar from "../Components/Navbar/Navbar.jsx";


function Home() {
  return (
    <div>
      <Navbar />
      <h1 class='flex justify-center text-5xl font-bold m-12 mb-14'>What We Offer!</h1>
      <Carousel/>
    </div>
  );
}

export default Home
