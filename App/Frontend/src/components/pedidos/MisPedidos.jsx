import Path from '../Path'
import { useState, useEffect } from 'react';
import eyeImg from '../../assets/images/eye-slash.svg'
import '../../styles/pedidos/mispedidos.css'
import MisPedidosVacio from '../FormVacio'
import { useAuth } from '../../hooks/useAuth';
import {getOrders} from '../../services/pedidos.services'
import Pedido from './Pedido';
import io from 'socket.io-client';
import { transformDate } from '../../utils/functions';
const socket = io('/');
import LoaderComponent from '../LoaderComponent';

function MisPedidos() {

    //States
    const [isFilterActive, setFilterActive] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [pedidos,setPedidos] = useState([]);
    const [pedidoAct,setPedidoAct] = useState(false);
    const [page,setPage] = useState(1);
    const [offsett,setOffset] = useState(0);
    const [pages,setPages] = useState([]);

    //Hooks
    const {auth} = useAuth()

    //Constants
    const LIMIT = 6;
    const fechaHoy = new Date().toISOString().split('T')[0]

    //UseEffects
    useEffect(()=>{
        const arrPaginas = [];
        for (let i = 1; i <= Math.ceil((filterOrders(pedidos).length == 0 ? 1 : filterOrders(pedidos).length ) / LIMIT); i++) {
            arrPaginas.push(i);
        }
        setPages(arrPaginas);
        handlePage(1);
        
    },[pedidos,isFilterActive]);
    
    useEffect(()=>{
        async function searchOrders(){
            if(auth.data.user_id){
                const response = await getOrders({ user_id: auth.data.user_id})
                setPedidos(response.data.data)
            }
        }
        searchOrders().then(()=> setIsLoading(false)).catch((error)=>{console.log(error); setIsLoading(false);})
    },[auth.data.user_id])

    useEffect(() => {
        socket.on('connect', () => {
          socket.on('pedidoActualizado', (pedidoActualizado) => {
            setPedidoAct(pedidoActualizado)
          });
        });
      });

    useEffect(()=>{
        if(pedidoAct){
            const pedidosActualizados = pedidos.map((pedido) => {
            if (pedido.id === pedidoAct.id) {
            return {
            ...pedido,
            estado_pedido: pedidoAct.estado_pedido, 
            };
        }
        return pedido; 
        });
        setPedidos(pedidosActualizados);
        setPedidoAct(false);
    }
    },[pedidoAct])

    function handlePage(pageActual){
        if(pageActual !== page){
            window.scrollTo(0, 10);
            setPage(pageActual);
            setOffset((pageActual-1) * LIMIT)
        }
    }
    function filterOrders(){
        if(pedidos.length <= 0) return []
        if(isFilterActive){
            const filtered = pedidos.filter(pedido => {
                if(transformDate(pedido.fecha)>= transformDate(fechaHoy)){
                    return pedido
                }
            });
            if (filtered.length <= 0) return []
            else return filtered
        }else{
            return pedidos
        }
    }
function handlePedidos(){
    if(pedidos.length <= 0){
        return <MisPedidosVacio goTo={'delivery'} msg={"Aun no tienes ningun pedido hoy"} msgButton={"PEDIR"}></MisPedidosVacio>
    }else{
        const filteredOrders = filterOrders()

            if(filteredOrders.length <= 0){
                return <MisPedidosVacio goTo={'delivery'} msg={"Aun no tienes ningun pedido hoy"} msgButton={"PEDIR"}></MisPedidosVacio>
            } else {
                return filteredOrders.slice(offsett, LIMIT + offsett).map(order => {
                    return (
                        <Pedido pedido={order} key={order.id} />
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
                    {isLoading ? (
                            <LoaderComponent size={'small'} color={'orange'}/> // Muestra el componente de carga mientras isLoading sea true
                        ) : (
                            handlePedidos() // Muestra los datos una vez que isLoading sea false
                        )}
                    </div>
                </div>
            </div>
            {filterOrders().length > 0 && (
                    <div className='button'>PEDIR</div>
                )}
            {pages.length > 1 && (
                <div className="mispedidos__paginacion-wrapper">
                <div className="mispedidos__paginacion">
                    <div className="mispedidos__pagina--button">
                        <p onClick={()=> handlePage((page - 1) == 0 ? page : page-1) }>Previo</p>
                    </div>
                    {pedidos && pages.map(pageAct => (
                        <div className={`mispedidos__pagina`} key={pageAct} onClick={()=>handlePage(pageAct)}>
                            <p className={`${pageAct == page ? 'active' : ''}`}>{pageAct}</p>
                        </div>
                    ))}
                    <div className="mispedidos__pagina--button">
                        <p onClick={()=> handlePage((page + 1) > pages.length ? page : page+1)}>Siguiente</p>
                    </div>
                </div>
                </div>
            )}
          
        </div>
     );
}

export default MisPedidos;