const Projects = () => {
  const projects = [
    {
      id: 1,
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/ir4NOxqAlGbIG9YrPiFffohmRbakJy6MJh7uzYPCfp9wHBgnA.jpg",
      alt: "Website design project 1",
      likes: 432,
      views: "2.9k",
    },
    {
      id: 2,
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/KFGfYLDR3PyKZiJBefzSiQKPsdRI0pr009Uvst6vbOEtHBgnA.jpg",
      alt: "Website design project 2",
      likes: 432,
      views: "2.9k",
    },
    {
      id: 3,
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/WceADN0wrEQIcCbWKS99nYIeFRcFpcJvyohn07zFU0E6jAwTA.jpg",
      alt: "Website design project 3",
      likes: 432,
      views: "2.9k",
    },
    {
      id: 4,
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/l1kQLQysYEbXER3DeeZkWfzcLyy8RB6ekPedMeG1dd2f9RA4JA.jpg",
      alt: "Website design project 4",
      likes: 432,
      views: "2.9k",
    },
  ];

  return (
    <div className="bg-black text-white mt-10">
      <div className="container mx-auto p-4 md:p-8">
        <div className="text-left mb-2 px-8 md:px-16 py-4 bg-gray-800 ">
          <h1 className="text-3xl md:text-4xl font-bold">Our Projects</h1>
          <p className="text-base md:text-lg mt-2">
            With experienced experts and team, we build complete projects of
            every specific field.
          </p>
          <p className="text-base md:text-lg text-blue-500 mt-2">
            100% Professional work
          </p>
        </div>
        <div className="w-full px-4 md:px-16">
          <div className="relative top-10 flex justify-center ">
            <div className="bg-gray-800 p-3 md:p-4 rounded-full">
              <i className="fas fa-plus text-xl md:text-4xl"></i>
            </div>
          </div>
          <div className="text-center mb-6 md:mb-8">
            <button className="bg-gray-800 text-white pt-8 py-3 px-6 w-full text-base md:text-3xl font-bold">
              Add projects
            </button>
          </div>
        </div>
        <div className="px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-800 rounded-lg">
                <img
                  alt={project.alt}
                  className="rounded-lg mb-2 w-full h-auto"
                  src={project.imgSrc}
                />
                <div className="flex justify-between items-center p-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <i className="fas fa-thumbs-up"></i>
                      <span>{project.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <i className="fas fa-eye"></i>
                      <span>{project.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <i className="fas fa-bookmark"></i>
                      {/* <span>Save</span> */}
                    </div>
                  </div>
                  <button className="border-2 border-cyan-500 text-white py-1 px-4 rounded-full">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
