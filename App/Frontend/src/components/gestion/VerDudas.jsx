import { useState, useEffect } from "react";
import {getDoubts} from '../../services/dudas.services'
import { getStatusImage } from "../../utils/functions";
import VerDudasVacio from '../FormVacio'
import Overlay from "../Overlay";
import Duda from "./Duda";
import Modal from "../Modal";
import eyeImg from '../../assets/images/eye-slash.svg'
import '../../styles/dashboard/veritems.css'
import LoaderComponent from "../LoaderComponent";

function VerDudas() {
    //States
    const [doubts,setDoubts] = useState([]);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);  
    const [isFilterActive, setIsFilterActive] = useState(true)
    const [modalDuda, setModalDuda] = useState({
        isSubmitted: false,
        reserva: {}
    });  
    const [loading,setLoading] = useState(true);
    const [showModal,setShowModal] = useState({
        isSubmitted: false,
        isGood: false,
        msg: ""
    });

    //Use Effects
    useEffect(()=>{
        async function searchDoubts(){
            try {
            const result = await getDoubts()
            if(result.length > 0){
                setLoading(false)
                setDoubts(result)
            }
            } catch (error) {
                setLoading(false)
                setDoubts([])
                setShowModal({
                    isSubmitted: true,
                    isGood: false,
                    msg: error.message
                })
            }

        }
        searchDoubts()
    },[])

    useEffect(() => {
        const handleResize = () => {
          setIsLargeScreen(window.innerWidth > 768);
        };
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    function filterDoubts(dudas){
        if(!isFilterActive){
            return dudas
        }
        return dudas.filter(duda => duda.estado != 'Respondido')

    }
    async function searchDoubts(){
        try {
        const result = await getDoubts()
        if(result.length > 0){
            setDoubts(result)
        }
        } catch (error) {
            console.log(error);
            setDoubts([])
            setShowModal({
                isSubmitted: true,
                isGood: false,
                msg: "Error en la conexion!"
            })
        }

    }

    function openModalDoubt(duda){
        setModalDuda({
            isSubmitted:true,
            duda: duda
        });
        document.body.classList.add('disable-scroll');
    }
    function closeModalDoubt(){
        setModalDuda({
            isSubmitted:false,
            duda: {}
        });
        document.body.classList.remove('disable-scroll');

        searchDoubts()
        
    }
    function closeModal(){
        setShowModal({
            isSubmitted: false,
            isGood: false,
            msg: ""
        });
    }
    return ( 
        <div className="verdudas veritems">
            <div className="verdudas__filters verreservas__filters">
            <div className="misreservas__filter" onClick={() => setIsFilterActive(!isFilterActive)} >
                <img src={eyeImg} alt="Icono de oculto" />
                <p>{!isFilterActive ? "Mostrar respondidos" : "Ocultar respondidos"}</p>
            </div>
            </div>
            <div className="verdudas__reservas veritems__lista">
                <div className="verdudas__header veritems__header" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                    <div className="veritems__header-column  verdudas__header-column">Duda</div>
                    <div className="veritems__header-column  verdudas__header-column">Estado</div>
                </div>
                <div className="verdudas__body veritems__body">
      {loading ? (
        <LoaderComponent size={'small'} color={'blue'}/>
      ) : (
        filterDoubts(doubts).length <= 0 ? (
          <VerDudasVacio msg={'No hay dudas el día de hoy'} msgButton={':('} />
        ) : (
          filterDoubts(doubts).map(duda => (
            <div key={duda.id} className="veritems__row verdudas__row" onClick={() => openModalDoubt(duda)} style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div className="veritems__dato verdudas__dato"><p>{duda.duda}</p></div>
              <div className="veritems__dato verdudas__dato">
                <img src={getStatusImage(duda.estado)} alt={duda.estado} className="status-img reserva-status-img" />
                {isLargeScreen && (
                  <p>{duda.estado}</p>
                )}
              </div>
            </div>
          ))
        )
      )}
    </div>
            </div>
            {modalDuda.isSubmitted && (
                <Overlay comp={'verreservas'}>
                        <Duda modalDuda={modalDuda} closeModal={closeModalDoubt}></Duda>
                </Overlay>
                    )}
        <Modal isSubmitted={showModal.isSubmitted} isGoodStatus={showModal.isGood} msg={showModal.msg}
            handleSubmit={closeModal}
        ></Modal>
        </div>
     );
}

export default VerDudas;