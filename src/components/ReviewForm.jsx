import React from 'react'
import Stars from './Stars'
import { v4 as uuidv4 } from 'uuid'
import ReviewList from './ReviewList'

export default function ReviewForm({imdbID}){
  function setReviewList(){

  }
  return (
    <div id={'reviewInput-'+imdbID}>
    <Stars key={imdbID}/>
    <textarea 
      className='form-control mb-10'
      aria-label='Review'
      placeholder="Write your review here..." 
      id="reviewText" />
    <br />
    <button className='btn btn-primary' type="button" id="submitBtn" onClick={() => {}}>Submit</button>
  </div>
  )
}