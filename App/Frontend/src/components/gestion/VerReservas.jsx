import '../../styles/dashboard/veritems.css'
import { useState, useEffect } from "react";
import {getBookings} from '../../services/reservas.services'
import { getStatusImage } from "../../utils/functions";
import VerReservasVacio from '../FormVacio'
import Overlay from "../Overlay";
import Reserva from "./Reserva";
import eyeImg from '../../assets/images/eye-slash.svg'
import Modal from "../Modal";
import LoaderComponent from '../menu/LoaderComponent'

function VerReservas() {
    //Constants
    const today = new Date()
    const todayDate = today.toISOString().split('T')[0]
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDate = tomorrow.toISOString().split('T')[0];

    //States
    const [bookings,setBookings] = useState([]);
    const [filterDate,setFilterDate] = useState(todayDate);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);  
    const [isFilterActive, setIsFilterActive] = useState(false)
    const [loading,setLoading] = useState(true);
    const [modalBooking, setModalBooking] = useState({
        isSubmitted: false,
        booking: {}
    });  
    const [showModal,setShowModal] = useState({
        isSubmitted: false,
        isGood: false,
        msg: ""
    });
    //Use Effects
    useEffect(()=>{
        async function searchBookings(){
            try {
            const result = await getBookings({date: filterDate})
            setLoading(false)
            setBookings((result.data.data))
                
            } catch (error) {
            setLoading(false)
                setShowModal({
                    isSubmitted: true,
                    isGood: false,
                    msg: error.message
                })
            }
        }
        searchBookings()
    },[filterDate])

    useEffect(() => {
        const handleResize = () => {
          setIsLargeScreen(window.innerWidth > 768);
        };
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    
    //functions 
    function filterBookings(bookings){
        if(!isFilterActive){
            return bookings
        }
        return bookings.filter(booking => booking.estado != 'Reservado')

    }
    async function searchBookings(){
        const result = await getBookings({date: filterDate})
        if(result.status == 200){
            setBookings((result.data.data))
        }
    }

    function handleDate(data){
        setFilterDate(data.target.value)
    }

    function openModalBooking(booking){
        setModalBooking({
            isSubmitted:true,
            booking: booking
        });
        document.body.classList.add('disable-scroll');
    }
    function closeModalBooking(){
        setModalBooking({
            isSubmitted:false,
            booking: {}
        });
        document.body.classList.remove('disable-scroll');

        searchBookings()
        
    }
    function closeModal(){
        setShowModal({
            isSubmitted: false,
            isGood: false,
            msg: ""
        });
    }

    return ( 
        <div className="verreservas veritems">
            <div className="verreservas__fechas veritems__fechas">
                <div className="verreservas__fecha-ayer button veritems__fechas-button" onClick={()=> setFilterDate(todayDate)}>Hoy</div>
                <input className="verreservas__fecha-input" type="date" onChange={handleDate} value={filterDate}></input>
                <div className="verreservas__fecha-hoy button veritems__fechas-button" onClick={()=> setFilterDate(tomorrowDate)}>Mañana</div>
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
                    {loading ? (
                        <LoaderComponent size={'minimal'}/>
                    ) : (
                        filterBookings(bookings).length <= 0 ? (
                        <VerReservasVacio msg={'No hay reservas el día de hoy'} msgButton={':('}/>
                        ) : (
                        filterBookings(bookings).map(booking => (
                            <div key={booking.id} className="veritems__row verreservas__row" onClick={() => openModalBooking(booking)} style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
                            <div className="veritems__dato verreservas__dato">{booking.hora}</div>
                            <div className="veritems__dato verreservas__dato">{booking.cantidad_personas}</div>
                            <div className="veritems__dato verreservas__dato">{booking.cliente_reserva}</div>
                            <div className="veritems__dato verreservas__dato">{booking.lugar}</div>
                            <div className="veritems__dato verreservas__dato">
                                <img src={getStatusImage(booking.estado)} alt={booking.estado} className="status-img reserva-status-img" />
                                {isLargeScreen && (
                                <p>{booking.estado}</p>
                                )}
                            </div>
                            </div>
                        ))
                        )
                    )}
                    </div>
            </div>
            {modalBooking.isSubmitted && (
                <Overlay comp={'verreservas'}>
                        <Reserva modalBooking={modalBooking} closeModal={closeModalBooking}></Reserva>
                </Overlay>
                    )}
        <Modal isSubmitted={showModal.isSubmitted} isGoodStatus={showModal.isGood} msg={showModal.msg}
            handleSubmit={closeModal}
        ></Modal>
        </div>
     ); 
}

export default VerReservas;