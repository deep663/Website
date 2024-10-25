import AboutUs from "../components/AboutUs";
import CallToAction from "../components/CallToAction";


const About = () => {
    return (
        <>
            <div className="text-white h-screen relative flex items-center justify-center bg-transparent ">
                <video
                    src="video1.webm"
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay "
                />
                <div className="relative z-10 text-center max-w-4xl px-4">
                    <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-8">
                        About Us
                    </h1>
                </div>
            </div>
            <div className="bg-black text-white">
                <div className="container mx-auto px-4 py-20">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div className="md:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-semibold mb-4">
                                Binyte is a service-based agency, offering you core end-to-end services
                            </h1>
                        </div>
                        <div className="md:w-1/2 mt-8 flex md:justify-end md:mt-0">
                            <div className="text-left w-2/3">
                                <p className="text-gray-400 text-lg">
                                    At our social media agency, we handle everything from strategy and content creation to ads and community management, and many more.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center mt-20">
                        <div className="text-center md:text-left mb-8 md:mb-0">
                            <p className="text-6xl text-blue-500 font-bold transition duration-300 transform hover:scale-105">99%</p>
                            <p className="text-gray-400 text-lg">Work rate</p>
                        </div>
                        <div className="text-center md:text-left mb-8 md:mb-0">
                            <p className="text-6xl text-blue-500 font-bold transition duration-300 transform hover:scale-105">10+</p>
                            <p className="text-gray-400 text-lg">Team Members</p>
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-6xl text-blue-500 font-bold transition duration-300 transform hover:scale-105">20+</p>
                            <p className="text-gray-400 text-lg">Projects</p>
                        </div>
                    </div>
                </div>
            </div>
            <AboutUs />
            <CallToAction />
        </>
    );
};

export default About;
