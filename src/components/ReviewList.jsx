import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Review from './Review'
import ReviewForm from './ReviewForm';

export default function ReviewList({imdbID}){
 const [reviewList, setReviewList] = useState([]);
 let reviewText;
 let wholeReview;
 let rID;

 function handleCreateReview(){
  rID = uuidv4();
  reviewText = document.getElementById('reviewText-'+imdbID).value;
  wholeReview = {id:rID,reviewText:reviewText}
  console.log("output of reviewtext "+reviewText);
  setReviewList([...reviewList,wholeReview]);
  console.log("after set review list "+reviewList);
  localStorage.setItem(`${imdbID}-${rID}`, reviewText)
}

  return (
    <div>
      <ReviewForm createReview={handleCreateReview} imdbID={imdbID}/>
      {
        reviewList.length > 0 ? reviewList.map((review)=>(<Review reviews={review} setReviewList={setReviewList} reviewList={reviewList} imdbID={imdbID} key={review.id} />)) : <p>You need to submit some reviews.</p>
      }
    </div>
  )
}