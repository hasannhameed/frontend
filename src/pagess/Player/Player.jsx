import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const OMDB_API_KEY = "f263eb07"; 

const Player = () => {
  const { id } = useParams();
  const [movieTitle, setMovieTitle] = useState("");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const omdbResponse = await fetch(
          `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`
        );
        const omdbData = await omdbResponse.json();

        if (omdbData.Response === "True") {
          setMovieTitle(omdbData.Title);
          console.log("https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(movieTitle + "+trailer);
        }
      } catch (error) {
        console.error("Error fetching OMDb data:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div>
      <h1>{movieTitle}</h1>
      {movieTitle ? (
        <iframe
          width="100%"
          height="750"
          src={`https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(movieTitle + " trailer")}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
};

export default Player;
