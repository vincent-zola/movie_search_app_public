// useEffect hook, executes code at the load of page
import React, { useState, useEffect } from "react";
// import MovieCard component
import MovieCard from "./MovieCard";
// import CSS for App component
import "./App.css";
// import search Icon which is a svg
import SearchIcon from "./search.svg";

const API_URL = "https://www.omdbapi.com?apikey=69c44be5";

const App = () => {
  // create new State, setMovies function will receive 10 Movies
  // useState contains an empty array because at start it will not contain any movies
  const [movies, setMovies] = useState([]);

  // STATE EXPLANATION
  // setSearchTerm Function receives an value, than passes it on to useState and useState passes it on to searchTerm variable, as I understand for now...
  // useState contains empty strings because at start it will not have any search-term
  const [searchTerm, setSearchTerm] = useState("");

  // 2 Step
  // ...
  // async = lets the Fn know that we are using asynchronous code
  // searchMovies Fn accepts title as parameter
  const searchMovies = async (title) => {
    // await = waiting till we get the date
    // fetch API_URL and append to it &s=${title}
    const response = await fetch(`${API_URL}&s=${title}`);
    // convert response to a json file
    // data is now the json file which is an object
    const data = await response.json();
    // setMovies now contains array of 10 movies obtained through API
    setMovies(data.Search);
    // console.log(data.Search)
  };
  // 1 Step
  // ...
  // useEffect accepts a callback Function and an dependency array (if we want to call it at the start)
  useEffect(() => {
    searchMovies("evangelion");
  }, []);

  // code written below it JSX
  return (
    // className is class in HTML
    <div className="app">
      <h1>MOVIE SEARCH</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          // dynamic, declared on top in new state
          value={searchTerm}
          // onChange like eventListener in vanilla JS
          // e = what has changed?, e.target.value = input text
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* Search-Button */}
        <img
          // set img to our SearchIcon .svg imported on top
          src={SearchIcon}
          alt={"search"}
          // onClick like eventListener in vanilla JS
          // if Button is pressed searchMovies Fn gets called and parameter searchTerm included
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {/* movies? (check if data fetched), .length>0? (check if movies amount greater than 0, if yes than loop through movies and call MovieCard for every single one) */}
      {movies?.length > 0 ? (
        <div className="container">
          {/* call MovieCard component with a self-closing tag */}
          {/* passing a prop = movie1={movie} it allows us to use movie1 variable in our MovieCard component */}
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        // else show: No movies found
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

// we need to export every component so that we can call it elsewhere
export default App;
