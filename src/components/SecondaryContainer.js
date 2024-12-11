import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black w-screen">
         <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
  };
  export default SecondaryContainer;