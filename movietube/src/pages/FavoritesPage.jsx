import React from "react";
import "../App.css";
import { useAppContext } from "../context/Context";
/* import { useState } from "react";
import MovieCard from "../components/MovieCard"; */

function FavoritesPage() {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
  const { favorites, removeFromFavorites } = useAppContext();
  console.log(favorites);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((movie) => movie.id === id);
    return boolean;
  };

  return (
    <div className="favorites">
      {favorites.length > 0 ? (
        favorites.map((movie) => (
          <div className="fav-movie-card">
            <div key={movie.id}>
              <h5 className="fav-movie-title">{movie.title}</h5>
              <img
                className="fav-movie-cover"
                src={`${IMAGE_PATH}${movie.poster_path}`}
                alt=""
              />
              <span>
                {favoritesChecker(movie.id) ? (
                  <button
                    className="fav-dislikeitsmall"
                    onClick={() => removeFromFavorites(movie.id)}
                  >
                    {" "}
                    ♡{" "}
                  </button>
                ) : (
                  <button
                    className="fav-likeitsmall"
                    onClick={() => removeFromFavorites(movie)}
                  >
                    {" "}
                    ♥{" "}
                  </button>
                )}
              </span>
            </div>
          </div>
        ))
      ) : (
        <h1 className="emptyFav">You don't have any favorites yet</h1>
      )}
    </div>
  );
}

export default FavoritesPage;
