import { useEffect, useState } from 'react';
import '../styles/modal.css';

// eslint-disable-next-line react/prop-types
function Modal({ isSubmitted, handleSubmit, msg, isGoodStatus, position }) {
  const [modalPosition, setModalPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setModalPosition(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isSubmitted && (
        <div
          className={`modal__container`}
          style={{ top: `${ position == "top" ? modalPosition+'px' : 0}`,
                    left:0
        }}
        >
          <div className="modal">
            <div className={`modal__top ${isGoodStatus ? 'good' : 'bad'}`}></div>
            <div className="modal__body">
              <div className="modal__msg">
                <p>{msg}</p>
              </div>
              <button
                className={`modal__button ${isGoodStatus ? 'good' : 'bad'}`}
                onClick={handleSubmit}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
