/* eslint-disable react/prop-types */
import userImg from '../../assets/images/header-user.svg'
import pencilImg from '../../assets/images/pencil-solid.svg'
import cruzImg from '../../assets/images/xmark-solid.svg'
function Reserva({reserva, fechaLegible}) {
    
    return ( 

        <div className="datos__body-row" key={reserva.id}>
        <div className="datos__body-dato">{fechaLegible}</div>
        <div className="datos__body-dato">{reserva.hora}</div>
        <div className="datos__body-dato datos__body-comensales">
          <img src={userImg} className="user-icon" alt="" />
          {reserva.cantidad_personas}
        </div>
        <div className="datos__body-dato">{reserva.lugar}</div>
        <div className="datos__body-dato acciones">
            <img src={pencilImg} alt="" />
            <img src={cruzImg} alt="" />
        </div>
      </div>

     );
}

export default Reserva;