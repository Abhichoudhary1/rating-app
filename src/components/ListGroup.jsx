import React from "react";
import ListItem from "./ListItem";

const ListGroup = ({ feedbacks, deleteFeedback }) => {
  return (
    <ul className="list-group">
      {feedbacks.map((feedback) => (
        <ListItem
          key={feedback.id}
          feedback={feedback}
          deleteFeedback={deleteFeedback}
        />
      ))}
    </ul>
  );
};

export default ListGroup;
