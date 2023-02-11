import React from 'react'
import Stars from './Stars'
// import ReviewList from './ReviewList'

export default function ReviewForm({imdbID, createReview}){

  return (
    <div id={'reviewInput-'+imdbID}>
    <Stars key={imdbID}/>
    <textarea 
      className='form-control mb-10'
      aria-label='Review'
      placeholder="Write your review here..." 
      id={'reviewText-'+imdbID} />
    <br />
    <button className='btn btn-primary' type="button" id="submitBtn" onClick={() => {createReview()}}>Submit</button>
  </div>
  )
}