import React from 'react'
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'

export default function Movie(props){
  let imdbLink = `https://imdb.com/title/${props.movie.imdbID}`;
  return (
    <div className='m-4 w-25' id={props.movie.imdbID}>
      <h3>{props.movie.Title} ({props.movie.Year})</h3>
      <a href={imdbLink}>
        <img src={props.movie.Poster === 'N/A' ? 'https://via.placeholder.com/300' : props.movie.Poster} alt={props.movie.Title} />
      </a>
      <ReviewForm id={'review-'+props.movie.imdbID} />
      <ReviewList />
    </div>
  )
}
