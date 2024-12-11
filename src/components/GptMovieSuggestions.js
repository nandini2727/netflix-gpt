import { useSelector } from "react-redux";
import MovieList from "./MovieList"
const GptMovieSuggestions = () => {
  
  const {movieNames,searchItem}=useSelector((store)=>store.gpt);
  
  return (
    <div className="bg-black opacity-90 m-12 p-8 pb-12">
        <h1 className="text-3xl  text-white ml-8 ">Showing Search Results for "{searchItem}"</h1>
        <MovieList movies={movieNames} />
    </div>);
  };
  export default GptMovieSuggestions;