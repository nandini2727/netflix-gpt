<<<<<<< HEAD
import { IMG_CDN_URL } from "../utils/constants";
const MovieCard = ({ posterPath }) => {
<<<<<<< HEAD
  if (!posterPath) return null
  return (
    <div className="w-36 md:w-48 mr-4">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} className=" border rounded-lg h-60" />
=======
  return (
    <div className="w-48 pr-4">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
>>>>>>> 9ade620 (Completed the browse page)
=======
import { Link } from "react-router-dom";
import { API_OPTIONS, IMG_CDN_URL } from "../utils/constants";
import { useEffect, useState } from "react";
const MovieCard = ({ posterPath ,id }) => {
  
  const [trailerid,setTrailerId]=useState(null);
  const getMovieVideos= async()=>{
    const data= await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US",API_OPTIONS);
    const json=await data.json();
    const filterData=json?.results.filter(video=>video.type==="Trailer")
    const trailer=filterData[0];
    setTrailerId(trailer?.key)
    
}
  useEffect(()=>{
      getMovieVideos();
  },[])
  if (!posterPath) return null
  return (
    <div className="w-36 md:w-48  mr-4">
      <Link to={"https://www.youtube.com/watch?v="+ trailerid} target="_blank" ><img alt="Movie Card" src={IMG_CDN_URL + posterPath} className=" hover:scale-110 transform transition duration-30000 cursor-pointer border rounded-lg h-52 md:h-60" /></Link>
>>>>>>> fa00bf1 (Read Me File Added)
    </div>
  );
};
export default MovieCard;