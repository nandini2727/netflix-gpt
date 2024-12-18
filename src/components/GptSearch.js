import { useDispatch, useSelector } from "react-redux";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";


const GPTSearch = () => {
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
  );
};
export default GPTSearch;