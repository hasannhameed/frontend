import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import "./Player.css";

const Player = () => {
  const API_KEY = "AIzaSyBkzotL6kWXT54PUgpOzbv4IQ8mNRBBwWk";
  const navigate = useNavigate();
  const location = useLocation();
  const movie = location.state?.movie || {}; 
  const [videoId, setVideoId] = useState("");

  useEffect(() => {

    const fetchTrailer = async () => {
      if (!movie.Title) return; 
  
      const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        movie.Title + " trailer"
      )}&key=${API_KEY}&maxResults=1&type=video`;
  
      try {
        const response = await fetch(searchUrl);
        const data = await response.json();
  
        if (data.items.length > 0) {
          setVideoId(data.items[0].id.videoId);
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };
  
    fetchTrailer();
  }, [movie.Title]);
  

  return (
    <div className="player-container">
      <div className="overlay2">
        <FaArrowCircleLeft className="back-button" onClick={() => navigate(-1)} />
      </div>

      {videoId ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Movie Trailer"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="trailer-video"
        ></iframe>
      ) : (
        <h2 className="text-center">Loading Trailer...</h2>
      )}
    </div>
  );
};

export default Player;
