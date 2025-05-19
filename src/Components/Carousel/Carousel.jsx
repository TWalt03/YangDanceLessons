import React, { useState, useEffect } from 'react';


const Carousel = () => {
    const contentArray = [
        {
            index: 0,
            title: 'American Rhythm & Smooth Styles',
            // Image:,
        },
        {
            index: 1,
            title: 'International Latin & Standard Styles',
            // Image:,
        },
        {
            index: 2,
            title: 'Foxtrot',
            // Image:,
        },
        {
            index: 3,
            title: 'Waltz',
            // Image:,
        },
        {
            index: 4,
            title: 'Tango',
            // Image:,
        },
        {
            index: 5,
            title: 'Quickstep',
            // Image:,
        },
        {
            index: 6,
            title: 'Samba',
            // Image:,
        },
        {
            index: 7,
            title: 'Cha Cha',
            // Image:,
        },
        {
            index: 8,
            title: 'Rumba',
            // Image: 
            
        },
        {
            index: 9,
            title: 'Salsa/Mambo',
            // Image:,
        },
        {
            index: 10,
            title: 'Jive',
            // Image:,
        },
        {
            index: 11,
            title: 'American/International Rumba',
            // Image:
        },
        
    ]
    const [ index, setIndex ] = useState(0);
    const length = contentArray.length;
    const [isPaused, setIsPaused] = useState(false);
    
    const handlePrev = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    }

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    }

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            handleNext();
        }, 5000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    });

    return(
        <div onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} className='flex flex-col justify-center items-center  rounded-lg p-4'>
            <div className='flex justify-center items-center p-1.5'>
                <button className='mr-6 text-3xl border-2 rounded-lg hover:bg-gray-300 hover:ease-in-out hover:duration-100' onClick={handlePrev}>
                    <i className='bx bx-left-arrow-alt'  ></i>
                </button>
                <p>{contentArray[index].title}</p>
                <button className='ml-6 text-3xl border-2 rounded-lg hover:bg-gray-300 hover:ease-in-out hover:duration-100' onClick={handleNext}>
                    <i className='bx bx-right-arrow-alt' ></i>
                </button>
                
            </div>
        </div>
    )
}

export default Carousel;