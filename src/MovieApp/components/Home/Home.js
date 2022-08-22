import  { useEffect } from "react";
import movieApi from '../../common/apis/MovieApi'
import { APIKey } from "../../common/apis/MovieApiKey";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    const fetchMovies=async()=>{
        const response=await movieApi.get(`movie?api_key=${APIKey}`);
        dispatch(addMovies(response.data.results));
    }
    fetchMovies();
  },[])

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;