import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
  name: "gpt",
  initialState: {
<<<<<<< HEAD
    showGptSearch: false,
<<<<<<< HEAD
    movieNames:null,
    searchItem:null
=======
>>>>>>> 97c48da (Added GPT search page & language change functionality)
=======
    movie:null,
    movieNames:null,
    searchItem:null,
    showSearch:false,
>>>>>>> fa00bf1 (Read Me File Added)
  },
  reducers: {

    toggleSearchView: (state) => {
      state.showSearch = !state.showSearch;
    },
<<<<<<< HEAD
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
<<<<<<< HEAD
export const { toggleGptSearchView,addMovieNames, addSearchItem} = gptSlice.actions;
=======
  },
});
export const { toggleGptSearchView } = gptSlice.actions;
>>>>>>> 97c48da (Added GPT search page & language change functionality)
=======
export const { toggleSearchView,addMovieNames, addSearchItem} = gptSlice.actions;
>>>>>>> fa00bf1 (Read Me File Added)
export default gptSlice.reducer;