const testimonialsData = [
  {
    name: 'MARK TWAIN',
    role: 'Blinyte User',
    review: '"Blinyte transformed our social media presence! Their creative strategies boosted engagement and brought us a ton of new followers. Highly recommend!"',
  },
  {
    name: 'Alex Deck',
    role: 'Blinyte User',
    review: '"Thanks to Blinyte, our brand\'s online visibility has skyrocketed. Their team is professional, easy to work with, and delivers great results."',
  },
  {
    name: 'Rishi Mehta',
    role: 'Blinyte User',
    review: '"Blinyte\'s content is always fresh and on point. They understand our brand perfectly and have taken our social media to the next level."',
  },
  {
    name: 'Diya Singh',
    role: 'Blinyte User',
    review: '"The team at Blinyte has been amazing in managing our social media. Our community is more active, and we\'ve seen real growth in followers and sales!"',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="text-center py-12 bg-black text-white">
      <h2 className="text-cyan-500 text-sm font-semibold uppercase mb-2">Testimonials</h2>
      <h1 className="text-3xl font-bold mb-4">Client Stories: Voice Of Success</h1>
      <p className="text-gray-400 mb-12">Here are some reviews from our clients:</p>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg max-w-xs flex flex-col items-center">
            {/* Profile Image Placeholder */}
            <div className="w-16 h-16 bg-gray-700 rounded-full mb-4 flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </div>
            {/* Star Ratings */}
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star text-yellow-500"></i>
              ))}
            </div>
            <p className="text-gray-300 mb-4">{testimonial.review}</p>
            <h3 className="font-bold">{testimonial.name}</h3>
            <p className="text-gray-400">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
