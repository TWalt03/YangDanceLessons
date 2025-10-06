import React, { useState, useEffect } from "react";

const Carousel = () => {
  const contentArray = [
    {
      index: 0,
      title: "American Rhythm & Smooth Styles",
      image:'/carousel/american.jpeg',
    },
    {
      index: 1,
      title: "International Latin & Standard Styles",
      image:'/carousel/latindance.jpeg',
    },
    {
      index: 2,
      title: "Foxtrot",
      image:'/carousel/foxtrot.jpeg',
    },
    {
      index: 3,
      title: "Waltz",
      image:'/carousel/waltz.jpeg',
    },
    {
      index: 4,
      title: "Tango",
      image:'/carousel/tango.jpeg',
    },
    {
      index: 5,
      title: "Quickstep",
      image:'/carousel/quickstep.jpeg',
    },
    {
      index: 6,
      title: "Samba",
      image:'/carousel/samba.jpeg',
    },
    {
      index: 7,
      title: "Cha Cha",
      image: '/carousel/chacha1.jpeg',
    },
    {
      index: 8,
      title: "Rumba",
      image:'/carousel/rumba2.jpeg',
    },
    {
      index: 9,
      title: "Salsa/Mambo",
      image:'/carousel/salsa.jpeg',
    },
    {
      index: 10,
      title: "Jive",
      image: '/carousel/jive.jpeg',
    },
    {
      index: 11,
      title: "American/International Rumba",
      image: '/carousel/rumba3.jpeg',
    },
  ];
  const [index, setIndex] = useState(0);
  const length = contentArray.length;
  const [isPaused, setIsPaused] = useState(false);

  const handlePrev = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  });

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full max-w-200 mx-auto mt-24 my-8 overscroll-auto"
    >
      <div className="flex flex-row justify-center items-center p-1.5">
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-3xl border-2 rounded-lg hover:bg-gray-300 hover:ease-in-out hover:duration-200"
          onClick={handlePrev}
        >
          <i className="bx bx-left-arrow-alt"></i>
        </button>
        <div className="relative overflox-hidden h-64 flex flex-col justify-center max-w-100 items-center text-center ">
          <img
            className="mt-8 mb-4 max-h-80"
            src={contentArray[index].image}
            alt={contentArray[index].title}
          />
          <p className="text-3xl mb-12  text-center font-bold bg-white-100 rounded-sm hover:shadow-lg hover:bg-gray-100  hover:ease-in-out hover:duration-250 hover:border-.5">
            {contentArray[index].title}
          </p>
        </div>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-3xl  border-2 rounded-lg hover:bg-gray-300 hover:ease-in-out hover:duration-200"
          onClick={handleNext}
        >
          <i className="bx bx-right-arrow-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
