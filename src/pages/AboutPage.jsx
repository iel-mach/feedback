import { Link } from "react-router-dom";
import Card from "../shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for product or service</p>
        <p>version 1.0.0</p>
        <p>
          <Link to="/">Back To Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
