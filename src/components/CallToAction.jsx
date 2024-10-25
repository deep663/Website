const CallToAction = () => {
    return (
        <div className="bg-black flex items-center justify-center min-h-fit p-4">
            <div className="bg-gray-800 text-center rounded-lg p-8 sm:p-10 my-16">
                <h1 className="text-white text-2xl sm:text-3xl font-bold mb-4">Take the next step.</h1>
                <p className="text-white text-lg sm:text-2xl mb-6">Let’s give your project a go.</p>
                <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 flex items-center justify-center">
                    CONTACT US <i className="fas fa-arrow-right ml-2"></i>
                </button>
            </div>
        </div>
    );
};

export default CallToAction;
