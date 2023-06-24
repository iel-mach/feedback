import { FaTimes } from "react-icons/fa";
import PropType from "prop-types";
import Card from "../shared/Card";

function FeedbackItem({ item, handlDelete }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handlDelete(item.id) } className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propType = {
  item: PropType.object.isRequired,
};

export default FeedbackItem;
