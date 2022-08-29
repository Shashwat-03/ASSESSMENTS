// import  { useEffect } from "react";
// // import movieApi from '../../common/apis/MovieApi'
// // import { APIKey } from "../../common/apis/MovieApiKey";
// import MovieListing from "../MovieListing/MovieListing";
// // import { useDispatch } from "react-redux";
// // import { addMovies } from "../../features/movies/movieSlice";
// const Home = () => {
// //   const dispatch = useDispatch();
// //   useEffect(()=>{
// //        dispatch
// //   },[addMovies])

//   return (
//     <div>
//       <div className="banner-img"></div>
//       <MovieListing />
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import MovieListing from "../MovieListing/MovieListing";
import "./Home.css";
import { useDispatch } from "react-redux";
import {
  addMovies,
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Home = () => {
  const [movieName, setMovieName] = useState("Avengers");
  const [movieType, setMovieType] = useState("Popular");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <div className="home">
      <div className="banner_img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;