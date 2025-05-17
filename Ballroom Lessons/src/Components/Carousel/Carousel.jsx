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
        <div className='carousel'>
            <button className='prev' onClick={handlePrev}>
                <i class='bx bx-left-arrow-alt' ></i>
            </button>
            <p>{index}num</p>
            <button className='forward' onClick={handleNext}>
                <i class='bx bx-right-arrow-alt' ></i>
            </button>
            
        </div>
    )
}

export default Carousel;