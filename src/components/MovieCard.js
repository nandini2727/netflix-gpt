import { IMG_CDN_URL } from "../utils/constants";
const MovieCard = ({ posterPath }) => {
<<<<<<< HEAD
  if (!posterPath) return null
  return (
    <div className="w-36 md:w-48 mr-4">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} className=" border rounded-lg h-60" />
=======
  return (
    <div className="w-48 pr-4">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
>>>>>>> 9ade620 (Completed the browse page)
    </div>
  );
};
export default MovieCard;