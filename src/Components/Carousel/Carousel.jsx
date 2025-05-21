import React, { useState, useEffect } from "react";

const Carousel = () => {
  const contentArray = [
    {
      index: 0,
      title: "American Rhythm & Smooth Styles",
      // image:,
    },
    {
      index: 1,
      title: "International Latin & Standard Styles",
      // image:,
    },
    {
      index: 2,
      title: "Foxtrot",
      // image:,
    },
    {
      index: 3,
      title: "Waltz",
      image:
        "https://lh6.googleusercontent.com/3ejCFQqCXS5eRsyoG8LeyYMsJBImK1O9I12UA815tt8tdrj1m3wy1MAW-fvLBE_xpj5rGpg_puJGPTpSTCGxSuY=w16383",
    },
    {
      index: 4,
      title: "Tango",
      image:
        "https://lh5.googleusercontent.com/PrNGJZcKObptW-kcY4siVnKAUKvLwYTL5lLm7Kjycc1lM1gkXiQJtOdK_0--3VrJ8D-xzp4nu0mfrvUXeg7n7_0=w16383",
    },
    {
      index: 5,
      title: "Quickstep",
      // image:,
    },
    {
      index: 6,
      title: "Samba",
      // image:,
    },
    {
      index: 7,
      title: "Cha Cha",
      image: "src/Components/Carousel/chacha.jpeg",
    },
    {
      index: 8,
      title: "Rumba",
      // image:
    },
    {
      index: 9,
      title: "Salsa/Mambo",
      // image:,
    },
    {
      index: 10,
      title: "Jive",
      image: "src/Components/Carousel/jive.jpeg",
    },
    {
      index: 11,
      title: "American/International Rumba",
      image: "src/Components/Carousel/Rumba.jpeg",
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
      className="flex justify-center items-center rounded-lg p-4"
    >
      <div className="flex justify-center items-center p-1.5">
        <button
          className=" mr-16 text-3xl border-2 rounded-lg hover:bg-gray-300 hover:ease-in-out hover:duration-200"
          onClick={handlePrev}
        >
          <i className="bx bx-left-arrow-alt"></i>
        </button>
        <div className="flex flex-col justify-center items-center ">
          <img
            className="max-w-2xl max-h-80"
            src={contentArray[index].image}
            alt={contentArray[index].title}
          />
          <p className="text-3xl font-bold bg-white-100 rounded-sm hover:shadow-lg hover:bg-gray-100  hover:ease-in-out hover:duration-250 hover:border-.5">
            {contentArray[index].title}
          </p>
        </div>
        <button
          className="ml-16 text-3xl border-2 rounded-lg hover:bg-gray-300 hover:ease-in-out hover:duration-200"
          onClick={handleNext}
        >
          <i className="bx bx-right-arrow-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
