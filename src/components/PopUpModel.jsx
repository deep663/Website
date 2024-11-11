import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const PopUpCard = ({ onClose, service }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-black bg-opacity-80 fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-3xl p-6 md:p-8 w-full max-w-xs md:max-w-md lg:max-w-md mx-auto text-center relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
        >
          <FaTimes />
        </button>
        <i className={`${service.icon} text-xl md:text-6xl text-cyan-500 mb-4 md:mt-6`}></i>
        <h3 className="text-lg md:text-3xl font-bold mb-2">{service.title}</h3>
        <p className="text-gray-400 text-sm md:text-base">{service.description}</p>
        <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 mt-4">
          <button onClick={() => navigate("/contact")} className="bg-cyan-500 hover:bg-cyan-700 text-white px-4 py-2 rounded-2xl transition-colors md:w-1/2 w-auto">
            Hire Us
          </button>
          <button onClick={() => navigate("/projects")} className="bg-cyan-500 hover:bg-cyan-700 text-white px-4 py-2 rounded-2xl transition-colors md:w-1/2 w-auto">
            Our Projects
          </button>
        </div>
      </div>
    </div>
  );
};

PopUpCard.propTypes = {
  onClose: PropTypes.func.isRequired,
  service: PropTypes.object.isRequired,
};

export default PopUpCard;
