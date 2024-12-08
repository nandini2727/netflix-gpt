import {configureStore} from "@reduxjs/toolkit"
import  userReducer  from "./userSlice";
<<<<<<< HEAD
import moviesReducer from "./moviesSlice"
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
=======
>>>>>>> e7f9588 (firebase integration and signin & signout added)
const appStore =configureStore(
    {
        reducer:{
            user:userReducer,
<<<<<<< HEAD
            movies:moviesReducer,
            gpt: gptReducer,
            config: configReducer,
=======
>>>>>>> e7f9588 (firebase integration and signin & signout added)
        },
    }
)
export default appStore;