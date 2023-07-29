import { useState, useEffect } from "react";
import {getDudas} from '../../services/dudas.services'
import { getStatusImage } from "../../utils/functions";
import '../../styles/dashboard/veritems.css'
import VerDudasVacio from '../FormVacio'
import Overlay from "../Overlay";
import Duda from "./Duda";
import eyeImg from '../../assets/images/eye-slash.svg'

function VerDudas() {
    const [dudas,setDudas] = useState([]);
    // const [isFilterActive,setIsFilterActive] = useState(false)
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);  
    const [isFilterActive, setIsFilterActive] = useState(true)
    const [modalDuda, setModalDuda] = useState({
        isSubmitted: false,
        reserva: {}
    });  
    console.log(dudas);

    useEffect(()=>{
        async function traerDudas(){
            const result = await getDudas()
            if(result.length > 0){
                setDudas(result)
            }
        }
        traerDudas()
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

    function filterDudas(dudas){
        if(!isFilterActive){
            return dudas
        }
        return dudas.filter(duda => duda.estado != 'Respondido')

    }
    async function traerDudas(){
        const result = await getDudas()
        if(result.status == 200){
            setDudas((result.data.data))
        }
    }


    function openModalDuda(duda){
        setModalDuda({
            isSubmitted:true,
            duda: duda
        });
        document.body.classList.add('disable-scroll');
    }
    function closeModalDuda(){
        setModalDuda({
            isSubmitted:false,
            duda: {}
        });
        document.body.classList.remove('disable-scroll');

        traerDudas()
        
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
                    {filterDudas(dudas).length <= 0 ? <VerDudasVacio msg={'No hay dudas el dia de hoy'} msgButton={':('}/> : filterDudas(dudas).map(duda => (

                        <div key={duda.id} className="veritems__row verdudas__row" onClick={()=>  openModalDuda(duda)} style={{gridTemplateColumns: 'repeat(2,1fr)'}}>
                            <div className="veritems__dato verdudas__dato"><p>{duda.duda}</p></div>
                            <div className="veritems__dato verdudas__dato ">
                                <img src={getStatusImage(duda.estado)} alt="" className="status-img reserva-status-img" />
                                {isLargeScreen && (
                                    <p>{duda.estado}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {modalDuda.isSubmitted && (
                <Overlay comp={'verreservas'}>
                        <Duda modalDuda={modalDuda} closeModal={closeModalDuda}></Duda>
                </Overlay>
                    )}
        </div>
     );
}

export default VerDudas;