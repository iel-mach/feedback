import PropType from 'prop-types'
import FeedbackItem from "./FeedbackItem";
import React from "react";

function FeedbackList({feedback}) {
  if (!feedback || feedback.length === 0) return <p>No Feedback yet</p>;
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}


FeedbackList.propType = {
  feedback : PropType.arrayOf(
    PropType.shape({
      id : PropType.number.isRequired,
      rating : PropType.number.isRequired,
      text : PropType.string.isRequired,
    })
  )
}

export default FeedbackList;
