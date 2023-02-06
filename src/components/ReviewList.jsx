import React from 'react'

export default function ReviewList(review){
  const [reviewList, setReviewList] = useState([]);
  return (
    <div>
      {
        reviewList.length > 0 ? reviewList.map((review)=>(<Review movie={review}/>)) : <h4>What do you think of this movie?</h4>
      }
    </div>
  )
}