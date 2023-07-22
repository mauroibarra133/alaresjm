/* eslint-disable react/prop-types */
import { useState } from 'react'
import userImg from '../../assets/images/header-user.svg'
import pencilImg from '../../assets/images/pencil-solid.svg'
import cruzImg from '../../assets/images/xmark-solid.svg'
import '../../styles/reserva/mis-reservas.css'
import {convertirHoraADate, calcularTiempoRestante} from '../../utils/functions'
import Modal from '../Modal'
import {deleteReserva} from '../../services/reservas.services'
function Reserva({reserva, fechaHoy}) { // fechaHoy: YYYY-MM-DD
  const fechaReserva = new Date(reserva.fecha).toISOString().split('T')[0]
  const tiempoParaCancelar = 1
  const [showModal, setShowModal] = useState(
    {
      isClicked: false,
      isGood: false,
      msg: ''
    }
  )
    function closeModal(){
      setShowModal({
        isClicked: false,
        isGood: false,
      })
    }
    function openModal(estado,msg){
      setShowModal({
        isClicked: true,
        isGood: estado,
        msg: msg 
      })
    }
    async function handleDelete(){
      if( fechaReserva<= fechaHoy){
        const horaReserva = convertirHoraADate(reserva.hora)
        const horaRestante = calcularTiempoRestante(horaReserva)
        if(horaRestante >= tiempoParaCancelar){
          console.log('Se puede modificar');
          const response = await deleteReserva(reserva.id)
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
    const fechaFormateada = `${fechaReserva.substring(8, 10)}/${fechaReserva.substring(5, 7)}`;
    return ( 

        <div className="datos__body-row" key={reserva.id}>
        <div className="datos__body-dato">{fechaFormateada}</div>
        <div className="datos__body-dato">{reserva.hora}</div>
        <div className="datos__body-dato datos__body-comensales">
          <img src={userImg} className="user-icon" alt="" />
          {reserva.cantidad_personas}
        </div>
        <div className="datos__body-dato">{reserva.lugar}</div>
        <div className="datos__body-dato">{reserva.estado}</div>
        <div className="datos__body-dato acciones">
            <img src={pencilImg} alt="" className={fechaReserva < fechaHoy? 'old' : 'new'}/>
            <img src={cruzImg} alt="" className={fechaReserva < fechaHoy ? 'old' : 'new'} onClick={()=>handleDelete()}/>
        </div>
  <Modal isSubmitted={showModal.isClicked} isGoodStatus={showModal.isGood} handleSubmit={closeModal} msg={showModal.msg} position={'top'}></Modal>
      </div>
     );
}

export default Reserva;