import Path from '../Path'
import { useState, useEffect } from 'react';
import eyeImg from '../../assets/images/eye-slash.svg'
import '../../styles/pedidos/mispedidos.css'
import MisPedidosVacio from '../FormVacio'
import { useAuth } from '../../hooks/useAuth';
import {getPedidos} from '../../services/pedidos.services'
import Pedido from './Pedido';

function MisPedidos() {
    const [isFilterActive, setFilterActive] = useState(false);
    const [pedidos,setPedidos] = useState([]);
    const {auth} = useAuth()
    const fechaHoy = new Date().toISOString().split('T')[0]
    useEffect(()=>{
        async function searchReservas(){
            if(auth.data.user_id){
                const response = await getPedidos(auth.data.user_id)
                return response.data
            }
        }

        searchReservas().then(data => setPedidos(data.data)).catch(setPedidos([]))
    },[auth.data.user_id])

function handlePedidos(){
    if(pedidos.length <= 0){
        return <MisPedidosVacio goTo={'delivery'} msg={"Aun no tienes ningun pedido hoy"} msgButton={"PEDIR"}></MisPedidosVacio>
    }else{

        //Si no hay filtro
        if(!isFilterActive){
            return pedidos.map(pedido => {
                return (
                    <Pedido pedido={pedido} key={pedido.id}/>
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