/* eslint-disable react/prop-types */
import '../styles/overlay.css'

const Overlay = ({ children, comp}) => {
  return (
    <div className="overlay">
      <div className={`overlay__content ${comp}`}>
        {children}
      </div>
    </div>
  );
};

export default Overlay;
