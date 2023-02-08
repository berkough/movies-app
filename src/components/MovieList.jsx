import React, { useState } from 'react'
import Movie from './Movie'

export default function MovieList(){
  const [movieList, setMovieList] = useState([]);
  const URL = 'https://www.omdbapi.com/?apikey=687dcc5&t=movie&s=';
  
  async function search(title){
    await fetch(`${URL}${title}`)
      .then((response)=>response.json())
      .then((data)=>{
        console.log(data);
        setMovieList(data.Search);
      });
  }

  return (
    <div>
      <div className="input-group input-group-lg">
        <input type="search" placeholder="Search for a Movie" id="searchInp" />
        <button type="button" id="searchBtn" onClick={()=>{search(document.getElementById('searchInp').value)}}>Search</button>
      </div>
      <div id="movieOutput">
      {
        movieList.length > 0 ? movieList.map((movie)=>(<Movie movie={movie} key={movie.imdbID}/>)) : <h2>Try searching for a movie title...</h2>
      }
      </div>
    </div>
  )
}