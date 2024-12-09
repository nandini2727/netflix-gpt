import { IMG_CDN_URL } from "../utils/constants";
const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null
  return (
    <div className="w-36 md:w-48 mr-4">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} className=" border rounded-lg h-60" />
    </div>
  );
};
export default MovieCard;