import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
const MainContainer = ({randomInteger}) => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  
  const mainMovie = movies[randomInteger];
  const { original_title, overview, id } = mainMovie;
  return (
<<<<<<< HEAD
    <div  className="pt-[30%] bg-black md:pt-0">
=======
    <div>
>>>>>>> 9ade620 (Completed the browse page)
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};
export default MainContainer;