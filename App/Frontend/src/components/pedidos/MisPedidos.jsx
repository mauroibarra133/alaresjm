import Path from '../Path'
import { useState } from 'react';
import eyeImg from '../../assets/images/eye-slash.svg'
import '../../styles/pedidos/mispedidos.css'
import MisPedidosVacio from '../FormVacio'
import { useAuth } from '../../hooks/useAuth';

function MisPedidos() {
    const [isFilterActive, setFilterActive] = useState(false);
    const [pedidos,setPedidos] = useState();
    const {auth} = useAuth()
;
    useEffect(()=>{
        async function searchReservas(){
            if(auth.data.user_id){
                const response = await getPedidos(auth.data.user_id)
                return response.data
            }
        }

        searchReservas().then(data => setPedidos(data.data))
    },[auth.data.user_id])


    return ( 
        <div className="mispedidos__container">
            <Path pathPrev={'Home'} pathActual={'Mis Pedidos'} goTo={'home'}></Path>
            <div className="mispedidos__form">
                <div className="mispedidos__filter">
                    <img src={eyeImg} alt="Icono de oculto" />
                    <p>{!isFilterActive ? "Ocultar reservas antiguas" : "Mostrar reservas antiguas"}</p>
                </div>
                <div className="mispedidos__datos">
                    <div className="datos__header">
                    <p className="datos__header-column">Fecha</p>
                        <p className="datos__header-column">Desc. Pedido</p>
                        <p className="datos__header-column">Monto</p>
                        <p className="datos__header-column">Estado</p>
                    </div>
                    <div className="datos__body">
                        <MisPedidosVacio goTo={'delivery'} msg={"Aun no tienes ningun pedido hoy"} msgButton={"PEDIR"}></MisPedidosVacio>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default MisPedidos;