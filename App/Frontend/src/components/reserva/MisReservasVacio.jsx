import '../../styles/reserva/mis-reservas.css'
import {NavLink} from 'react-router-dom'

function MisReservasVacio() {
    return (
      <div className="datos__body vacio">
        <p className="misreservas__msg">Aun no tienes ninguna reserva hoy</p>
        <div className="misreservas__button">
          <NavLink to={'/reservas'}>
            <button className="button">RESERVAR</button>
          </NavLink>
        </div>
      </div>
    );
}

export default MisReservasVacio;