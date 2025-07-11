import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../constants";
import {
  addNowPlayingMovie,
  addTopRatedMovie,
  addUpcomingMovie,
  addPopularMovie,
} from "../utils/movieSlice";

const useMovies = (genre) => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);


  const getMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${genre}?page=1`,
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    if (genre === "now_playing") {
      dispatch(addNowPlayingMovie(json.results));
    } else if (genre === "top_rated") {
      dispatch(addTopRatedMovie(json.results));
    } else if (genre === "upcoming") {
      dispatch(addUpcomingMovie(json.results));
    } else if (genre === "popular") {
      dispatch(addPopularMovie(json.results));
    }
  };
  useEffect(() => {
    !nowPlayingMovies && getMovies();
  }, []);
};

export default useMovies;
