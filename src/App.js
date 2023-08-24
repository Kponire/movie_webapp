import './App.css';
import {useState, React, useEffect} from 'react';


const App = () => {
  const apikey = '7e2971bd';
  const apiurl = 'http://www.omdbapi.com/?i=tt3896198&apikey=7e2971bd';
  const searchMovies = async (title) => {
        const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=7e2971bd&s=$title');
        const data = await response.json();
        console.log(data.Search);
  };
  useEffect(() => {
      searchMovies('spiderman');
  },[]);
  return (
    <div className="App">
    </div>
  );
}

export default App;
