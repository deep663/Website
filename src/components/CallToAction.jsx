import { useNavigate } from "react-router-dom";

const CallToAction = () => {
    const navigate = useNavigate();
    return (
        <div id="contact" className="bg-black flex items-center justify-center min-h-fit p-4">
            <div className="bg-gray-800 text-center rounded-lg p-8 sm:p-10 my-16 max-w-4xl w-full">
                <h1 className="text-white text-3xl sm:text-3xl font-bold mb-4">Take the next step.</h1>
                <p className="text-white text-3xl sm:text-2xl mb-6">Let’s give your project a go.</p>
                <div className="flex justify-center">
                    <button onClick={() => navigate("/contact")} className="bg-cyan-500 text-white text-sm py-4 px-6 rounded-full hover:bg-cyan-600 transition duration-300 flex items-center justify-center">
                        CONTACT US <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
