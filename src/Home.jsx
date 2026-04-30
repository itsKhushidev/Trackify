import Navbar from "./Navbar";
import Hero from "./Hero";
import Feature from "./Feature";
import Benefits from "./Benefits";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

function Home() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Feature />
      <Benefits />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;