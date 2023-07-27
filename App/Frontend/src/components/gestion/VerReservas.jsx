import { useState, useEffect } from "react";
import {getReservas} from '../../services/reservas.services'
import { getStatusImage } from "../../utils/functions";

function VerReservas() {
    const [reservas,setReservas] = useState([]);
    const hoy = new Date()
    const fechaHoy = hoy.toISOString().split('T')[0]
    const mañana = new Date()
    mañana.setDate(mañana.getDate() + 1);
    const fechaMañana = mañana.toISOString().split('T')[0];
    const [filterFecha,setFilterFecha] = useState(fechaHoy);
    const [isFilterActive,setIsFilterActive] = useState(false)
    console.log(reservas);

    useEffect(()=>{
        async function traerReservas(){
            const result = await getReservas({date: filterFecha})
            if(result.status == 200){
                setReservas(filterReservas(result.data.data))
            }
        }
        traerReservas()
    },[filterFecha])
    
    function filterReservas(reservas){
        if(!isFilterActive){
            return reservas
        }

    }
    function handleDate(data){
        setFilterFecha(data.target.value)
    }
    return ( 
        <div className="verreservas">
            <div className="verreservas__fechas filtro__fechas">
                <div className="verreservas__fecha-ayer button filtro__fechas-button" onClick={()=> setFilterFecha(fechaHoy)}>Hoy</div>
                <input className="verreservas__fecha-input" type="date" onChange={handleDate} value={filterFecha}></input>
                <div className="verreservas__fecha-hoy button filtro__fechas-button" onClick={()=> setFilterFecha(fechaMañana)}>Mañana</div>
            </div>
            <div className="verreservas__filters">
        <p onClick={()=> setIsFilterActive(!isFilterActive)}>Ocultar antiguos</p>
            </div>
            <div className="verreservas__reservas ver-lista">
                <div className="verreservas__header ver-lista__header" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
                    <div className="verreservas__header-column">Hora</div>
                    <div className="verreservas__header-column">Cant.</div>
                    <div className="verreservas__header-column">Cliente</div>
                    <div className="verreservas__header-column">Lugar</div>
                    <div className="verreservas__header-column">Estado</div>
                </div>
                <div className="verreservas__body ver-lista__body">
                    {filterReservas(reservas).length > 0 && filterReservas(reservas).map(reserva => (

                        <div key={reserva.id} className="verpedidos__body-row" style={{gridTemplateColumns: 'repeat(5,1fr)'}}>
                            <div className="">{reserva.hora}</div>
                            <div className="">{reserva.cantidad_personas}</div>
                            <div className="">{reserva.cliente_reserva}</div>
                            <div className="">{reserva.lugar}</div>
                            <div className="">
                                <img src={getStatusImage('A confirmar')} alt="" className="status-img" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}

export default VerReservas;