import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return; // Handle the case where movies are not available

  const mainMovie = movies[0];
  return (
    <div>
      <VideoTitle
        title={mainMovie.title}
        overview={mainMovie.overview}
      ></VideoTitle>
      <VideoBackground movieId={mainMovie.id}></VideoBackground>
    </div>
  );
};

export default MainContainer;
