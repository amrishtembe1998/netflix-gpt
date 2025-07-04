import Header from "./Header";
import useMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useMovies("now_playing");
  useMovies("top_rated");
  useMovies("upcoming");
  useMovies("popular");

  return (
    <div>
      <Header />
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
    </div>
  );
};

export default Browse;
