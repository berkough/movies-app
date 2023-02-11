import React from "react";
import { AiFillCloseCircle } from 'react-icons/ai'

export default function Review({reviews,setReviewList,reviewList,imdbID}) {
  
  function deleteIndivdualReviews(){
    console.log(`deleteInividualReviews ${imdbID}-${reviews.id}`);
    localStorage.removeItem(`${imdbID}-${reviews.id}`);
    console.log(reviewList);
    setReviewList(reviewList.filter(review => review.id !== reviews.id));
    console.log(reviewList);
   }

  return (
    <div>
      {reviews.reviewText}<label type='radio' onClick={()=>deleteIndivdualReviews(reviews.id)}><AiFillCloseCircle size={20}/></label>
    </div>
  );
}
