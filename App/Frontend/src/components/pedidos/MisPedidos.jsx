import Path from '../Path'
import { useState, useEffect } from 'react';
import eyeImg from '../../assets/images/eye-slash.svg'
import '../../styles/pedidos/mispedidos.css'
import MisPedidosVacio from '../FormVacio'
import { useAuth } from '../../hooks/useAuth';
import {getOrders} from '../../services/pedidos.services'
import Pedido from './Pedido';
import io from 'socket.io-client';
const socket = io('/');

function MisPedidos() {
    const [isFilterActive, setFilterActive] = useState(true);
    const [pedidos,setPedidos] = useState([]);
    const [pedidoAct,setPedidoAct] = useState(false);
    const {auth} = useAuth()
    const fechaHoy = new Date().toISOString().split('T')[0]

    useEffect(()=>{
        async function searchReservas(){
            if(auth.data.user_id){
                const response = await getOrders({ user_id: auth.data.user_id})
                setPedidos(response.data.data)
            }
        }
        searchReservas()
    },[auth.data.user_id])

    useEffect(() => {
        // Crear una instancia de socket.io-client y conectar al servidor
        // Escuchar el evento 'connect' para saber cuándo se ha establecido la conexión
        socket.on('connect', () => {
            console.log(socket);
        
          console.log('Conectado al servidor Socket.IO');
    
          // Escuchar el evento 'pedidoAdmin' emitido por el servidor
          socket.on('pedidoActualizado', (pedidoActualizado) => {
            console.log('Nuevo pedido recibido:', pedidoActualizado);
            setPedidoAct(pedidoActualizado)

          });
        });
        // Desuscribirse del evento 'pedidoAdmin' cuando el componente se desmonte

      });

useEffect(()=>{
    if(pedidoAct){
        // Función para modificar el estado del pedido específico
        const pedidosActualizados = pedidos.map((pedido) => {
        if (pedido.id === pedidoAct.id) {
        // Actualizamos solo el pedido que coincide con el id del pedido actualizado
        return {
          ...pedido,
          estado_pedido: pedidoAct.estado_pedido, // Aquí debes actualizar los campos específicos que desees
          // Agrega aquí los demás campos que quieras actualizar
        };
      }
      return pedido; // Si no coincide, devolvemos el pedido sin modificar
    });
    console.log(pedidosActualizados);
    setPedidos(pedidosActualizados);
    setPedidoAct(false);
  }
},[pedidoAct])

function handlePedidos(){
    if(pedidos.length <= 0){
        return <MisPedidosVacio goTo={'delivery'} msg={"Aun no tienes ningun pedido hoy"} msgButton={"PEDIR"}></MisPedidosVacio>
    }else{
        //Si no hay filtro
        if(!isFilterActive){
            return pedidos.map(order => {
                return (
                    <Pedido pedido={order} key={order.id}/>
                );
            }); 
        }
        //Si hay filtro
        if (isFilterActive) {
                const filterPedidos = pedidos.filter(pedido => {
                    if(new Date(pedido.fecha).toISOString().split('T')[0] >= fechaHoy){
                        return pedido
                    }
                })
                //Si no hay pedidos en el dia de hoy
                if(filterPedidos.length <= 0){
                    return <MisPedidosVacio goTo={'delivery'} msg={"Aun no tienes ningun pedido hoy"} msgButton={"PEDIR"}></MisPedidosVacio>
                }
                //Si hay Pedidos
                return filterPedidos.map(pedido => {
                    return (
                        <Pedido pedido={pedido}  key={pedido.id}/>
                    );
              });


      }
}
}
    return ( 
        <div className="mispedidos__container">
            <Path pathPrev={'Home'} pathActual={'Mis Pedidos'} goTo={'home'}></Path>
            <div className="mispedidos__form">
                <div className="mispedidos__filter">
                    <img src={eyeImg} alt="Icono de oculto" />
                    <p  onClick={() => setFilterActive(!isFilterActive)}>{!isFilterActive ? "Ocultar pedidos antiguas" : "Mostrar pedidos antiguas"}</p>
                </div>
                <div className="mispedidos__datos">
                    <div className="datos__header">
                    <p className="datos__header-column">Fecha</p>
                        <p className="datos__header-column">Desc. Pedido</p>
                        <p className="datos__header-column">Monto</p>
                        <p className="datos__header-column">Estado</p>
                    </div>
                    <div className="datos__body">
                        {handlePedidos()}
                    </div>
                </div>
            </div>
        </div>
     );
}

export default MisPedidos;