import { useState, useEffect } from "react";
import {getReservas} from '../../services/reservas.services'
import { getStatusImage } from "../../utils/functions";
import '../../styles/dashboard/verpedidos.css'
import VerReservasVacio from '../FormVacio'
import Overlay from "../Overlay";
import Reserva from "./Reserva";

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

    // function filterReservas(reservas){
    //     if(!isFilterActive){
    //         return reservas
    //     }

    // }
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
        <div className="verreservas">
            <div className="verreservas__fechas filtro__fechas">
                <div className="verreservas__fecha-ayer button filtro__fechas-button" onClick={()=> setFilterFecha(fechaHoy)}>Hoy</div>
                <input className="verreservas__fecha-input" type="date" onChange={handleDate} value={filterFecha}></input>
                <div className="verreservas__fecha-hoy button filtro__fechas-button" onClick={()=> setFilterFecha(fechaMañana)}>Mañana</div>
            </div>
            {/* <div className="verreservas__filters">
        <p onClick={()=> setIsFilterActive(!isFilterActive)}>Ocultar antiguos</p>
            </div> */}
            <div className="verreservas__reservas ver-lista">
                <div className="verreservas__header ver-lista__header" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
                    <div className="verreservas__header-column">Hora</div>
                    <div className="verreservas__header-column">Cant.</div>
                    <div className="verreservas__header-column">Cliente</div>
                    <div className="verreservas__header-column">Lugar</div>
                    <div className="verreservas__header-column">Estado</div>
                </div>
                <div className="verreservas__body ver-lista__body">
                    {reservas.length <= 0 ? <VerReservasVacio msg={'No hay reservas el dia de hoy'} msgButton={':('}/> : reservas.map(reserva => (

                        <div key={reserva.id} className="verreservas__body-row ver-lista__row" onClick={()=>  openModalReserva(reserva)} style={{gridTemplateColumns: 'repeat(5,1fr)'}}>
                            <div className="verreservas__dato ver-lista__dato">{reserva.hora}</div>
                            <div className="verreservas__dato ver-lista__dato">{reserva.cantidad_personas}</div>
                            <div className="verreservas__dato ver-lista__dato">{reserva.cliente_reserva}</div>
                            <div className="verreservas__dato ver-lista__dato">{reserva.lugar}</div>
                            <div className="verreservas__dato ver-lista__dato">
                                <img src={getStatusImage('A confirmar')} alt="" className="status-img" />
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