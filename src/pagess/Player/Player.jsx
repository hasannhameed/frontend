import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Player = () => {
  const { id } = useParams();  // Get IMDb ID from URL
  const [videoKey, setVideoKey] = useState("");
  const TMDB_API_KEY = "f263eb07";

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/find/${id}?api_key=${TMDB_API_KEY}&external_source=imdb_id`
        );
        const data = await response.json();
        if (!data.movie_results.length) return;

        const movieId = data.movie_results[0].id;

        const videoResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${TMDB_API_KEY}`
        );
        const videoData = await videoResponse.json();

        const trailer = videoData.results.find(vid => vid.type === "Trailer" && vid.site === "YouTube");

        if (trailer) {
          setVideoKey(trailer.key); 
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    fetchTrailer();
  }, [id]);

  return (
    <div>
      {videoKey ? (
        <iframe
          width="100%"
          height="750"
          src={`https://www.youtube.com/embed/${videoKey}`}
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
