/* eslint-disable react/prop-types */
import '../styles/reserva/mis-reservas.css'
import {NavLink} from 'react-router-dom'

function FormVacio({msg, msgButton,goTo}) {
    return (
      <div className="datos__body vacio">
        <p className="misreservas__msg">{msg}</p>
        <div className="misreservas__button">
          <NavLink to={goTo ? `/${goTo}` : './'}>
            <button className="button">{msgButton}</button>
          </NavLink>
        </div>
      </div>
    );
}
export default FormVacio