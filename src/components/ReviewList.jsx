import React, { useState, useEffect } from 'react'
import Review from './Review'

export default function ReviewList({imdbID,rID}){
 const [reviewList, setReviewList] = useState();
 setReviewList(localStorage.getItem(`${imdbID}${rID}`)?[...reviewList,localStorage.getItem(`${imdbID}${rID}`)]:null)

  return (
    <div>
      {
        reviewList.length > 0 ? reviewList.map((review)=>(<Review review={review} key={imdbID}/>)) : <p>You need to submit some reviews.</p>
      }
    </div>
  )
}