/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import '../styles/modal.css';

function ModalOption({ handleSubmit, closeModal,msg}) {
  //States

  //Use Effects
  useEffect(() => {
        document.body.style.overflow = 'hidden'
  }, []);

  return (
    <>
        <div
          className={`modal__container`}
          style={{ top: `2rem`,
                    left:0
        }}
        >
          <div className="modal">
            <div className={`modal__top info`}></div>
            <div className="modal__body">
              <div className="modal__msg">
                <p>{msg}</p>
              </div>
        <div className='modal__buttons'>
            <button className={`modal__button bad`} onClick={closeModal}>Cancelar</button>
              <button className={`modal__button info`} onClick={handleSubmit}>Aceptar</button>
        </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default ModalOption;
