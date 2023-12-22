import "./ReviewStyle.css";

function Reviewdata(props) {
  return (
    <div className="r-card">
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default Reviewdata;
