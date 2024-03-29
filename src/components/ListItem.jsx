import React from "react";

const ListItem = ({ feedback, deleteFeedback }) => {
  return (
    <li
      className={
        feedback.rating > 3
          ? "list-group-item bg-success shadow-sm text-light"
          : feedback.rating > 2
          ? "list-group-item bg-primary shadow-sm"
          : "list-group-item bg-secondary text-light shadow-sm"
      }
    >
      <h1 className="display-5">Rating : {feedback.rating}</h1>
      <p>Feedback : {feedback.review}</p>
      <span className="float-end">
        <button className="btn btn-warning btn-sm mx-1">Edit</button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteFeedback(feedback.id)}
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default ListItem;
