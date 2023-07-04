import Gif from "../components/assets/spinner.gif";

function Spinner() {
  return (
    <img
      src={Gif}
      alt="Loading..."
      style={{ width: "100px", margin: "auto", display: "block" }}
    />
  );
}

export default Spinner;
