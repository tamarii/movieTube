import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import logo from "../assets/movietubelogo.png";
import MovieCard from "../components/MovieCard";
import YouTube from "react-youtube";
import { useAppContext } from "../context/Context";

import "bootstrap/dist/css/bootstrap.min.css";

function AppHome() {
  const API_URL = "https://api.themoviedb.org/3/";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [searchKey, setSearchKey] = useState("");
  const [playTrailer, setPlayTrailer] = useState(false);

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((movie) => movie.id === id);
    return boolean;
  };

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: "41a9573b314923667e23a316ebefd51a",
        query: searchKey,
      },
    });

    setMovies(results);
    await selectMovie(results[0]);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const renderMovies = () =>
    movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} selectMovie={selectMovie} />
    ));

  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: "41a9573b314923667e23a316ebefd51a",
        append_to_response: "videos",
      },
    });

    return data;
  };

  const selectMovie = async (movie) => {
    setPlayTrailer(false);
    const data = await fetchMovie(movie.id);
    console.log("movie data", data);
    setSelectedMovie(data);
  };

  const renderTrailer = () => {
    if (!selectedMovie.videos) return null;

    const trailer = selectedMovie.videos.results.find(
      (vid) =>
        vid.name === "Official Trailer" ||
        vid.name === "Official Trailer 1" ||
        vid.name === "Official Trailer 2" ||
        vid.name === "Teaser"
    );
    const key = trailer ? trailer.key : selectedMovie.videos.results[0];

    return (
      <YouTube
        videoId={key}
        className={"youtube-container"}
        opts={{
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 1,
            controls: 0,
          },
        }}
      />
    );
  };

  return (
    <div>
      <header className="header">
        <div className="headerContent maxi-center">
          <span>
            MovieTube App <img className="logo" src={logo} alt="" />
          </span>

          <form className="form" onSubmit={searchMovies}>
            <input
              className="searchtab"
              type="text"
              placeholder="Type movie name"
              onChange={(e) => setSearchKey(e.target.value)}
            />
            <button className="submit-search" type="submit">
              Search!
            </button>
          </form>
        </div>
      </header>

      <div
        className="tube-tab"
        style={{
          backgroundImage: selectedMovie.backdrop_path
            ? `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),url('${IMAGE_PATH}${selectedMovie.backdrop_path}')`
            : null,
        }}
      >
        <div className="poster-content maxi-center">
          {playTrailer ? (
            <button
              className="close-button"
              onClick={() => setPlayTrailer(false)}
            >
              Close ▼
            </button>
          ) : null}
          {selectedMovie.videos && playTrailer ? renderTrailer() : null}
          {favoritesChecker(selectedMovie.id) ? (
            <button
              className="dislikeit"
              onClick={() => removeFromFavorites(selectedMovie.id)}
            >
              ♡
            </button>
          ) : (
            <button
              className="likeit"
              onClick={() => addToFavorites(selectedMovie)}
            >
              ♥
            </button>
          )}

          <br></br>
          <button className="watch-button" onClick={() => setPlayTrailer(true)}>
            Play Trailer
          </button>
          <h1 className="tube-title">{selectedMovie.title}</h1>
          {selectedMovie.overview ? (
            <p className="tube-overview">{selectedMovie.overview}</p>
          ) : null}
        </div>
      </div>

      <div className="container maxi-center">{renderMovies()}</div>
    </div>
  );
}

export default AppHome;
