/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import '../styles/modal.css';

function Modal({ isSubmitted, handleSubmit, msg, isGoodStatus, position, offset }) {
  //States
  const [modalPosition, setModalPosition] = useState(0);

  //Use Effects
  useEffect(() => {
    document.body.style.overflow= 'hidden'

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setModalPosition(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.body.style.overflow= 'auto'
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isSubmitted && (
        <div
          className={`modal__container`}
          style={{ top: `${ position == "top" ? modalPosition+'px' : (offset || 0)+'px'}`,
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
