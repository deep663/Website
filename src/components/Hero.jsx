function Hero() {
  return (
    <section className="text-white h-screen relative flex items-center justify-center bg-transparent ">
      <video
        src="src/assets/video1.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay "
      />
      <div className="relative z-10 text-center max-w-4xl px-4">
        <h2 className="text-lg md:text-xl text-blue-300 font-semibold mb-2 md:mb-4">WELCOME TO BINYTE</h2>
        <h1 className="text-3xl md:text-6xl font-semibold mb-4 md:mb-8">
          Multimedia Digital Agency Based in India
        </h1>
        <p className="text-sm md:text-base max-w-lg mx-auto">
          We help brands grow and engage their audience through tailored strategies, creative content, and expert management.
          Let us boost your online presence and drive results.
        </p>
        <button className="bg-blue-400 text-slate-200 text-sm mt-6 py-2 px-6 md:px-8 rounded-full font-semibold hover:bg-gray-600 transition">
          LOG IN
        </button>
      </div>
    </section>
  );
}

export default Hero;
