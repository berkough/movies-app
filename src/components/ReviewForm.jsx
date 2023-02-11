import React from 'react'
import Stars from './Stars'
import ReviewList from './ReviewList'

export default function ReviewForm({imdbID,setReivewList}){
  return (
    <div id={'reviewInput-'+imdbID}>
    <Stars />
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