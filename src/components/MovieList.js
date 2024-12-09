import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  
  return (
    <div className="px-6 ">
<<<<<<< HEAD
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
=======
      <h1 className="text-3xl py-4 text-white">{title}</h1>
>>>>>>> 9ade620 (Completed the browse page)
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;