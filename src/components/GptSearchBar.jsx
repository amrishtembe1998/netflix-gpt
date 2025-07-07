import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../constants/language";
import geminiAI from "../utils/genai";
import { TMDB_API_OPTIONS } from "../constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const query = `Act as a movie recommendation system and suggest some movies for the query ${searchText.current.value}. only give me names of 5 movies, comma separated like example result given ahead. Example Result: "Movie 1, Movie 2, Movie 3, Movie 4, Movie 5"`;
    const response = await geminiAI.models.generateContent({
      model: "gemini-2.0-flash-001",
      contents: query,
    });
    const gptRecommendedMovieList = response.text
      .split(",")
      .map((movie) => movie.trim());

    const tmdbRecommendedMovieList = await Promise.all(
      gptRecommendedMovieList.map((movie) => searchMovieTMDB(movie))
    );
    dispatch(
      addGptMovieResult({
        movieNames: gptRecommendedMovieList,
        movieResults: tmdbRecommendedMovieList,
      })
    );
  };

  const selectedLanguage = useSelector((state) => state.config.lang);
  return (
    <div className="pt-[35%] flex justify-center md:pt-[10%]">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[selectedLanguage].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
