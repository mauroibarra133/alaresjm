import { useEffect, useState } from 'react';
import '../../styles/dashboard/verpedidos.css'
import {getPedidos} from '../../services/pedidos.services'
import { getStatusImage } from '../../utils/functions';
import Pedido from './Pedido';
import Overlay from '../Overlay'
import VerPedidosVacio from '../FormVacio'

function VerPedidos() {
    const [pedidos,setPedidos] = useState([]);
    const hoy = new Date()
    const fechaHoy = hoy.toISOString().split('T')[0]
    const ayer = new Date()
    ayer.setDate(ayer.getDate() - 1);
    const fechaAyer = ayer.toISOString().split('T')[0];
    
    const [filterFecha,setFilterFecha] = useState(fechaHoy);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);  
    const [modalPedido, setModalPedido] = useState({
        isSubmitted: false,
        pedido: {}
    });  

    useEffect(()=>{
        async function traerPedidos(){
            const result = await getPedidos({date: filterFecha})
            if(result.status == 200){
                setPedidos(result.data.data)
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
    function openModalPedido(pedido){
        setModalPedido({
            isSubmitted:true,
            pedido: pedido
        });
    }
    function closeModalPedido(){
        setModalPedido({
            isSubmitted:false,
            pedido: {}
        });
        traerPedidos()
        
    }
    return ( 
        <div className="verpedidos">
            <div className="verpedidos__fechas">
                <div className="verpedidos__fecha-ayer button "  onClick={()=>setFilterFecha(fechaAyer)}>Ayer</div>
                <input className="verpedidos__fecha-input" type="date" onChange={handleDate} value={filterFecha}></input>
                <div className="verpedidos__fecha-hoy button" onClick={()=>setFilterFecha(fechaHoy)}>Hoy</div>
            </div>
            <div className="verpedidos__pedidos">
                <div className="verpedidos__header">
                    <div className="verpedidos__header-column">Hora</div>
                    <div className="verpedidos__header-column">Cliente</div>
                    {/* <div className="verpedidos__header-column">Detalle</div>
                    <div className="verpedidos__header-column">Direccion</div>
                    <div className="verpedidos__header-column">Tipo Pago</div>
                    <div className="verpedidos__header-column">Tipo Entrega</div>
                    <div className="verpedidos__header-column">Nota</div>
                    <div className="verpedidos__header-column">Total</div>
                    <div className="verpedidos__header-column">Paga con</div> */}
                    <div className="verpedidos__header-column">Estado</div>
                </div>
                <div className="verpedidos__body">
                    {pedidos.length <= 0 ? <VerPedidosVacio msg={'No hay pedidos el dia de hoy'} msgButton={':('}></VerPedidosVacio> :
                     pedidos.map(pedido =>(
                        <div className="verpedidos__body-row" key={pedido.id} onClick={()=>     openModalPedido(pedido)}>
                            <div className="verpedidos_dato">{pedido.hora}</div>
                            <div className="verpedidos_dato">{pedido.nombre_completo}</div>
                            <div className="verpedidos_dato"><img src={getStatusImage(pedido.estado_pedido)} alt="" />
                                {isLargeScreen && (
                                    <p>{pedido.estado_pedido}</p>
                                )}
                            </div>
                        </div>

                    ))}
                </div>
            </div>
            {modalPedido.isSubmitted && (
                <Overlay>
                        <Pedido modalPedido={modalPedido} closeModal={closeModalPedido}></Pedido>
                </Overlay>
                    )}
        </div>
     );
}

export default VerPedidos;