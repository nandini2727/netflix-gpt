import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    movie:null,
    movieNames:null,
    searchItem:null,
    showSearch:false,
  },
  reducers: {

    toggleSearchView: (state) => {
      state.showSearch = !state.showSearch;
    },
    addMovieNames:(state,action)=>{
      const {movieNames,movie} = action.payload
      state.movieNames=movieNames;
      state.movie=movie;
    },
    addSearchItem:(state,action)=>{
      state.searchItem=action.payload;
    }
  },
});
export const { toggleSearchView,addMovieNames, addSearchItem} = gptSlice.actions;
export default gptSlice.reducer;