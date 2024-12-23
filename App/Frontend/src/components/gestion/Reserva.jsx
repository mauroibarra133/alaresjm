/* eslint-disable react/prop-types */
import {  useId, useState } from "react";
import { updateReserva } from "../../services/reservas.services";
import cruzIcon from '../../assets/images/xmark-solid.svg'
import userIcon from '../../assets/images/usuario.webp'
import locationIcon from '../../assets/images/sitio.webp'
import relojIcon from '../../assets/images/reloj-de-pared.webp'
import '../../styles/dashboard/modalDashboard.css'
import {transformDate }from '../../utils/functions.js'
import { useAuth } from "../../hooks/useAuth";

function Reserva({modalBooking, closeModal}) {
    //Constants
    const stateId = useId()
    const booking = modalBooking.booking
    const fechaTransformada = transformDate(booking.fecha)
    const [estado, setEstado] = useState(booking.estado)
    const {auth} = useAuth()

    //Functions
    async function handleState(event){
        if(auth.data.rol !== "Guest"){
            if(event.target.value != booking.estado){
                const response = await updateReserva(booking.id,{
                    ...booking,
                    estado: event.target.value
                })
                if(response.status == 200){
                    setEstado(event.target.value)
                    booking.estado = event.target.value
                    
                }
            }
        }

    }
    return ( 
        <div className="verreserva__modal dashboard__modal">
            <div className={`dashboard__modal-top verreserva__modal-top`}>
                <p className="verreserva__top-id dashboard__modal-top-id">{`Reserva nº ${booking.id}`}</p>
                <div className="verreserva__top-cruz dashboard__top-cruz">
                <img src={cruzIcon} alt="Cerrar"  onClick={closeModal}/>
                </div>
            </div>
            <div className="verreserva__estado dashboard__estado-modal">
                <select name={stateId} id={stateId} defaultValue={estado}  onChange={handleState} disabled={auth.data.rol == "Guest" ? true : false}>
                    <option value="A Confirmar">A Confirmar</option>
                    <option value="Reservado">Reservado</option>
                    <option value="Cancelado">Cancelado</option>
                </select>
            </div>
            <div className="verreserva__info">
                <div className="verreserva__dato-name dashboard__dato">
                    <div style={{fontFamily: 'Amiri'}}>{booking.cliente_reserva}</div>
                </div>
                <div className="verreserva__group">
                    <div className="dashboard__dato verreserva__dato">
                        <img src={userIcon} alt="Cantidad de personas" className="dashboard-icon"/>
                        <div>{booking.cantidad_personas}</div>
                    </div>
                    <div className="verreserva__dato dashboard__dato "> 
                            <img src={locationIcon} alt="Lugar a reservar" className="dashboard-icon" />
                            <div>{booking.lugar}</div>
                    </div>
                </div>
                <div className="verreserva__group">
                    <div className="verreserva__dato dashboard__dato">
                        <img src={relojIcon} alt="Fecha" className="dashboard-icon"/>
                        <div>{fechaTransformada}</div>
                    </div>
                    <div className="verreserva__dato dashboard__dato ">
                        <img src={relojIcon} alt="Hora" className="dashboard-icon"/>
                        <div>{booking.hora}</div>
                    </div>
                </div>

            </div>

    </div>
    )}


export default Reserva;