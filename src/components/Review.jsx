import React from "react";
import Stars from './Stars'

export default function Review({reviewText,imdbID}) {
  return (
    <div id={'review-'+imdbID}>
      {reviewText}
    </div>
  );
}
