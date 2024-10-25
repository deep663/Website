const servicesData = [
  {
    icon: 'fas fa-video',
    title: 'Video Editing',
    description: "We transform raw footage into polished, engaging videos that fit your brand's vision.",
  },
  {
    icon: 'fas fa-code',
    title: 'Web Development',
    description: 'We design custom, responsive websites that elevate your brand and user experience.',
  },
  {
    icon: 'fas fa-paint-brush',
    title: 'Designing',
    description: "We create eye-catching designs that effectively communicate your brand's message and visual identity.",
  },
  {
    icon: 'fas fa-pen-alt',
    title: 'Copywriting',
    description: 'We craft compelling copy that captures attention, engages audiences, for your brand.',
  },
  {
    icon: 'fas fa-lock',
    title: 'AI/ML',
    description: 'We develop AI and machine learning solutions that enhance efficiency, automate processes, and drive innovation for your business.',
  },
  {
    icon: 'fas fa-bullhorn',
    title: 'Branding',
    description: 'We build strong, memorable brands that resonate with your audience and convey your unique identity.',
  },
];

const Services = () => {
  return (
    <div id="services" className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto p-6">
        <div className="text-center mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
            <div className="md:w-2/3 text-left">
              <h2 className="text-cyan-500 text-lg">OUR SERVICES</h2>
              <h1 className="text-3xl md:text-4xl font-bold mt-2">What we do for you?</h1>
            </div>
            <div className="md:w-1/3 mt-4 md:mt-0 text-left">
              <p className="text-gray-400">
                At our social media agency, we handle everything from strategy and content creation to ads and community management and many more.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition duration-300">
              <i className={`${service.icon} text-4xl text-cyan-500 mb-4`}></i>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
