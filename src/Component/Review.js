import "./ReviewStyle.css";
import Reviewdata from "./Reviewdata";

function Review() {
  return (
    <div className="Review">
      <h1>Reviews</h1>
      <div className="Reviewcard">
        <Reviewdata
          heading="Tanishka Sharma"
          text="Karo Abhyaas made my NEET preparation efficient and effective! The interactive study materials and mock tests were incredibly helpful. The personalized guidance from experienced mentors boosted my confidence. Thanks to Karo Abhyaas, I feel well-prepared for NEET!"
        />

        <Reviewdata
          heading="Kaustav Bauri "
          text="Karo Abhyaas is a fantastic platform for NEET aspirants. The study modules were easy to grasp, and the practice questions closely resembled the NEET exam pattern. The doubt-clearing sessions were prompt and clarified my concepts perfectly."
        />

        <Reviewdata
          heading="Pranjal Aggarwal"
          text="I can't thank Karo Abhyaas enough for their comprehensive study resources! The video lectures were engaging, and the self-assessment tools were invaluable. The mock exams simulated the real NEET scenario, preparing me thoroughly. Highly recommended!"
        />

        <Reviewdata
          heading="Rishi Balse"
          text="Karo Abhyaas exceeded my expectations! The user-friendly interface and mobile app made studying hassle-free. The regular assessments and progress tracking features helped me stay on top of my preparation. Kudos to the Karo Abhyaas team for their dedication!"
        />
      </div>
    </div>
  );
}

export default Review;
