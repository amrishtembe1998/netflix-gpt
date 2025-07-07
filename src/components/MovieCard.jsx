import { IMAGE_CDN_URL } from "../constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) {
    return null; // Return null if posterPath is not provided
  }
  return (
    <div className="w-36 md:w-48 pr-4">
      <img src={IMAGE_CDN_URL + posterPath} alt="Movie Poster" />
    </div>
  );
};

export default MovieCard;
