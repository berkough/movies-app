import React from 'react'
import { FaStar} from 'react-icons/fa'

export default function Stars(){
  return (
    <div>
      {[...Array(5)].map((start)=>{
        return <FaStar size={50}/>
      })}
      
    </div>
  )
}