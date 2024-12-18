import axios from 'axios'
import searchMovieTMDB from './searchMovieTMDB'
import { GEMINI_KEY } from './constants'
const aiSearch=async (query)=>{
    console.log("loading")
    console.log(query)
    const response=await axios({
        url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key="+GEMINI_KEY,
        method:"post",
        data:{contents:[{parts:[{text:"Act as a Movie Recommendation system and suggest some movies for the query :"+ query +". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya"}]}]} 
    })
    const aiMovies=response?.data?.candidates[0]?.content?.parts[0]?.text.split(", ");
    const promises=aiMovies.map((movie)=>searchMovieTMDB(movie));
    const tmdbResults=await Promise.all(promises);
    console.log(tmdbResults)
    return [tmdbResults,aiMovies]
    }

export default aiSearch
