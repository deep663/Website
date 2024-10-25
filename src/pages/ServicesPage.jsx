import Services from "../components/Services"

function ServicesPage() {
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
                    <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-8">
                        Services
                    </h1>
                </div>
            </div>
            <Services />
            <div className="bg-black text-white">
                <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
                    <div className="text-center sm:text-left flex flex-col justify-start">
                        <p className="text-cyan-500 uppercase tracking-wide font-semibold text-sm sm:text-base">
                            Process
                        </p>
                        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl leading-8 font-extrabold tracking-tight text-white">
                            How to solve the problem?
                        </h2>
                        <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl font-semibold text-gray-400 lg:mx-auto">
                            Our team takes multiple steps in completing the complexities of our clients.
                        </p>
                    </div>
                    <div className="mt-8 sm:mt-10">
                        <dl className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                            {[
                                {
                                    number: "01",
                                    title: "Research",
                                    description: "We research client problems by analyzing their brand, audience, competitors, and market trends. We use data insights to identify challenges and craft solutions that drive results.",
                                },
                                {
                                    number: "02",
                                    title: "Analysis",
                                    description: "Our analysis focuses on tracking performance metrics, audience behavior, and competitor strategies. We use data to assess the effectiveness of campaigns and refine our approach to ensure optimal results.",
                                },
                                {
                                    number: "03",
                                    title: "Solution",
                                    description: "We develop solutions by combining data insights, creative strategies, and market trends. Each solution is tailored to the client's goals, ensuring impactful and measurable outcomes.",
                                },
                            ].map((step, index) => (
                                <div key={index} className="relative p-4 rounded-lg transition-transform transform hover:scale-105 bg-gray-800">
                                    <dt>
                                        <p className="text-4xl sm:text-5xl font-extrabold text-white text-left">{step.number}</p>
                                        <div className="mt-2 border-t border-gray-600"></div>
                                        <p className="mt-4 text-lg sm:text-xl leading-6 font-medium text-white text-left">
                                            {step.title}
                                        </p>
                                    </dt>
                                    <dd className="mt-2 text-sm sm:text-base text-gray-400 text-left">
                                        {step.description}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesPage
