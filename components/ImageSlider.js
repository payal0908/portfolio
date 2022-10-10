import React, { useState } from 'react'
import { BsChevronDoubleRight, BsChevronDoubleLeft } from 'react-icons/bs';
const ImageSlider = ({slides}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyle = {
        height: '100%',
        position: 'relative',

    }

    const rightarrow = {
        position: 'absolute',
        top: '50%',
        cursor: 'pointer',
        zIndex: 1,
        transform: "translate(0, -50%)",
        right: '10px'
    }

    const leftarrow = {
        position: 'absolute',
        top: '50%',
        cursor: 'pointer',
        zIndex: 1,
        transform: "translate(0, -50%)",
        left: '10px'

    }

    const slideStyles = {
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex]})`,
    }

    const previous = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const next = () => {
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

  return (
    <div style={sliderStyle}>
        <div style={leftarrow} onClick={previous}><BsChevronDoubleLeft size={30}/></div>
        <div style={rightarrow} onClick={next}>
            <BsChevronDoubleRight size={30} />
            </div>
        <div style={slideStyles}></div>
    </div>
  )
}

export default ImageSlider