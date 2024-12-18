import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTvShow } from "../utils/moviesSlice";
const useTvShows = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();
  const getTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTvShow(json.results));
  };
  useEffect(() => {
    getTvShows();
  }, []);
};
export default useTvShows;