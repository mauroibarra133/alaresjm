/* eslint-disable react/prop-types */
import '../../styles/pedidos/mispedidos.css'
import confirmedStatus from '../../assets/images/comprobado.png'
import waitStatus from '../../assets/images/procesando.png'
import badStatus from '../../assets/images/cancelar.png'
import cookingStatus from '../../assets/images/sombrero-de-cocinero.png'
import readyStatus from '../../assets/images/comprobar.png'
import deliveryStatus from '../../assets/images/enviado.png'
import OKStatus from '../../assets/images/caja-de-entrega.png'
import { useEffect,useState } from 'react'

const statusPedidos = [
    {
      status: "A confirmar",
      img: waitStatus
    },
    {
      status: "Confirmado",
      img: confirmedStatus
    },
    {
      status: "En Preparacion",
      img: cookingStatus
    },
    {
        status: "Listo",
        img: readyStatus
    },
    {
        status: "En reparto",
        img: deliveryStatus
    },
    {
        status: "Entregado",
        img: OKStatus
    },
    {
        status: "Cancelado",
        img: badStatus
    }
  ];
function Pedido({pedido}) { // fechaHoy: YYYY-MM-DD
    const pedidoReserva = new Date(pedido.fecha).toISOString().split('T')[0]
    const fechaFormateada = `${pedidoReserva.substring(8, 10)}/${pedidoReserva.substring(5, 7)}`;
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);  

    function getStatusImage(status) {
        const pedidoStatus = statusPedidos.find(item => item.status === status);
        if (pedidoStatus) {
          return pedidoStatus.img;
        }
      }

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