<<<<<<< HEAD
import { useSelector } from "react-redux";
=======
>>>>>>> 97c48da (Added GPT search page & language change functionality)
import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
const GPTSearch = () => {
<<<<<<< HEAD
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
=======
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
>>>>>>> 97c48da (Added GPT search page & language change functionality)
  );
};
export default GPTSearch;