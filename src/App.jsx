import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import AvgComponent from "./components/AvgComponent";

const App = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  // Add Feedback

  const addFeedback = (rating, review) => {
    const newRating = {
      id: crypto.randomUUID(),
      rating,
      review,
    };

    setFeedbacks([newRating, ...feedbacks]);
  };

  // Delete Feedback

  const deleteFeedback = (id) => {
    setFeedbacks(feedbacks.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="container p-5">
        <Form addFeedback={addFeedback} />
        <AvgComponent feedbacks={feedbacks} />
        <ListGroup feedbacks={feedbacks} deleteFeedback={deleteFeedback} />
      </div>
    </>
  );
};

export default App;
