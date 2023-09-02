/* eslint-disable react/prop-types */
import '../styles/overlay.css'

const Overlay = ({ children, comp, closeNav}) => {

  return (
    <div className={`overlay`} onClick={closeNav}>
      <div className={`overlay__content ${comp}`}>
        {children}
      </div>
    </div>
  );
};

export default Overlay;
