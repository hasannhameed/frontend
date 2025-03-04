import React, { useRef } from 'react';

import { ChevronLeft, ChevronRight } from 'lucide-react'; 
import "./TitleCard.css";

const TitleCard = ({ title, movies }) => {
  const sliderRef = useRef(null);
  const scrollAmount = 100;
  
  return (
    <div className='parent d-flex flex-column'>

<h2>{title}</h2>
    <div className="d-flex">
      <button
        className="nav-btn bg-transparent"
        onClick={() => {
          const container = sliderRef.current;
          if (container) container.scrollLeft -= scrollAmount;
        }}
      >
        <ChevronLeft />
      </button>
      <div className="images-container" ref={sliderRef}>
        {movies.map((movie) => (
          <img
            className="image"
            alt={movie?.Title}
            key={movie?.imdbID}
            src={movie?.Poster !== "N/A" ? movie?.Poster : "placeholder.jpg"}
          />
        ))}
      </div>
      <button
        className="nav-btn bg-transparent"
        onClick={() => {
          const container = sliderRef.current;
          if (container) container.scrollLeft += scrollAmount;
        }}
      >
        <ChevronRight />
      </button>
    </div>
    </div>
  );
};

export default TitleCard;
