import React from 'react'
import Stars from './Stars'

export default function ReviewForm(props){
  return (
    <div id={props.id}>
    <Stars />
    <textarea 
      className='form-control mb-10'
      aria-label='Review'
      placeholder="Write your review here..." 
      id="reviewText" />
    <br />
    <button className='btn btn-primary' type="button" id="submitBtn" onClick={(e) => {
      let review = e.target.parentNode.getAttribute('id');
      console.log(review.dangerouslySetInnerHTML);
    }}>Submit</button>
  </div>
  )
}