import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContex from "../context/FeedbackContex";
import React from "react";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContex);
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
            <FeedbackItem key={item.id} item={item} />
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

export default FeedbackList;
