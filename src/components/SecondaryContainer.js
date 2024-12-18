import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
<<<<<<< HEAD
      <div className="bg-black w-screen">
<<<<<<< HEAD
         <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
=======
        <div className="-mt-40 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.nowPlayingMovies}
          />
>>>>>>> 9ade620 (Completed the browse page)
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
=======
      <div className="bg-black w-screen pb-10 ">
         <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
          <MovieList title={"Popular in India"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.tvShows} />
>>>>>>> fa00bf1 (Read Me File Added)
        </div>
      </div>
    )
  );
  };
  export default SecondaryContainer;