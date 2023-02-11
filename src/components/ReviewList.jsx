import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Review from './Review'
import ReviewForm from './ReviewForm';

export default function ReviewList({imdbID,rID,reviewText}){
 const [reviewList, setReviewList] = useState([]);
//  setReviewList(localStorage.getItem(`${imdbID}${rID}`)?[...reviewList,localStorage.getItem(`${imdbID}${rID}`)]:null)
 function createReview(){
  let rID = uuidv4();
  let reviewText = document.getElementById('reviewText').value;
  console.log(reviewText);
  setReviewList([...reviewList,reviewText]);
  localStorage.setItem(`${imdbID}${rID}`, reviewText)
}
  return (
    <div>
      <ReviewForm imdbID={imdbID}/>
      <button className='btn btn-primary' type="button" id="submitBtn" onClick={() => {createReview()}}>Submit</button>
      {
        reviewList.length > 0 ? reviewList.map((review)=>(<Review reviewText={reviewText} key={imdbID}/>)) : <p>You need to submit some reviews.</p>
      }
    </div>
  )
}