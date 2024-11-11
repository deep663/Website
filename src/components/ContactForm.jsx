import { useState } from "react";
import MessageSent from "./MessageSent";

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function validateForm() {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    if (!formData.date.trim()) newErrors.date = "Date is required.";
    if (!formData.time.trim()) newErrors.time = "Time is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data Submitted:", formData);
      setIsSubmitted(true);
    }
  }

  const toggleMessageSent = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      <div className="bg-black text-white flex items-center justify-center min-h-screen">
        <div className="w-full max-w-2xl mt-12 p-6 md:p-8 space-y-6">
          <h2 className="text-xl md:text-2xl font-bold">
            Want to estimate a project?
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Fill the below details and we&apos;ll have a meeting with you.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block mb-1 text-sm md:text-base">Name</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <i className="fas fa-user text-gray-400"></i>
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 bg-black border border-gray-600 rounded-md focus:outline-none focus:border-cyan-500 text-sm md:text-base"
                />
              </div>
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            {/* Email Field */}
            <div>
              <label className="block mb-1 text-sm md:text-base">Email</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <i className="fas fa-envelope text-gray-400"></i>
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 bg-black border border-gray-600 rounded-md focus:outline-none focus:border-cyan-500 text-sm md:text-base"
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            {/* Phone Number Field */}
            <div>
              <label className="block mb-1 text-sm md:text-base">Phone Number</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <i className="fas fa-phone text-gray-400"></i>
                </span>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 bg-black border border-gray-600 rounded-md focus:outline-none focus:border-cyan-500 text-sm md:text-base"
                />
              </div>
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
            {/* Date Field */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full sm:w-1/2">
                <label className="block mb-1 text-sm md:text-base">Date</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <i className="fas fa-calendar text-gray-400"></i>
                  </span>
                  <input
                    type="text"
                    name="date"
                    placeholder="DD/MM/YYYY"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 bg-black border border-gray-600 rounded-md focus:outline-none focus:border-cyan-500 text-sm md:text-base"
                  />
                </div>
                {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
              </div>
              {/* Time Field */}
              <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                <label className="block mb-1 text-sm md:text-base">Time of the meeting</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <i className="fas fa-hourglass-half text-gray-400"></i>
                  </span>
                  <input
                    type="text"
                    name="time"
                    placeholder="Set time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 bg-black border border-gray-600 rounded-md focus:outline-none focus:border-cyan-500 text-sm md:text-base"
                  />
                </div>
                {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
              </div>
            </div>
            {/* Message Field */}
            <div>
              <label className="block mb-1 text-sm md:text-base">Message</label>
              <textarea
                name="message"
                placeholder="Description about the service you want from us."
                value={formData.message}
                onChange={handleChange}
                className="w-full pl-4 pr-4 py-2 bg-black border border-gray-600 rounded-md focus:outline-none focus:border-cyan-500 h-24 md:h-32 text-sm md:text-base"
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-700 focus:outline-none text-sm md:text-base"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      {isSubmitted && <MessageSent onClose={toggleMessageSent} />}
    </>
  );
}

export default ContactForm;
