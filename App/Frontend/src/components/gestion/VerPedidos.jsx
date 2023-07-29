/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import '../../styles/dashboard/veritems.css'
import {getPedidos} from '../../services/pedidos.services'
import { getStatusImage } from '../../utils/functions';
import Pedido from './Pedido';
import Overlay from '../Overlay'
import VerPedidosVacio from '../FormVacio'
import io from 'socket.io-client';
const socket = io('/');

function VerPedidos() {
    const [pedidos,setPedidos] = useState([]);
    const hoy = new Date()
    const fechaHoy = hoy.toISOString().split('T')[0]
    const ayer = new Date()
    ayer.setDate(ayer.getDate() - 1);
    const fechaAyer = ayer.toISOString().split('T')[0];
    
    const [filterFecha,setFilterFecha] = useState(fechaHoy);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);  
    const [isFilterActive,setIsFilterActive] = useState({
        entregado: false,
        cancelado: false
    })

    const [modalPedido, setModalPedido] = useState({
        isSubmitted: false,
        pedido: {}
    });  

    useEffect(()=>{
        async function traerPedidos(){
            const result = await getPedidos({date: filterFecha})
            if(result.status == 200){
                setPedidos(filterPedidos(result.data.data))
            }
        }
        traerPedidos()
    },[filterFecha])

      useEffect(() => {
        const handleResize = () => {
          setIsLargeScreen(window.innerWidth > 768);
        };
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      useEffect(() => {
        // Crear una instancia de socket.io-client y conectar al servidor
    
        // Escuchar el evento 'connect' para saber cuándo se ha establecido la conexión
        socket.on('connect', () => {
            console.log(socket);
        
          console.log('Conectado al servidor Socket.IO');
    
          // Escuchar el evento 'pedidoAdmin' emitido por el servidor
          socket.on('pedidoAdmin', (nuevoPedido) => {
            console.log('Nuevo pedido recibido:', nuevoPedido);
    
            // Actualizar el estado de pedidos con el nuevo pedido recibido
            // Usamos el callback en setPedidos para asegurar que siempre estamos
            // actualizando el estado basado en el estado anterior
            setPedidos((prevPedidos) => [nuevoPedido,...prevPedidos]);
            const tablaPedidos = document.getElementById('verpedidos__body');
            tablaPedidos.classList.add('animate-slide-down');
            const nuevoPedidoRow = document.getElementById(`pedido-${nuevoPedido.id}`);
            nuevoPedidoRow.classList.add('animate-fade-in');
            setTimeout(() => {
                tablaPedidos.classList.remove('animate-slide-down');
                nuevoPedidoRow.classList.remove('animate-fade-in');
        }, 1000);
          });
        });
    
        // Desuscribirse del evento 'pedidoAdmin' cuando el componente se desmonte
        return () => {
          socket.off('pedidoAdmin');
        };
      }, []);


    async function traerPedidos(){
        const result = await getPedidos({date: filterFecha})
        if(result.status == 200){
            setPedidos(result.data.data)
        }
    }

    function handleDate(data){
        setFilterFecha(data.target.value)
    }

    // async function fetchPedidos() {
    //     const result = await getPedidos({ date: filterFecha });
    //     if (result.status === 200) {
    //       setPedidos(result.data.data);
    //     }
    //   }
    function filterPedidos(pedidos){
        if(!isFilterActive.entregado && !isFilterActive.cancelado){
            return pedidos
        }
        if(isFilterActive.entregado && isFilterActive.cancelado){
            return pedidos.filter(pedido => {
                if (pedido.estado_pedido != 'Cancelado' && pedido.estado_pedido != 'Entregado'){
                    return pedido
                }
            })
        }
        //Filtrar entregados
        if(isFilterActive.entregado){
            return pedidos.filter(pedido => pedido.estado_pedido != 'Entregado')
        }
        if(isFilterActive.cancelado){
            return pedidos.filter(pedido => pedido.estado_pedido != 'Cancelado')
        }

    }
    function openModalPedido(pedido){
        setModalPedido({
            isSubmitted:true,
            pedido: pedido
        });
        document.body.classList.add('disable-scroll');
    }
    function closeModalPedido(){
        setModalPedido({
            isSubmitted:false,
            pedido: {}
        });
        document.body.classList.remove('disable-scroll');

        traerPedidos()
        
    }
    console.log(isFilterActive);
    return ( 
        <div className="veritems verpedidos">
            <div className="verpedidos__fechas veritems__fechas">
                <div className="verpedidos__fecha-ayer button veritems__fechas-button"  onClick={()=>setFilterFecha(fechaAyer)}>Ayer</div>
                <input className="verpedidos__fecha-input" type="date" onChange={handleDate} value={filterFecha}></input>
                <div className="verpedidos__fecha-hoy button veritems__fechas-button" onClick={()=>setFilterFecha(fechaHoy)}>Hoy</div>
            </div>
            <div className="veritems__filters verpedidos__filters">
                <div className="veritems__filter verpedidos__filter">
                    <img src={getStatusImage('Entregado')} alt="Entregado"  className='verpedidos__icon'/>
                    <label htmlFor="">Ocultar Entregados</label>    
                    <input type="checkbox" onClick={()=> setIsFilterActive({
                        entregado: !isFilterActive.entregado,
                        cancelado: isFilterActive.cancelado
                    })}/>
                </div>
                <div className="veritems__filter verpedidos__filter">
                <img src={getStatusImage('Cancelado')} alt="Cancelado" className='verpedidos__icon'/>
                    <label htmlFor="">Ocultar Cancelados</label>
                    <input type="checkbox" onClick={()=> setIsFilterActive({
                        entregado: isFilterActive.entregado,
                        cancelado: !isFilterActive.cancelado
                    })}/>
                </div>
            </div>
            <div className="verpedidos__pedidos veritems__lista">
                <div className="verpedidos__header veritems__header">
                    <div className="veritems__header-column verpedidos__header-column">Hora</div>
                    <div className=" veritems__header-column  verpedidos__header-column">Cliente</div>
                    {/* <div className="verpedidos__header-column">Detalle</div>
                    <div className="verpedidos__header-column">Direccion</div>
                    <div className="verpedidos__header-column">Tipo Pago</div>
                    <div className="verpedidos__header-column">Tipo Entrega</div>
                    <div className="verpedidos__header-column">Nota</div>
                    <div className="verpedidos__header-column">Total</div>
                    <div className="verpedidos__header-column">Paga con</div> */}
                    <div className="veritems__header-column  verpedidos__header-column">Estado</div>
                </div>
                <div className="veritems__body verpedidos__body" id='verpedidos__body'>
                    {filterPedidos(pedidos).length <= 0 ? <VerPedidosVacio msg={'No hay pedidos el dia de hoy'} msgButton={':('}></VerPedidosVacio> :
                     filterPedidos(pedidos).map(pedido =>(
                        <div className={`veritems__row verpedidos__body-row`} id={`pedido-${pedido.id}`} key={pedido.id} onClick={()=>     openModalPedido(pedido)}>
                            <div className="veritems__dato verpedidos__dato ver-lista__dato">{pedido.hora}</div>
                            <div className="veritems__dato verpedidos__dato ver-lista__dato">{pedido.nombre_completo}</div>
                            <div className="veritems__dato verpedidos__dato ver-lista__dato"><img src={getStatusImage(pedido.estado_pedido)} alt="" />
                                {isLargeScreen && (
                                    <p>{pedido.estado_pedido}</p>
                                )}
                            </div>
                        </div>

                    ))}
                </div>
            </div>
            {modalPedido.isSubmitted && (
                <Overlay comp={'verpedidos'}>
                        <Pedido modalPedido={modalPedido} closeModal={closeModalPedido}></Pedido>
                </Overlay>
                    )}
        </div>
     );
}

export default VerPedidos;