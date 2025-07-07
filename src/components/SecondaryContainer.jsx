import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const moviesNowPlaying = useSelector((store) => store.movies?.nowPlayingMovies);
  const moviesTopRated = useSelector((store) => store.movies?.topRatedMovies);
  const moviesUpcoming = useSelector((store) => store.movies?.upcomingMovies);
  const moviesPopular = useSelector((store) => store.movies?.popularMovies);
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-36 relative z-20 pl-4">
        <MovieList title={"Now Playing"} movies={moviesNowPlaying}></MovieList>
        <MovieList title={"Top Rated"} movies={moviesTopRated}></MovieList>
        <MovieList title={"Upcoming"} movies={moviesUpcoming}></MovieList>
        <MovieList title={"Popular"} movies={moviesPopular}></MovieList>
      </div>
    </div>
  );
};

export default SecondaryContainer;
