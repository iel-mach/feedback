import { motion, AnimatePresence } from "framer-motion";
import PropType from "prop-types";
import FeedbackItem from "./FeedbackItem";
import React from "react";

function FeedbackList({ feedback, handlDelete }) {
  if (!feedback || feedback.length === 0) return <p>No Feedback yet</p>;
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} handlDelete={handlDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} handlDelete={handlDelete} />
  //     ))}
  //   </div>
  // );
}

FeedbackList.propType = {
  feedback: PropType.arrayOf(
    PropType.shape({
      id: PropType.number.isRequired,
      rating: PropType.number.isRequired,
      text: PropType.string.isRequired,
    })
  ),
};

export default FeedbackList;
