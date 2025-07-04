import { IMAGE_CDN_URL } from "../constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img src={IMAGE_CDN_URL + posterPath} alt="Movie Poster" />
    </div>
  );
};

export default MovieCard;
