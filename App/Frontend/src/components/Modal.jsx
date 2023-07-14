import '../styles/modal.css'

// eslint-disable-next-line react/prop-types
function Modal({isSubmitted, handleSubmit, msg}) {
    return ( 
        <>
        {isSubmitted &&
        
        <div className='modal__container'>
        <div className="modal">
            <div className="modal__top">
            </div>
            <div className="modal__body">
                <div className="modal__msg">
                    <p>{msg}</p>
                </div>
                <button className="modal__button" onClick={()=>handleSubmit(!isSubmitted)}>Aceptar</button>
            </div>
            </div>
        </div>
        
        }
        </>

     );
}

export default Modal;