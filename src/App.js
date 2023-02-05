import './App.css';
import { useEffect } from 'react';
import MovieList from './components/MovieList';

function App() {
  const URL = 'https://www.omdbapi.com/?apikey=687dcc5&q=';
  async function search(){

  }
  return (
    <div className="App">
      <div className="input-group input-group-lg">
        <input type="search" placeholder="Search for a Movie" id="searchInp" />
        <button type="button" id="searchBtn" onClick="">Search</button>
      </div>
      <MovieList />
    </div>
  );
}

export default App;
