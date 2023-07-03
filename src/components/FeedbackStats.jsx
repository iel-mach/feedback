import { useContext } from "react";
import FeedbackContex from "../context/FeedbackContex";
function FeedbackStats() {
  const { feedback } = useContext(FeedbackContex);
  let avrage =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  avrage = avrage.toFixed(1).replace(/[.,]0$/, "");
  return (
    // calcul avrage

    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Avrage Rating: {isNaN(avrage) ? 0 : avrage}</h4>
    </div>
  );
}

export default FeedbackStats;
