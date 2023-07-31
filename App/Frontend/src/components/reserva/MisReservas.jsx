import Path from '../Path'
import eyeImg from '../../assets/images/eye-slash.svg'
import MisReservasVacio from '../FormVacio';
import Booking from './Booking';
import {  useEffect, useState } from 'react';
import {useAuth} from '../../hooks/useAuth'
import {getBookings} from '../../services/reservas.services'
import '../../styles/reserva/mis-reservas.css'


function MisReservas() {

    //Hooks
    const {auth} = useAuth()

    //states
    const [bookings,setBookings] = useState();
    const [isFilterActive, setFilterActive] = useState(true);

    //Use effects
    useEffect(()=>{
        async function searchBookings(){
            if(auth.data.user_id){
                const response = await getBookings({user_id: auth.data.user_id})
                return response.data
            }
        }

        searchBookings().then(data => setBookings(data.data))
    },[auth.data.user_id])


    function handleBookings() {
        const todayDate = new Date().toISOString().split('T')[0]
        //Si no tenemos reservas
        if(bookings === undefined || bookings.length <= 0){
            return <MisReservasVacio msg={"Aun no tienes ninguna reserva hoy"} msgButton={"RESERVAR"} goTo={'reservas'}></MisReservasVacio>

        }
        //Si no hay
        if(!isFilterActive){
            if(bookings.length > 0){
            return bookings.map(booking => {
                const fechaString = booking.fecha;
                const fecha = new Date(fechaString);
                const fechaLegible = fecha.toLocaleDateString();
          
                return (
                    <Booking fechaLegible={fechaLegible} booking={booking} key={booking.id} fechaHoy={todayDate}/>
                );
              });
        }
    }else{
            return <MisReservasVacio msg={"Aun no tienes ninguna reserva hoy"} msgButton={"RESERVAR"} goTo={'reservas'}></MisReservasVacio>
    }
        //Si hay filtro
        if (isFilterActive) {
            const filteredBookings = bookings.filter(booking => {
                if(new Date(booking.fecha).toISOString().split('T')[0] >= todayDate){
                    return booking
                }
            })
            //Si hay reservas
            return filteredBookings.map(booking => {
        
                return (
                    <Booking booking={booking}  key={booking.id} fechaHoy={todayDate}/>
                );
          });
        }
      }
      
    return ( 
        <div className="misreservas__container">
            <Path pathPrev={'Home'} pathActual={'Mis Reservas'} goTo={'home'}></Path>
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
                        {(handleBookings())}
                    </div>
                </div>
            </div>
        </div>
     );
}

export default MisReservas;