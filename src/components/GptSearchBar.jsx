import { useSelector } from "react-redux";
import lang from "../constants/language";

const GptSearchBar = () => {
  const selectedLanguage = useSelector((state) => state.config.lang);
  return (
    <div className="pt-[15%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onClick={(e) => e.preventDefault()}
      >
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[selectedLanguage].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
