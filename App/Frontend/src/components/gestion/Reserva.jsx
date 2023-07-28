import {  useState } from "react";
import { updatePedido } from "../../services/pedidos.services";
import '../../styles/dashboard/pedido.css'
import cruzIcon from '../../assets/images/xmark-solid.svg'
import userIcon from '../../assets/images/usuario.png'
import locationIcon from '../../assets/images/sitio.png'
import relojIcon from '../../assets/images/reloj-de-pared.png'
// import entregaIcon from '../../assets/images/entrega.png'
// import pagoIcon from '../../assets/images/tarjeta-de-credito.png'
// import io from 'socket.io-client';
// const socket = io('/');

/* eslint-disable react/prop-types */
function Reserva({modalReserva, closeModal}) {
    const reserva = modalReserva.reserva
    const fechaReserva = new Date(reserva.fecha).toISOString().split('T')[0];
    const [estado, setEstado] = useState(reserva.estado)

    async function handleState(event){
        if(event.target.value != reserva.estado){
            const response = await updatePedido({
                id: reserva.id,
                state: event.target.value
            })
            if(response.status == 200){
                setEstado(event.target.value)
                reserva.estado = event.target.value
                // socket.emit('reservaActualizada',reserva);
                
            }else{
                console.log('No se pudo wn');
            }
        }
    }
    return ( 
        <div className="verreserva__modal dashboard__modal">
            <div className={`dashboard__modal-top verreserva__modal-top`}>
                <p className="verreserva__top-id dashboard__modal-top-id">{`Reserva nº ${reserva.id}`}</p>
                <div className="verreserva__top-cruz dashboard__top-cruz">
                <img src={cruzIcon} alt=""  onClick={closeModal}/>
                </div>
            </div>
            <div className="verreserva__estado dashboard__estado-modal">
                <select name="" id=""  defaultValue={estado} value={estado == reserva.estado ? estado :  reserva.estado} onChange={handleState}>
                    <option value="A confirmar">A confirmar</option>
                    <option value="Confirmado">Confirmado</option>
                    <option value="Cancelado">Cancelado</option>
                </select>
            </div>
            <div className="verreserva__info">
                <div className="verpedido__dato verpedido__dato-icon-wrapper">
                    <div style={{fontFamily: 'Amiri'}}>{reserva.cliente_reserva}</div>
                </div>
                <div className="verreserva__group">
                    <div className="verpedido__dato verpedido__dato-icon-wrapper verreserva__dato">
                        <img src={userIcon} alt="" className="verpedido__dato-icon"/>
                        <div>{reserva.cantidad_personas}</div>
                    </div>
                    <div className="verpedido__dato verpedido__dato-icon-wrapper verreserva__dato"> 
                            <img src={locationIcon} alt="" className="verpedido__dato-icon" />
                            <div>{reserva.lugar}</div>
                    </div>
                </div>
                <div className="verreserva__group">
                    <div className="verpedido__dato verpedido__dato-icon-wrapper verreserva__dato">
                        <img src={relojIcon} alt="" className="verpedido__dato-icon"/>
                        <div>{fechaReserva}</div>
                    </div>
                    <div className="verpedido__dato verpedido__dato-icon-wrapper verreserva__dato">
                        <img src={relojIcon} alt="" className="verpedido__dato-icon"/>
                        <div>{reserva.hora}</div>
                    </div>
                </div>

            </div>

    </div>
    )}


export default Reserva;