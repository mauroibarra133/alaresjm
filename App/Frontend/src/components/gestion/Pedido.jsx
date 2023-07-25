import {  useState } from "react";
import { updatePedido } from "../../services/pedidos.services";
/* eslint-disable react/prop-types */
function Pedido({pedido, onEstadoChange }) {
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
        <div className="verpedidos__body-row">
        <div className="verpedidos__dato">{pedido.hora}</div>
        <div className="verpedidos__dato">{pedido.nombre_completo}</div>
        <div className="verpedidos__dato">{pedido.descr_pedidos}</div>
        <div className="verpedidos__dato">{pedido.direccion}</div>
        <div className="verpedidos__dato">{pedido.tipopago}</div>
        <div className="verpedidos__dato">{pedido.tipoentrega}</div>
        <div className="verpedidos__dato">{pedido.nota || '-'}</div>
        <div className="verpedidos__dato">{`$${pedido.total}`}</div>
        <div className="verpedidos__dato">{`$${pedido.monto_cambio || '0'}`}</div>
        <div className="verpedidos__dato">
            <select name="" id="" className='verpedidos__dato-estado' defaultValue={estado} value={estado == pedido.estado__pedido ? estado :  pedido.estado__pedido} onChange={handleState}>
                <option value="A confirmar">A confirmar</option>
                <option value="Confirmado">Confirmado</option>
                <option value="En Preparacion">En Preparacion</option>
            </select>
        </div>
    </div>
     );
}

export default Pedido;