import React, { useState } from 'react'
import Movie from './Movie'

export default function MovieList(){
  const [movieList, setMovieList] = useState([]);
  const URL = 'https://www.omdbapi.com/?apikey=687dcc5&type=movie&s=';

  async function search(title){
    await fetch(URL+title)
      .then((response)=>response.json())
      .then((data)=>{
        console.log(data);
        let movies = data.Search;
        setMovieList(movies);
        localStorage.setItem('search',JSON.stringify(movies));
      });
  }

  function handleDeleteMovie(imdbID){
    console.log(imdbID);
    setMovieList(movieList.filter(movie => movie.imdbID !== imdbID))
  }

  function clearEverything(){
    localStorage.clear();
    setMovieList([]);
  }

  return (
    <>
      <div className="p-4 container justify-content-center input-group input-group-lg">
        <input className='rounded' type="search" placeholder="Search for a Movie" id="searchInp" />
        <button className='btn btn-primary rounded' type='button' id='searchBtn' onClick={()=>{search(document.getElementById('searchInp').value)}}>Search</button>
        <button className='btn btn-primary rounded' type='button' id='clearBtn' onClick={()=>{clearEverything()}}>Clear EVERYTHING!</button>
      </div>
      <div className='d-inline-flex flex-wrap justify-content-center' id='movieOutput'>
      {
        movieList.length > 0 ? movieList.map((movie)=>(<Movie {...movie} key={movie.imdbID} onDelete={handleDeleteMovie} movieList={movieList} setMovieList={setMovieList}/>)) : <h2>Try searching for a movie title...</h2>
      }
      </div>
      <div></div>
    </>
  )
}