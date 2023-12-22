import Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1462536943532-57a629f6cc60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVkdWNhdGlvbiUyMHRvJTIwYmVjb21lJTIwYSUyMGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"
        title="Your Learning Quest"
        text="Unlock Learning with KaroAbhyas!"
        buttonText="Get Started Now!"
        url="/"
        btnClass="show"
      />
    </>
  );
}

export default Home;
