import { useSelector } from "react-redux";
import MovieList from "./MovieList"
const GptMovieSuggestions = () => {
  
  const {movieNames,movie,searchItem}=useSelector((store)=>store.gpt);
  
  return (
    <div className="bg-black opacity-90 m-5 mt-9 p-4 md:mt-10 md:m-12 md:p-8 md:pb-12">
        <h1 className=" text-xl ml-2 md:text-3xl md:ml-8  text-white  ">Showing Search Results for "{searchItem}"</h1>
         {movie.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieNames[index]}
          />
        ))}
    </div>);
  };
  export default GptMovieSuggestions;