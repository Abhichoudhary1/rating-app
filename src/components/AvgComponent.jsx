import React from "react";

const AvgComponent = ({ feedbacks }) => {
  const avg = feedbacks.reduce((p, c) => {
    return p + c.rating / feedbacks.length;
  }, 0);

  return (
    <div className="my-3 d-flex align-items-center justify-content-between">
      <h6>Total Reviews : {feedbacks.length} </h6>
      <h6>Avg. Rating : {avg.toFixed(1)}</h6>
    </div>
  );
};

export default AvgComponent;
