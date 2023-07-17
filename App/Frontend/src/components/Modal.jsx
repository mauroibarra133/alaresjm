import '../styles/modal.css'

// eslint-disable-next-line react/prop-types
function Modal({isSubmitted, handleSubmit, msg, isGoodStatus, position}) {
    return ( 
        <>
        {isSubmitted &&
        
        <div className={`modal__container ${position == "top" ? "top" : ""}`}>
        <div className="modal">
            <div className={`modal__top ${isGoodStatus ? "good" : "bad"}`}>
            </div>
            <div className="modal__body">
                <div className="modal__msg">
                    <p>{msg}</p>
                </div>
                <button className={`modal__button ${isGoodStatus ? "good" : "bad"}`} onClick={()=>handleSubmit({
                    [isSubmitted]: false,
                    [isGoodStatus]: false
                })}>Aceptar</button>
            </div>
            </div>
        </div>
        
        }
        </>

     );
}

export default Modal;