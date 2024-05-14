import React, { useState } from "react";
import "./Utils.css"; // Import your custom styles for the carousel
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CustomCarousel = ({ items }) => {
  console.log(items);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="custom-carousel">
      <div className="carousel-container">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="arrow prev"
          onClick={goToPrevSlide}
        />
        {/* <FaChevronLeft className="arrow prev" onClick={goToPrevSlide} /> */}
        <div className="carousel-content">
          {items?.map((item, index) => (
            <div
              key={index}
              className={index === currentIndex ? "slide active" : "slide"}
            >
              {index === currentIndex && (
                <img src={item.imageUrl} alt={item.title} />
              )}
            </div>
          ))}
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="arrow next"
          onClick={goToNextSlide}
        />
        {/* <FaChevronRight className="arrow next" onClick={goToNextSlide} /> */}
      </div>
    </div>
  );
};

export default CustomCarousel;
