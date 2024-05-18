import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FastForward, Framer, Figma } from 'react-feather';

const ImgCarousel = () => {
  const data = [
    {
      "id": 1,
      "head": "Wedding",
      "otherContent": "This is also another content",
      "icon": <FastForward />
    },
    {
      "id": 2,
      "head": "Metting",
      "otherContent": "This is also another content",
      "icon": <Figma />
    },
    {
      "id": 3,
      "head": "BirthDay",
      "otherContent": "This is also another content",
      icon: <Framer />
    },
    {
      "id": 5,
      "head": "Festival",
      "otherContent": "This is also another content",
      icon: <FastForward />
    },
    {
      "id": 6,
      "head": "Church",
      "otherContent": "This is also another content",
      icon: <Figma />
    },
    {
      "id": 7,
      "head": "Wedding",
      "otherContent": "This is also another content",
      icon: <FastForward />
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <div className='bg-[#049366] w-full sm:h-[8cm] md:h-[7cm] lg:h-[100%] items-center' id='carousel1'>
      <Slider {...settings} className='h-full bg-slate-200' id='carousel2'>
        {data.map((carousel) => (
          <div key={carousel.id} className="w-full min-h-[6cm] sm:h-[7.8cm] md:h-[6.9cm] lg:h-[9.9cm] p-2 sm:p-1 bg-white h-full rounded-xl relative overflow-hidden">
            <div className='w-full h-full flex flex-col justify-center items-center' id={carousel.id}>
              <span className='text-[3rem] text-indigo-700 font-bold'>{carousel.icon}</span>
              <strong className='font-bold 2xl:text-5xl text-blue-950 sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl'>{carousel.head} <span className='text-indigo-400'>VENUE</span></strong>
              <span className='text-sm text-blue-950'>{carousel.otherContent}</span>
            </div>
            <div className='absolute bg-blue-950 w-full h-5 bottom-0'></div>
            <div className='absolute bg-blue-950 w-1/3 h-10 bottom-0'></div>
            <div className='absolute bg-blue-950 w-1/3 h-10 bottom-0 right-0'></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImgCarousel;