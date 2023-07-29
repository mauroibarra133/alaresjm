import { useState, useEffect } from "react";
import {getReservas} from '../../services/reservas.services'
import { getStatusImage } from "../../utils/functions";
import '../../styles/dashboard/veritems.css'
import VerReservasVacio from '../FormVacio'
import Overlay from "../Overlay";
import Reserva from "./Reserva";
import eyeImg from '../../assets/images/eye-slash.svg'

function VerReservas() {
    const [reservas,setReservas] = useState([]);
    const hoy = new Date()
    const fechaHoy = hoy.toISOString().split('T')[0]
    const mañana = new Date()
    mañana.setDate(mañana.getDate() + 1);
    const fechaMañana = mañana.toISOString().split('T')[0];
    const [filterFecha,setFilterFecha] = useState(fechaHoy);
    // const [isFilterActive,setIsFilterActive] = useState(false)
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);  
    const [isFilterActive, setIsFilterActive] = useState(false)
    const [modalReserva, setModalReserva] = useState({
        isSubmitted: false,
        reserva: {}
    });  
    console.log(reservas);

    useEffect(()=>{
        async function traerReservas(){
            const result = await getReservas({date: filterFecha})
            if(result.status == 200){
                setReservas((result.data.data))
            }
        }
        traerReservas()
    },[filterFecha])

    useEffect(() => {
        const handleResize = () => {
          setIsLargeScreen(window.innerWidth > 768);
        };
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    function filterReservas(reservas){
        if(!isFilterActive){
            return reservas
        }
        return reservas.filter(reserva => reserva.estado != 'Reservado')

    }
    async function traerReservas(){
        const result = await getReservas({date: filterFecha})
        if(result.status == 200){
            setReservas((result.data.data))
        }
    }

    function handleDate(data){
        setFilterFecha(data.target.value)
    }

    function openModalReserva(reserva){
        setModalReserva({
            isSubmitted:true,
            reserva: reserva
        });
        document.body.classList.add('disable-scroll');
    }
    function closeModalReserva(){
        setModalReserva({
            isSubmitted:false,
            pedido: {}
        });
        document.body.classList.remove('disable-scroll');

        traerReservas()
        
    }

    return ( 
        <div className="verreservas veritems">
            <div className="verreservas__fechas veritems__fechas">
                <div className="verreservas__fecha-ayer button veritems__fechas-button" onClick={()=> setFilterFecha(fechaHoy)}>Hoy</div>
                <input className="verreservas__fecha-input" type="date" onChange={handleDate} value={filterFecha}></input>
                <div className="verreservas__fecha-hoy button veritems__fechas-button" onClick={()=> setFilterFecha(fechaMañana)}>Mañana</div>
            </div>
            <div className="verreservas__filters">
            <div className="misreservas__filter" onClick={() => setIsFilterActive(!isFilterActive)} >
                <img src={eyeImg} alt="Icono de oculto" />
                <p>{!isFilterActive ? "Ocultar reservados" : "Mostrar reservados"}</p>
            </div>
            </div>
            <div className="verreservas__reservas veritems__lista">
                <div className="verreservas__header veritems__header" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
                    <div className="veritems__header-column  verreservas__header-column">Hora</div>
                    <div className="veritems__header-column  verreservas__header-column">Cant.</div>
                    <div className="veritems__header-column  verreservas__header-column">Cliente</div>
                    <div className="veritems__header-column  verreservas__header-column">Lugar</div>
                    <div className="veritems__header-column  verreservas__header-column">Estado</div>
                </div>
                <div className="verreservas__body veritems__body">
                    {filterReservas(reservas).length <= 0 ? <VerReservasVacio msg={'No hay reservas el dia de hoy'} msgButton={':('}/> : filterReservas(reservas).map(reserva => (

                        <div key={reserva.id} className="veritems__row verreservas__row" onClick={()=>  openModalReserva(reserva)} style={{gridTemplateColumns: 'repeat(5,1fr)'}}>
                            <div className="veritems__dato verreservas__dato">{reserva.hora}</div>
                            <div className="veritems__dato verreservas__dato">{reserva.cantidad_personas}</div>
                            <div className="veritems__dato verreservas__dato">{reserva.cliente_reserva}</div>
                            <div className="veritems__dato verreservas__dato">{reserva.lugar}</div>
                            <div className="veritems__dato verreservas__dato">
                                <img src={getStatusImage(reserva.estado)} alt="" className="status-img reserva-status-img" />
                                {isLargeScreen && (
                                    <p>{reserva.estado}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {modalReserva.isSubmitted && (
                <Overlay comp={'verreservas'}>
                        <Reserva modalReserva={modalReserva} closeModal={closeModalReserva}></Reserva>
                </Overlay>
                    )}
        </div>
     );
}

export default VerReservas;