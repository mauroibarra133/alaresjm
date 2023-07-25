import {  useState } from "react";
import { updatePedido } from "../../services/pedidos.services";
import '../../styles/dashboard/pedido.css'
import cruzIcon from '../../assets/images/xmark-solid.svg'
import userIcon from '../../assets/images/usuario.png'
import locationIcon from '../../assets/images/sitio.png'
import relojIcon from '../../assets/images/reloj-de-pared.png'
import entregaIcon from '../../assets/images/entrega.png'
import pagoIcon from '../../assets/images/tarjeta-de-credito.png'

/* eslint-disable react/prop-types */
function Pedido({onEstadoChange, modalPedido}) {
    const pedido = modalPedido.pedido
    const [estado, setEstado] = useState(pedido.estado_pedido)
    async function handleState(event){
        if(event.target.value != pedido.estado__pedido){
            const response = await updatePedido({
                id: pedido.id,
                state: event.target.value
            })
            if(response.status == 200){
                setEstado(event.target.value)
                onEstadoChange()
                // window.location.reload()
            }else{
                console.log('No se pudo wn');
            }
        }
    }
    return ( 
        <div className="verpedido__modal">
            <div className={`verpedido__modal-top`}>
                <p className="verpedido__top-id">{`Pedido nº ${pedido.id}`}</p>
                <div className="verpedido__top-cruz">
                <img src={cruzIcon} alt="" />
                </div>
            </div>
            <div className="verpedido__infouser">
                <div className="verpedido__dato verpedido__dato-icon-wrapper">
                    <img src={userIcon} alt="" className="verpedido__dato-icon"/>
                    <div>{pedido.nombre_completo}</div></div>

                <div className="verpedido__dato verpedido__dato-icon-wrapper"> 
                    <img src={locationIcon} alt="" className="verpedido__dato-icon" />
                    <div>{pedido.direccion}</div>
                    </div>
                <div className="verpedido__dato verpedido__dato-icon-wrapper">
                    <img src={relojIcon} alt="" className="verpedido__dato-icon"/>
                    <div>{pedido.hora}</div></div>
            </div>
            <div className="verpedido__detalle-wrapper">
                <div className="verpedido__detalle">
                    <div className="verpedido__header">
                        <div>Cantidad</div>
                        <div>Nombre</div>
                        <div>Subtotal</div>
                    </div>
                    <div className="verpedido__body">
                        <div className="verpedido__row">
                        {pedido.descr_pedidos}
                        </div>
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
                        <img src={entregaIcon} className="verpedido__dato-icon" alt="" />
                        <div>{pedido.tipoentrega}</div>
                    </div>
                    <div className="verpedido__pago">
                        <img src={pagoIcon} className="verpedido__dato-icon" alt="" />
                        <div>{pedido.tipopago}</div>
                    </div>
                </div>

                <div className="verpedido__monto">{'$'+pedido.monto_cambio || ''}</div>

            </div>
            <div className="verpedido__estado">
                <select name="" id=""  defaultValue={estado} value={estado == pedido.estado__pedido ? estado :  pedido.estado__pedido} onChange={handleState}>
                    <option value="A confirmar">A confirmar</option>
                    <option value="Confirmado">Confirmado</option>
                    <option value="Listo">Listo</option>
                    <option value="En Reparto">En Reparto</option>
                    <option value="En Preparacion">En Preparacion</option>
                    <option value="Cancelado">Cancelado</option>
                </select>
            </div>
    </div>
    )}


export default Pedido;