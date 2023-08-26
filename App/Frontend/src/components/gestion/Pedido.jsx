/* eslint-disable react/prop-types */
import {  useId, useState } from "react";
import { updatePedido } from "../../services/pedidos.services";
import '../../styles/dashboard/modalDashboard.css'
import cruzIcon from '../../assets/images/xmark-solid.svg'
import userIcon from '../../assets/images/usuario.webp'
import locationIcon from '../../assets/images/sitio.webp'
import relojIcon from '../../assets/images/reloj-de-pared.webp'
import entregaIcon from '../../assets/images/entrega.webp'
import pagoIcon from '../../assets/images/tarjeta-de-credito.webp'
import io from 'socket.io-client';
import { useAuth } from "../../hooks/useAuth";
const socket = io('/');

function Pedido({modalPedido, closeModal}) {
    //Constants and states
    const pedido = modalPedido.pedido
    const stateId = useId()
    const [estado, setEstado] = useState(pedido.estado_pedido)
    const {auth} = useAuth()

    //Functions
    async function handleState(event){
        if(auth.data.rol !== "Guest"){
            if(event.target.value != pedido.estado__pedido){
                const response = await updatePedido({
                    id: pedido.id,
                    state: event.target.value
                })
                if(response.status == 200){
                    setEstado(event.target.value)
                    pedido.estado_pedido = event.target.value
                    socket.emit('orderUpdated',pedido);
                    
                }else{
                    console.log('No se pudo wn');
                }
            }
        }

    }
    console.log(auth);
    return ( 
        <div className="dashboard__modal">
            <div className={`verpedido__modal-top dashboard__modal-top`}>
                <p className="verpedido__top-id dashboard__modal-top-id ">{`Pedido nº ${pedido.id}`}</p>
                <div className="verpedido__top-cruz dashboard__top-cruz">
                <img src={cruzIcon} alt="Cerrar"  onClick={closeModal}/>
                </div>
            </div>
            <div className="verpedido__estado dashboard__estado-modal">
                <select name={stateId} id={stateId}  defaultValue={estado} value={estado == pedido.estado__pedido ? estado :  pedido.estado__pedido} onChange={handleState} disabled={auth.data.rol == "Guest" ? true : false}>
                    <option value="A confirmar">A confirmar</option>
                    <option value="Confirmado">Confirmado</option>
                    <option value="En Preparacion">En Preparacion</option>
                    <option value="Listo">Listo</option>
                    <option value="En Reparto">En Reparto</option>
                    <option value="Entregado">Entregado</option>
                    <option value="Cancelado">Cancelado</option>
                </select>
            </div>
            <div className="verpedido__infouser">
                <div className="verpedido__dato dashboard__dato">
                    <img src={userIcon} alt="Nombre Completo" className="dashboard-icon verpedido__dato-icon"/>
                    <div>{pedido.nombre_completo}</div></div>

                <div className="verpedido__dato dashboard__dato"> 
                    <img src={locationIcon} alt="Direccion" className="dashboard-icon verpedido__dato-icon" />
                    <div>{pedido.direccion}</div>
                    </div>
                <div className="verpedido__dato dashboard__dato">
                    <img src={relojIcon} alt="Hora" className="dashboard-icon verpedido__dato-icon"/>
                    <div>{pedido.hora}</div></div>
            </div>
            <div className="verpedido__detalle-wrapper">
                <div className="verpedido__detalle">
                    <div className="verpedido__header">
                        <div>Nombre</div>
                        <div>Cantidad</div>
                        <div>Subtotal</div>
                    </div>
                    <div className="verpedido__body">
                        {
                            pedido.descr_pedidos.split(',').map((row, i) => (
                                <div className="verpedido__row" key={i}>{row.split('-').map((dato,i) => (
                                    <div key={i}>{ i == 2 ? '$'+dato : dato}</div>
                                ))}</div>
                            ))
                        }
                        <div className="verpedido__row verpedido__row-total">
                            <div className="verpedido__total-title">TOTAL</div>
                            <div className="verpedido__total">{'$'+pedido.total}</div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="verpedido__nota">
                <label htmlFor="">Nota: </label>
                <p>{pedido.nota || '-'}</p>
            </div>
            <div className="verpedido__infoentrega">
                <div>
                    <div className="verpedido__entrega">
                        <img src={entregaIcon} className="dashboard-icon verpedido__dato-icon" alt="Tipo de entrega" />
                        <div>{pedido.tipoentrega}</div>
                    </div>
                    <div className="verpedido__pago">
                        <img src={pagoIcon} className="dashboard-icon verpedido__dato-icon" alt="Tipo de pago" />
                        <div>{pedido.tipopago}</div>
                    </div>
                </div>

                <div className="verpedido__monto">{`$${pedido.monto_cambio || 0}`}</div>

            </div>
    </div>
    )}


export default Pedido;