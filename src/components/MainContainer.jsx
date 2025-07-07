import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return; // Handle the case where movies are not available

  const mainMovie = movies[2];
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle
        title={mainMovie.title}
        overview={mainMovie.overview}
      ></VideoTitle>
      <VideoBackground movieId={mainMovie.id}></VideoBackground>
    </div>
  );
};

export default MainContainer;
