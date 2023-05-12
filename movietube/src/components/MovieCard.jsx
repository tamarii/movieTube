import React from "react";
import { useAppContext } from "../context/Context";

function MovieCard({ movie, selectMovie }) {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  console.log("favorites:", favorites);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((movie) => movie.id === id);
    return boolean;
  };

  return (
    <div className="movie-card" onClick={() => selectMovie(movie)}>
      {movie.poster_path ? (
        <img
          className="movie-cover"
          src={`${IMAGE_PATH}${movie.poster_path}`}
          alt=""
        />
      ) : (
        <div className="movie-placeholder"> No Image found</div>
      )}
      <h5 className="movie-title">
        {movie.title}
        <span>
          {favoritesChecker(movie.id) ? (
            <button
              className="dislikeitsmall"
              onClick={() => removeFromFavorites(movie.id)}
            >
              {" "}
              ♡{" "}
            </button>
          ) : (
            <button
              className="likeitsmall"
              onClick={() => addToFavorites(movie)}
            >
              {" "}
              ♥{" "}
            </button>
          )}
        </span>
      </h5>
    </div>
  );
}

export default MovieCard;
