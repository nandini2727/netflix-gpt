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
    tvShows:null,
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
<<<<<<< HEAD
      },
<<<<<<< HEAD
=======
    },
    addTvShow: (state, action) => {
      state.tvShows= action.payload;
    },
>>>>>>> fa00bf1 (Read Me File Added)
    addUpcomingMovies: (state, action) => {
     state.upcomingMovies = action.payload;
    },
  },
});
<<<<<<< HEAD
export const { addNowPlayingMovies, addTrailerVideo,addPopularMovies,addUpcomingMovies } = moviesSlice.actions;
=======
  },
});
export const { addNowPlayingMovies, addTrailerVideo,addPopularMovies } = moviesSlice.actions;
>>>>>>> 9ade620 (Completed the browse page)
=======
export const { addNowPlayingMovies, addTrailerVideo,addPopularMovies,addUpcomingMovies,addTvShow } = moviesSlice.actions;
>>>>>>> fa00bf1 (Read Me File Added)
export default moviesSlice.reducer;