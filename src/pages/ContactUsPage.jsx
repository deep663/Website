import ContactForm from "../components/ContactForm";

function ContactUsPage() {
    return (
      <div>
        <div className="text-white h-screen relative flex items-center justify-center bg-transparent">
          <video
            src="video1.webm"
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          />
          <div className="relative z-10 text-center max-w-4xl px-4">
            <h1 className="text-4xl md:text-8xl font-bold mb-4 md:mb-8">
              HIRE US
            </h1>
            <h2 className="text-xl md:text-4xl text-white font-semibold mb-2 md:mb-4">
              Let’s bring your brand to the next level together
            </h2>
            <p className="text-base text-cyan-200 md:text-lg max-w-2xl mx-auto">
              When you hire Binyte, you’re partnering with a team that’s
              passionate about your success. We dive deep to understand your
              vision, craft strategies that fit your goals, and create content
              that resonates with your audience.
            </p>
          </div>
          {/* Scroll Down Message */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <p className="text-cyan-200 text-sm md:text-base text-center mb-2 animate-bounce">
              Scroll down to schedule a meeting, and let’s start planning your brand’s success!
            </p>
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-cyan-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
        <ContactForm/>
      </div>
    );
  }
  
  export default ContactUsPage;
  