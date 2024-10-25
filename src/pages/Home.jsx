import AboutUs from "../components/AboutUs";
import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonial";
function Home() {
    return (
        <div className="font-sans">
            <Hero />
            <Services />
            <AboutUs />
            <Testimonials />
            <CallToAction />
        </div>
    );
}

export default Home;