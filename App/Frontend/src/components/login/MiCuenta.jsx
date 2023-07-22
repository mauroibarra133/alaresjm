import '../../styles/login/miCuenta.css'
import coheteImg from '../../assets/images/cohete-espacial.png'
import pedidoImg from '../../assets/images/pedido-online.png'
import flechaImg from '../../assets/images/flecha-correcta.png'
import reserva3 from '../../assets/images/campana.png'
import {useAuth} from '../../hooks/useAuth'
import { NavLink } from 'react-router-dom'
const MiCuenta = () => {
  const {auth} = useAuth()


console.log(auth);
  return (
    <div className="micuenta__container">
      <h2 className='micuenta__bigtitle'>Mi Cuenta</h2>
      <div className='micuenta-wrapper'>
        <div className="micuenta__info-wrapper">
          <div className="micuenta__title">
            <h2>Informacion Personal</h2>
          </div>
          <div className="micuenta__info">
              <div className="micuenta__fields">
                  <div className="micuenta__field">
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            type="text"
                            name="nombre"
                            value={auth.data.nombre || ""}
                            readOnly
                    />
                    </div>
                    <div className="micuenta__field">
                        <label htmlFor="apellido">Apellido:</label>
                        <input
                            type="text"
                            name="apellido"
                            value={auth.data.apellido || ""}
                            readOnly
                        />
                    </div>
                    <div className="micuenta__field">
                        <label htmlFor="mail">Mail:</label>
                        <input
                            type="email"
                            name="mail"
                            value={auth.data.email || ""}
                            readOnly
                        />
                    </div>
              </div>
              <div className="micuenta__pts">
                <img src={coheteImg} alt="" />
                <p>{auth.data.puntos || 0}<span> pts</span></p>
              </div>
          </div>

        </div>
        <div className="micuenta__items">
          <NavLink to={'/mis-pedidos'}>
              <div className="micuenta__item">
                <img src={pedidoImg} alt="" className="item__icon" />
                <div className="item__info">
                  <h3 className="item__title">Mis Pedidos</h3>
                  <p className='item__desc'>Ver los pedidos realizados</p>
                </div>
                <div className="item__arrow">
                  <img src={flechaImg} alt="" />
                </div>
              </div>
          </NavLink>
          <NavLink to={'/mis-reservas'}>
              <div className="micuenta__item">
                  <img src={reserva3} alt="" className="item__icon"/>
                  <div className="item__info">
                      <h3 className="item__title">Mis Reservas</h3>
                      <p className='item__desc'>Ver las reservas realizadas</p>
                  </div>
                  <div className="item__arrow">
                      <img src={flechaImg} alt="" />
                  </div>
              </div>
          </NavLink>

        </div>
      </div>

    </div>
  );
};

export default MiCuenta;
