import React from 'react'

export default function ReviewForm(props){
  return (
    <div id={props.id}>
    <label for="reviewText">Review</label>
    <br />
    <textarea placeholder="Write your review here..." aria-multiline="true" id="reviewText" />
    <br />
    <button type="button" id="submitBtn" onClick={(e) => {
      let reviewID = e.target.parentNode.getAttribute('id');
      console.log(reviewID);
    }}>Submit</button>
  </div>
  )
}