import React, { useState } from 'react'
import Review from './Review'

export default function ReviewList({setReviews,imdbID}){
 const [reviewList, setReviewList] = useState();
  return (
    <div>
      {
        reviewList.length > 0 ? reviewList.map((review)=>(<Review review={review} key={imdbID}/>)) : <p>You need to submit some reviews.</p>
      }
    </div>
  )
}