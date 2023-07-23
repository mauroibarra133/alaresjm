import Path from '../Path'
import '../../styles/reserva/mis-reservas.css'
import eyeImg from '../../assets/images/eye-slash.svg'
import {  useEffect, useState } from 'react';
import {useAuth} from '../../hooks/useAuth'
import {getReservas} from '../../services/reservas.services'
import MisReservasVacio from '../FormVacio';
import Reserva from './Reserva';

// import flashImg from '../../assets/images/bolt-solid.svg'
// import lupaImg from '../../assets/images/magnifying-glass-solid.svg'

function MisReservas() {
    const {auth} = useAuth()
    // const [date,setDate] = useState(new Date().toISOString().split('T')[0])
    const [reservas,setReservas] = useState();
    const [isFilterActive, setFilterActive] = useState(false);

    // async function handleDate(){
    //     const hoy = new Date().toISOString().split('T')[0];
    //     setDate(hoy);
    //     const response = await searchReservas()
    //     console.log(response);
    // }

    useEffect(()=>{
        async function searchReservas(){
            if(auth.data.user_id){
                const response = await getReservas(auth.data.user_id)
                return response.data
            }
        }

        searchReservas().then(data => setReservas(data.data))
    },[auth.data.user_id])


    function handleReservas() {
        const fechaHoy = new Date().toISOString().split('T')[0]
        //Si no tenemos reservas
        if(!reservas){
            return <MisReservasVacio msg={"Aun no tienes ninguna reserva hoy"} msgButton={"RESERVAR"} goTo={'reservas'}></MisReservasVacio>

        }
        //Si hay filtro
        if (isFilterActive) {
            const filterReservas = reservas.filter(reserva => {
                if(new Date(reserva.fecha).toISOString().split('T')[0] >= fechaHoy){
                    return reserva
                }
            })
            //Si no hay reservas en el dia de hoy
            if(filterReservas.length <= 0){
                return <MisReservasVacio></MisReservasVacio>
            }
            //Si hay reservas
            return filterReservas.map(reserva => {
        
                return (
                    <Reserva reserva={reserva}  key={reserva.id} fechaHoy={fechaHoy}/>
                );
          });
        //si el filtro no está activo
        }else{
            if(reservas <= 0){
                return <MisReservasVacio></MisReservasVacio>
            }
            return reservas.map(reserva => {
                const fechaString = reserva.fecha;
                const fecha = new Date(fechaString);
                const fechaLegible = fecha.toLocaleDateString();
          
                return (
                    <Reserva fechaLegible={fechaLegible} reserva={reserva} key={reserva.id} fechaHoy={fechaHoy}/>
                );
              });
        }
    
      }
      
    return ( 
        <div className="misreservas__container">
            <Path pathPrev={'Home'} pathActual={'Mis Reservas'} goTo={'home'}></Path>
            {/* <div className="fecha">
                <div className="fecha__today--container">
                    <img src={flashImg} alt="" />
                <p onClick={handleDate} className='fecha__today'>HOY</p>
                <img src={flashImg} alt="" />
                </div>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                <div className='fecha__buscar'>
                    <button className="button" onClick={searchReservas}>
                        <img src={lupaImg} alt="" />
                    </button>
                </div>
            </div> */}
            <div className="misreservas__form">
            <div className="misreservas__filter" onClick={() => setFilterActive(!isFilterActive)} >
                <img src={eyeImg} alt="Icono de oculto" />
                <p>{!isFilterActive ? "Ocultar reservas antiguas" : "Mostrar reservas antiguas"}</p>
            </div>

                <div className="misreservas__datos">
                    <div className="datos__header">
                        <p className="datos__header-column">Fecha</p>
                        <p className="datos__header-column">Hora</p>
                        <p className="datos__header-column">Comens.</p>
                        <p className="datos__header-column">Lugar</p>
                        <p className="datos__header-column">Estado</p>
                        <p className="datos__header-column">Acciones</p>
                    </div>
                    <div className="datos__body">
                        {(handleReservas())}
                    </div>
                </div>
            </div>
        </div>
     );
}

export default MisReservas;