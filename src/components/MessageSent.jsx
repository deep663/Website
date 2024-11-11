import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

const MessageSent = ({onClose}) => {
  return (
    <div className="bg-black text-white bg-opacity-90 fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-3xl p-6 md:p-8 w-full max-w-xs md:max-w-xl mx-auto text-center relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
        >
          <FaTimes />
        </button>
        <div className="text-6xl text-cyan-500 mb-4">
          <i className="fa-regular fa-circle-check text-8xl"></i>
        </div>
        <h1 className="text-3xl font-bold text-cyan-500 mb-2">Message Sent!</h1>
        <p className="text-lg">
          We will inform you about the details of the meeting via your{" "}
          <span className="font-bold">Email</span> or{" "}
          <span className="font-bold">Phone Number</span>.
        </p>
      </div>
    </div>
  );
};

MessageSent.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default MessageSent;
