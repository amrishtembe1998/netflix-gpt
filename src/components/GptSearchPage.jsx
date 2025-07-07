import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { APP_BACKGROUND_IMAGE_URL } from "../constants";

const GptSearchPage = () => {
  return (
    <div className="relative h-screen w-full text-white">
      <img
        src={APP_BACKGROUND_IMAGE_URL}
        alt="logo"
        className="fixed -z-10 h-screen w-full object-cover"
      />
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearchPage;
