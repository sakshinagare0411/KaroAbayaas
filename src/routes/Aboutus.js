import Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";
import AboutImg from "../assets/p1.jpeg";

function Aboutus() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="About"
        btnClass="hide"
      />
    </>
  );
}

export default Aboutus;
