import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../MovieApp/features/movies/movieSlice"

 const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
export default store