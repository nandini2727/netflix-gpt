import { useSelector } from "react-redux";
import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
const GPTSearch = () => {
 const movieNames=useSelector((store)=>store.gpt.movieNames)
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover" src={BG_URL} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar />
        {movieNames && <GptMovieSuggestions />}
      </div>
    </>
  );
};
export default GPTSearch;