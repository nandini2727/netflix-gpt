import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef, useState } from "react";
import { addMovieNames, addSearchItem } from "../utils/gptSlice";
import Loading from "./Loading";
import aiSearch from "../utils/aiSearch";
import searchMovieTMDB from "../utils/searchMovieTMDB";


const GptSearchBar = ({}) => {
  const [load,setLoad]=useState(false);
  const [aiBool,setAiBool]=useState(false);
  const langKey = useSelector((store) => store.config.lang);
  const searchText=useRef(null)
  const dispatch=useDispatch();
  
  const handleAiClick=  ()=>{
    setAiBool(!aiBool);
    dispatch(addMovieNames({movieNames:null}));
    searchText.current.value=""
}
const handleSearchClick = async () => {
    setLoad(true)
    dispatch(addMovieNames({movieNames:null}));
    if (aiBool) {
      const [tmdbResults,aiMovies]=await aiSearch(searchText.current.value)
      dispatch(addMovieNames({movieNames:tmdbResults,movie:aiMovies})) ;
    }
    else{ 
      const movieDetail= await searchMovieTMDB(searchText.current.value)
      dispatch(addMovieNames({movieNames:[movieDetail],movie:[searchText.current.value]})) ;
    }
    
    dispatch(addSearchItem(searchText.current.value));
    setLoad(false)
}

 
  return (
    <>
      
      <div className="pt-[35%] md:pt-[10%] flex flex-col items-center justify-center">
      {aiBool && <h1 className="text-white font-bold text-2xl md:text-4xl mb-5 md:mb-8"> Let AI be your Movie Guru</h1>}
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12"onSubmit={(e)=>e.preventDefault()}>
        <input
          type="text"
          ref={searchText}
          className=" p-4 ml-4 md:m-4  text-[0.9rem] md:text-lg col-span-9 bg-black border text-white"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-3 mx-4 my-2 md:m-4  px-2 md:px-4 bg-red-700 hover:bg-red-800 text-white rounded-lg font-medium text-lg md:text-xl" onClick={handleSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
      <p className="text-white text-sm md:text-md mt-3 md:mt-0">{aiBool?"Search By Movie Name.":"Confuse? Ask AI for movie suggesions."} <span className="ml-1 font-semibold text-cyan-600 cursor-pointer" onClick={handleAiClick}>{aiBool?"Search Now":"Ask Now"}</span></p>
    </div>
    {load&&<Loading/>}
    </>
  );
};
export default GptSearchBar;