// Components created in React should have .jsx ending as a standard, no real difference thou

import React from "react";

// create functional compound
const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div className="info">
        <p>{movie.Year}</p>
        <span>{movie.Type}</span>
      </div>

      {/* If Poster is not equal (!==) to N/A than (?) set src to Poster else (:) display placeholder image ('https://via.placeholder.com/400') */}
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/400"
        }
        alt={movie.Title}
      />

      <div>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
