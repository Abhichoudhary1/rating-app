import React, { useState } from "react";

const Form = ({ addFeedback }) => {
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addFeedback(rating, review);
    setRating(1);
    setReview("");
  };

  return (
    <form className="my-3" onSubmit={handleSubmit}>
      <select
        className="form-select"
        onChange={(e) => setRating(e.target.value)}
        value={rating}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <textarea
        value={review}
        placeholder="Please Enter Your Feedback Here.."
        className="form-control my-3"
        onChange={(e) => setReview(e.target.value)}
      ></textarea>
      <button className="btn btn-success w-100">Submit</button>
    </form>
  );
};

export default Form;
