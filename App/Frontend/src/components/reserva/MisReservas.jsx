import Path from '../Path'
import eyeImg from '../../assets/images/eye-slash.svg'
import MisReservasVacio from '../FormVacio';
import Booking from './Booking';
import Modal from '../Modal';
import {  useEffect, useState } from 'react';
import {useAuth} from '../../hooks/useAuth'
import {getBookings} from '../../services/reservas.services'
import '../../styles/reserva/mis-reservas.css'
import { transformDate } from '../../utils/functions';

function MisReservas() {

    //Hooks
    const {auth} = useAuth()

    //states
    const [bookings,setBookings] = useState();
    const [isFilterActive, setFilterActive] = useState(true);
    const [errorStatus, setErrorStatus] = useState({
        isSubmitted: false,
        existError: false,
        msg: ''
})

    //Use effects
    useEffect(()=>{
        async function searchBookings(){
            if(auth.data.user_id){
                const response = await getBookings({user_id: auth.data.user_id})
                return response.data
            }
        }

        searchBookings().then(data => setBookings(data.data)).catch(
            // openModal()
        )
    },[auth.data.user_id])

console.log(bookings);
    function handleBookings() {
        const today = new Date()
        const todayDate = transformDate(today)
        //Si no tenemos reservas
        if(bookings === undefined || bookings.length <= 0){
            return <MisReservasVacio msg={"Aun no tienes ninguna reserva hoy"} msgButton={"RESERVAR"} goTo={'reservas'}></MisReservasVacio>

        }else{
        //Si hay 
        //Si no hay filtro
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
            }else{
                return <MisReservasVacio msg={"Aun no tienes ninguna reserva hoy"} msgButton={"RESERVAR"} goTo={'reservas'}></MisReservasVacio>
            }
        }else{
        //Si hay filtro
            const filteredBookings = bookings.filter(booking => {
                console.log(booking.fecha);
                if(transformDate(booking.fecha) >= transformDate(todayDate)){
                    return booking
                }
            })
            if(filteredBookings.length > 0){
                return filteredBookings.map(booking => {
                    return (
                        <Booking booking={booking}  key={booking.id} fechaHoy={todayDate}/>
                    );
              });
            }else{
                return <MisReservasVacio msg={"Aun no tienes ninguna reserva hoy"} msgButton={"RESERVAR"} goTo={'reservas'}></MisReservasVacio>  
            }

        }
      }
    }

    function handleCloseModal(){
        setErrorStatus({
            isSubmitted: false,
            existError: false,
            msg: ""
        })
        document.body.classList.remove('disable-scroll');
    }
    // function openModal(){
    //     setErrorStatus({
    //         isSubmitted: true,
    //         existError: true,
    //         msg: "Error en el sistema, intentelo mas tarde!"
    //         });
    // }


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
            <Modal isSubmitted={errorStatus.isSubmitted} isGoodStatus={!errorStatus.existError} msg={errorStatus.msg}
            handleSubmit={handleCloseModal}
            ></Modal>
        </div>
     );
}

export default MisReservas;