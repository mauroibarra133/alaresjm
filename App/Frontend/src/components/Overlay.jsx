/* eslint-disable react/prop-types */
import '../styles/overlay.css'
import { useEffect } from 'react';

const Overlay = ({ children, comp, closeNav, showOverlay}) => {
  useEffect(() => {
    if (showOverlay) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Limpia el efecto al desmontar el componente
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [comp]);

  return (
    <div className={`overlay ${comp}`} onClick={closeNav}>
      <div className={`overlay__content ${comp}`}>
        {children}
      </div>
    </div>
  );
};

export default Overlay;
