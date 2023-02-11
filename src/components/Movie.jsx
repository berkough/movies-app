import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'

export default function Movie({imdbID,Title,Year,Poster,onDelete}){
  let imdbLink = `https://imdb.com/title/${imdbID}`;

  return (
    <div className='m-4 w-25' id={imdbID}>
      <p className='justify-content-center'>{Title} ({Year}) <label type='radio' onClick={()=>onDelete(imdbID)}><AiFillCloseCircle size={30}/></label></p>
      <a href={imdbLink}>
        <img className='rounded' src={Poster === 'N/A' ? 'https://via.placeholder.com/300' : Poster} alt={Title} />
      </a>
      <ReviewForm imdbID={imdbID} />
    </div>
  )
}
