import "./DestinationStyle.css";
import Destinationdata from "./Destinationdata";
import card1 from "../assets/2.jpg";
import card2 from "../assets/4.jpg";
import card3 from "../assets/5.jpg";
import card4 from "../assets/10.jpeg";

function Destination() {
  return (
    <div className="Destination">
      <h1>Top Student</h1>
      <p>Our Bright Student</p>
      <div className="Destinationcard">
        <Destinationdata
          image={card1}
          heading="Tanishka Sharma"
          text="All-India Rank: 2 (OBC-NCL)
           Number of Attempts: 1
        Board Exam Marks: 98.7%
        Coaching or Self Study: Integrated coaching
        College Preference: AIIMS, Delhi."
        />

        <Destinationdata
          image={card2}
          heading="Kaustav Bauri "
          text="All-India Rank: 3 (SC)
          Number of Attempts: 1
          
          Board Exam Marks: 96%
          Coaching or Self Study: Coaching
          College Preference: AIIMS, Delhi."
        />

        <Destinationdata
          image={card3}
          heading="Pranjal Aggarwal"
          text="All-India Rank: 4 (General)
          Number of Attempts: 1
       
        Board Exam Marks: 96.60%
        Coaching or Self Study: Coaching
        College Preference: AIIMS, Delhi"
        />

        <Destinationdata
          image={card4}
          heading="Rishi Balse "
          text="All-India Rank: 2 (NT)
          Number of Attempts: 1
         
          Board Exam Marks: 93%
          Coaching or Self Study: Coaching
          College Preference: AIIMS, Delhi."
        />
      </div>
    </div>
  );
}

export default Destination;
