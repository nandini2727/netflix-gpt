<<<<<<< HEAD
<<<<<<< HEAD
import { useSelector } from "react-redux";
=======
>>>>>>> 97c48da (Added GPT search page & language change functionality)
import { BG_URL } from "../utils/constants";
=======
import { useDispatch, useSelector } from "react-redux";
>>>>>>> fa00bf1 (Read Me File Added)
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";


const GPTSearch = () => {
<<<<<<< HEAD
 const movieNames=useSelector((store)=>store.gpt.movieNames)
  return (
    <>
      <div className="fixed -z-10 bg-gradient-to-t from-red-700 via-transparent bg-black w-screen  h-screen object-cover">
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