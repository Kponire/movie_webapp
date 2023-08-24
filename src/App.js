import './App.css';
import {useState, React, useEffect} from 'react';


const App = () => {
  const apikey = '7e2971bd';
  const apiurl = `http://www.omdbapi.com/?i=tt3896198&apikey=${apikey}`;
  const searchMovies = async (title) => {
        const response = await fetch(`${apiurl}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
  };
  const inputMovies = () => {

  }
  const movies = () => {
    <div className='container'>
    <div className='movie'> 
        <div>{movie1.year}</div>
        <div> <img /></div>
        <div>Type</div>
        <div>Title</div>
    </div>
  </div>
}
  const movie1 = {
    name: 'The Super Hero',
    year: '2020',

  }
  useEffect(() => {
      searchMovies('spiderman');
  },[]);
  return (
    <div className="App">
      <h1> MovieLand </h1>
      <div className='search'>
        <input 
          type='search' 
          placeholder='Search for movies' 
          name='search'
          onChange={inputMovies}
        />
        <button type='submit'>
          Search
        </button>
      </div>
    </div>
  );
}

export default App;
