import React, { useState } from 'react'
import { FaStar} from 'react-icons/fa'

export default function Stars(){
  const [rating, setRating] = useState(0);
  // const [hover, setHover] = useState(0);
  return (
    <div>
      {[...Array(5)].map((star, i)=>{
        const ratingValue = i + 1;
        
        return (
          <label 
          type='radio' 
          name='rating' 
          value={ratingValue} 
          onClick={()=> setRating(ratingValue)}
          >
            <FaStar 
            className='star'
            color={(ratingValue) <= rating ? "#ffc107" : "#efe5e9"} 
            size={40}
            />
          </label>
        )
      })}
      <button className='btn btn-primary' onClick={()=>{setRating(null)}}>Clear Rating</button>
      <p>{rating <= 0 ? '' : 'You gave it a ' + rating}</p>
    </div>
  )
}