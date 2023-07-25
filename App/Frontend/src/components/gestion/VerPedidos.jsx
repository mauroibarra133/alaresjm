import { useEffect, useState } from 'react';
import '../../styles/dashboard/verpedidos.css'
import {getPedidos} from '../../services/pedidos.services'
import Pedido from './Pedido';

function VerPedidos() {
    const [pedidos,setPedidos] = useState([]);
    const hoy = new Date()
    const fechaHoy = hoy.toISOString().split('T')[0]
    const ayer = new Date()
    ayer.setDate(ayer.getDate() - 1);
    const fechaAyer = ayer.toISOString().split('T')[0];
    
    const [filterFecha,setFilterFecha] = useState(fechaHoy);

    useEffect(()=>{
        async function traerPedidos(){
            const result = await getPedidos({date: filterFecha})
            if(result.status == 200){
                setPedidos(result.data.data)
            }
        }
        traerPedidos()
    },[filterFecha])


    function handleDate(data){
        setFilterFecha(data.target.value)
    }
    async function fetchPedidos() {
        const result = await getPedidos({ date: filterFecha });
        if (result.status === 200) {
          setPedidos(result.data.data);
        }
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
                    <div className="verpedidos__header-column">Detalle</div>
                    <div className="verpedidos__header-column">Direccion</div>
                    <div className="verpedidos__header-column">Tipo Pago</div>
                    <div className="verpedidos__header-column">Tipo Entrega</div>
                    <div className="verpedidos__header-column">Nota</div>
                    <div className="verpedidos__header-column">Total</div>
                    <div className="verpedidos__header-column">Paga con</div>
                    <div className="verpedidos__header-column">Estado</div>
                </div>
                <div className="verpedidos__body">
                    {pedidos && pedidos.map(pedido =>(
                        <Pedido key={pedido.id} pedido={pedido} onEstadoChange={fetchPedidos}></Pedido>
                    ))};
                </div>
            </div>
        </div>
     );
}

export default VerPedidos;