import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Props = {
  imageUrls: string[];
};

export const Banner: React.FC<Props> = ({ imageUrls }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.currentTarget as HTMLDivElement;
    setScrollPosition(target.scrollLeft);
  };

  const handleClick = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    className: "flex items-center",
    onScroll: handleScroll,
    beforeChange: (current, next) => setActiveSlide(next),
    customPaging: (i) => (
      <div
        style={{
          width: "50px",
          height: "6px",
          borderRadius: "5px",
          display: "inline-block",
          backgroundColor: activeSlide === i ? "red" : "gray",
        }}
      ></div>
    ),
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          marginBottom: "40px",
        }}
      >
        {dots}
      </div>
    ),
  };

  return (
    <Slider ref={sliderRef} {...settings} onClick={handleClick}>
      {imageUrls.map((imageUrl, index) => (
        <img id='banner'
          key={index}
          src={imageUrl}
          alt="Banner"
          className={`${
            index === 0 ? 'ml-0' : ''
          } ${
            index === imageUrls.length - 1 ? 'mr-0' : ''
          } object-cover rounded-lg shadow-lg`}
        />
      ))}
    </Slider>
  );
};


