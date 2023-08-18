/* eslint-disable react/prop-types */
import '../../styles/pedidos/mispedidos.css'
import { useEffect,useState } from 'react'
import { getStatusImage, transformDate } from '../../utils/functions';

function Pedido({pedido}) { // fechaHoy: YYYY-MM-DD
    const pedidoReserva = transformDate(pedido.fecha)
    const fechaFormateada = `${pedidoReserva.substring(8, 10)}/${pedidoReserva.substring(5, 7)}`;
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);  


      useEffect(() => {
        const handleResize = () => {
          setIsLargeScreen(window.innerWidth > 768);
        };
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return ( 

        <div className="datos__body-row" key={pedido.id}>
        <div className="datos__body-dato">{fechaFormateada}</div>
        <div className="datos__body-dato">{pedido.nombres_productos}</div>
        <div className="datos__body-dato datos__body-comensales">
          {`$${pedido.total}`}
        </div>
        <div className="datos__body-dato pedidos-estado">
            <img src={getStatusImage(pedido.estado_pedido)} alt="" className='status-img'/>
            {isLargeScreen && (
                <p>{pedido.estado_pedido}</p>
            )}
        </div>
        <div className="datos__body-dato"></div>

      </div>
     );
}

export default Pedido;