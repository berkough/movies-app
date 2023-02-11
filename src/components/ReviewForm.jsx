import React from 'react'
import Stars from './Stars'
// import ReviewList from './ReviewList'

export default function ReviewForm({imdbID}){

  return (
    <div id={'reviewInput-'+imdbID}>
    <Stars key={imdbID}/>
    <textarea 
      className='form-control mb-10'
      aria-label='Review'
      placeholder="Write your review here..." 
      id="reviewText" />
    <br />
  </div>
  )
}