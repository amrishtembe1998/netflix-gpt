import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const recommendedMovieList = useSelector((store) => store.gpt);
  const movieNames = recommendedMovieList.movieNames;
  if (!movieNames) return null;
  const movieResults = recommendedMovieList.movieResults;

  return (
    <div className="p-4 m-4 bg-black/90 text-white">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        ></MovieList>
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
