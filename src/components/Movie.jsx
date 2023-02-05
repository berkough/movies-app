import React from 'react'
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'

function Movie(props) {
  return (
    <div className='movie-block'>
      <h1>{props.title}</h1>
      <img src={`./img/${props.cover}`} />
      <ReviewForm />
      <ReviewList />
    </div>
  )
}

export default Movie
