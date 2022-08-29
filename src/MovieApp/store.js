// import { configureStore } from "@reduxjs/toolkit";
// import moviesReducer from "../MovieApp/features/movies/movieSlice"

//  const store = configureStore({
//   reducer: {
//     movies: moviesReducer,
//   },
// });
// export default store

import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import movieSlice from "../MovieApp/features/movies/movieSlice";

 const store = configureStore({
  reducer: { movies: movieSlice },
});
export default store