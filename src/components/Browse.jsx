import { useSelector } from "react-redux";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  console.log("Now Playing Movies: ", movies);
  return (
    <div>
      <Header />
      Browse
    </div>
  );
};

export default Browse;
