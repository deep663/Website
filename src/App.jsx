import AboutUs from "./components/AboutUs";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonial";
import '@fortawesome/fontawesome-free/css/all.min.css'; 

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Services />
      <AboutUs/>
      <Testimonials />
      <CallToAction/>
      <Footer />
    </div>
  );
}

export default App;
