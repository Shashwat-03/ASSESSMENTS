import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from './MovieApp/components/Home/Home'
import Header from './MovieApp/components/Header/Header'
import Footer from './MovieApp/components/Footer/Footer'
import PageNotFound from './MovieApp/components/PageNotFound/PageNotFound'
import MovieDetail from './MovieApp/components/MovieDetail/MovieDetail'
import './App.css'
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/movie/:imdbID" component={MovieDetail} />
            <Route component={PageNotFound} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;