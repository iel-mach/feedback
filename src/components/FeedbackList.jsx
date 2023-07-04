import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContex from "../context/FeedbackContex";
import Spinner from "../shared/Spinner";
import React from "react";

function FeedbackList() {
  const { feedback, isloading } = useContext(FeedbackContex);
  if (!isloading && (!feedback || feedback.length === 0))
    return <p>No Feedback yet</p>;
  return isloading ? (
    <Spinner />
  ) : (
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
}

export default FeedbackList;
