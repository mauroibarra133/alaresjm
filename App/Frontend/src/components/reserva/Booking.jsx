/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import {convertHourToDate, calculateLeftTime} from '../../utils/functions'
import {deleteReserva} from '../../services/reservas.services'
import userImg from '../../assets/images/header-user.webp'
import pencilImg from '../../assets/images/pencil-solid.svg'
import cruzImg from '../../assets/images/xmark-solid.svg'
import '../../styles/reserva/mis-reservas.css'
import Modal from '../Modal'
import ModalModificar from './ModalModificar'
import Overlay from '../Overlay'
import goodStatus from '../../assets/images/comprobado.png'
import waitStatus from '../../assets/images/procesando.png'
import badStatus from '../../assets/images/cancelar.png'

const statusReservas = [
  {
    status: "A Confirmar",
    img: waitStatus
  },
  {
    status: "Reservado",
    img: goodStatus
  },
  {
    status: "Cancelado",
    img: badStatus
  }
];

function Booking({booking, fechaHoy: todayDate}) { // fechaHoy: YYYY-MM-DD
  //Constants
  const dateBooking = new Date(booking.fecha).toISOString().split('T')[0]
  const tiempoParaCancelar = 1 //En horas

  //states
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);  
  const [showModal, setShowModal] = useState(
    {
      isClicked: false,
      isGood: false,
      msg: ''
    }
  )

  const [showModalUpdate, setShowModalUpdate] = useState(false);

  //Functions
  function getStatusImage(status) {
    const bookingStatus = statusReservas.find(item => item.estado === status);
    if (bookingStatus) {
      return bookingStatus.img;
    }
    // Si el estado no se encuentra en statusReservas, devolvemos null o alguna imagen por defecto
    return null;
  }
  function closeModal(){
      setShowModal({
        isClicked: false,
        isGood: false,
      })
    }
  function closeUpdateModal(){
      setShowModalUpdate(false)
    }
    function openModal(estado,msg){
      setShowModal({
        isClicked: true,
        isGood: estado,
        msg: msg 
      })
    }
    async function handleDelete(){
      if( dateBooking<= todayDate){
        const bookingHour = convertHourToDate(booking.hora)
        const leftHour = calculateLeftTime(bookingHour)
        if(leftHour >= tiempoParaCancelar){
          console.log('Se puede modificar');
          const response = await deleteReserva(booking.id)
          if(response.status == 200){
            openModal(true, "Reserva cancelada correctamente")
            
          }else{
            openModal(false, "Hubo un error al eliminar su reserva, intente mas tarde")
          }
        }else{
          console.log("Es muy tarde");
          openModal(false, `No se puede cancelar la reserva faltando menos de ${tiempoParaCancelar} hora/s`)
        }
      }
    }  
    async function handleUpdate(){
      if( dateBooking<= todayDate){
        const bookingHour = convertHourToDate(booking.hora)
        const leftHour = calculateLeftTime(bookingHour)
        if(leftHour >= tiempoParaCancelar){
          console.log('Se puede modificar');
          setShowModalUpdate(true)
        }else{
          console.log("Es muy tarde");
          openModal(false, `No se puede modificar la reserva faltando menos de ${tiempoParaCancelar} hora/s`)
        }
      }
    }
    const formattedDate = `${dateBooking.substring(8, 10)}/${dateBooking.substring(5, 7)}`;

    useEffect(() => {
      const handleResize = () => {
        setIsLargeScreen(window.innerWidth > 768);
      };
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return ( 

        <div className="datos__body-row" key={booking.id}>
        <div className="datos__body-dato">{formattedDate}</div>
        <div className="datos__body-dato">{booking.hora}</div>
        <div className="datos__body-dato datos__body-comensales">
          <img src={userImg} className="user-icon" alt="" />
          {booking.cantidad_personas}
        </div>
        <div className="datos__body-dato">{booking.lugar}</div>
        <div className="datos__body-dato">
          <img src={getStatusImage()} alt="" className='status-img'/>
          {isLargeScreen && (
            <p>{booking.estado}</p>
          )}
          
        </div>
        <div className="datos__body-dato acciones">
            <img src={pencilImg} alt="" className={dateBooking < todayDate? 'old' : 'new'} onClick={()=>handleUpdate()}/>
            <img src={cruzImg} alt="" className={dateBooking < todayDate ? 'old' : 'new'} onClick={()=>handleDelete()}/>
        </div>
  <Modal isSubmitted={showModal.isClicked} isGoodStatus={showModal.isGood} handleSubmit={closeModal} msg={showModal.msg} position={'top'}></Modal>
  {
    showModalUpdate && (  
    <Overlay comp={'reserva'}>
      <ModalModificar showModalUpdate={showModalUpdate} reserva={booking} handleCloseModalUpdate={closeUpdateModal}></ModalModificar>
    </Overlay>)
  }

      </div>
     );
}

export default Booking;