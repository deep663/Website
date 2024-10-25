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
                    <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-8">
                        Services
                    </h1>
                </div>
            </div>
            <Services/>
            <div className="bg-black text-white">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="text-center flex justify-start">
                        <p className="text-cyan-500 text-left uppercase tracking-wide font-semibold">Process</p>
                        <h2 className="mt-2 text-3xl text-left leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                            How to solve the problem?
                        </h2>
                        <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
                            Our team takes multiple steps in completing the complexities of our clients.
                        </p>
                    </div>
                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
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
                                <div key={index} className="relative transition-transform transform hover:scale-105">
                                    <dt>
                                        <p className="text-5xl font-extrabold text-white">{step.number}</p>
                                        <div className="mt-2 border-t border-gray-600"></div>
                                        <p className="mt-4 text-lg leading-6 font-medium text-white">{step.title}</p>
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-400">
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