import React from "react";
import ReviewList from "./ReviewList";

export default function Review() {
  return (
      <div className="input-group input-group-lg">
        <label for="reviewText">Review</label><br />
        <textarea placeholder="Write your review here..." aria-multiline="true" id="reviewText" /><br />
        <button type="button" id="submitBtn" onClick={(e) => {
          console.log(e.target.parentNode.getAttribute('id'));
        }}>Submit</button>
      </div>
  );
}
