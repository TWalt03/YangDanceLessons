import React, { useState } from 'react';


const Carousel = () => {
    const [ index, setIndex ] = useState(0);
    const length = 12;
    
    const handlePrev = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    }

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    }

    return(
        <div className='flex justify-center items-center p-1.5'>
            <button className='mr-6' onClick={handlePrev}>
                <i class='bx bx-left-arrow-alt' >left</i>
            </button>
            <p>{index}num</p>
            <button className='ml-6' onClick={handleNext}>
                <i class='bx bx-right-arrow-alt' >right</i>
            </button>
            
        </div>
    )
}

export default Carousel;