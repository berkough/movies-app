import React from 'react'
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'

export default function Movie({ movie }){
  let imdbLink = `https://imdb.com/title/${movie.imdbID}`;
  return (
    <div className='movie-block'>
      <h3>{movie.Title} ({movie.Year})</h3>
      <a href={imdbLink}>
        <img src={movie.Poster === 'N/A' ? 'https://via.placeholder.com/400' : movie.Poster} alt={movie.Title} />
      </a>
      <ReviewForm />
      <ReviewList />
    </div>
  )
}
