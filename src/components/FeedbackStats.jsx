import PropType from "prop-types";
function FeedbackStats({ feedback }) {
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

FeedbackStats.propType = {
  feedback: PropType.array.isRequired,
};

export default FeedbackStats;
