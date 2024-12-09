import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
<<<<<<< HEAD
    popularMovies: null,
    upcomingMovies: null,
=======
>>>>>>> 9ade620 (Completed the browse page)
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
        state.popularMovies = action.payload;
      },
<<<<<<< HEAD
    addUpcomingMovies: (state, action) => {
     state.upcomingMovies = action.payload;
    },
  },
});
export const { addNowPlayingMovies, addTrailerVideo,addPopularMovies,addUpcomingMovies } = moviesSlice.actions;
=======
  },
});
export const { addNowPlayingMovies, addTrailerVideo,addPopularMovies } = moviesSlice.actions;
>>>>>>> 9ade620 (Completed the browse page)
export default moviesSlice.reducer;