import React from 'react'
import Review from './Review'
import ReviewList from './ReviewList'
import Stars from './Stars'

export default function ReviewForm(){
  return (
    <>
    <label for="reviewText">Review</label>
    <br />
    <textarea placeholder="Write your review here..." aria-multiline="true" id="reviewText" />
    <br />
    <button type="button" id="submitBtn" onClick={(e) => {
      console.log(e.target.parentNode.getAttribute('id'));
    }}>Submit</button>
  </>
  )
}