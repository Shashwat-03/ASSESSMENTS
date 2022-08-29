// import React from "react";
// import "./MovieDetail.css";
// // const IMGPATH="https://image.tmdb.org/t/p/w1280";

// const MovieDetail = (props) => {
//     const { data } = props;
//     return (
//       <div className="card-item">
//           <div className="card-inner">
//             <div className="card-top">
//               {/* <img src={IMGPATH + data.Poster_path} alt={data.title} /> */}
//             </div>
//             <div className="card-bottom">
//               <div className="card-info">
//                 <h4>{data.title}</h4>
//                 <p>{data.release_date}</p>
//               </div>
//             </div>
//           </div>
//       </div>
//     );
// };
// export default MovieDetail;

import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieDetail,
  getSelectedMovieOrShow,
} from "../../features/movies/movieSlice";
import "./MovieDetail.scss";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);

  useEffect(() => {
    dispatch(fetchAsyncMovieDetail(imdbID));
  }, [dispatch, imdbID]);
  console.log("Current movie", data);
  return (
    <div className="movie-section">
      <div className="section-left">
        <h1 className="movie-title">{data.Title}</h1>
        <div className="movie-rating">
        </div>
        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Actors</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Genres</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className="movie-right">
        <img src={data.Poster} alt={data.Title} />
      </div>
    </div>
  );
};

export default MovieDetail;