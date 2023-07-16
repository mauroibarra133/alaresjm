/* eslint-disable react/prop-types */
import '../styles/overlay.css'

const Overlay = ({ children}) => {
  return (
    <div className="overlay">
      <div className="overlay__content">
        {children}
      </div>
    </div>
  );
};

export default Overlay;
