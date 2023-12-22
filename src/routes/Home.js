import Destination from "../Component/Destination";
import Footer from "../Component/Footer";
import Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";
import Review from "../Component/Review";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://media.istockphoto.com/id/1406839624/photo/medical-stethoscope-with-clipboard-on-wooden-desk-healthcare-or-medical-concept.jpg?s=612x612&w=0&k=20&c=Jv66LaljT-Vu8-5fWe1SdWdm1C5axH6sxLSHuZNDezQ="
        title="Your Learning Quest"
        text="Unlock Learning with KaroAbhyas!"
        buttonText="Get Started Now!"
        url="/"
        btnClass="show"
      />
      <Destination />

      <Review />

      <Footer />
    </>
  );
}

export default Home;
