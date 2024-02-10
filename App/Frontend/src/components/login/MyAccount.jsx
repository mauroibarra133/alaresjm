import "../../styles/login/myAccount.css";
import coheteImg from "../../assets/images/cohete-espacial.webp";
import pedidoImg from "../../assets/images/pedido-online.webp";
import flechaImg from "../../assets/images/flecha-correcta.webp";
import reserva3 from "../../assets/images/campana.webp";
import { useAuth } from "../../hooks/useAuth";
import { NavLink } from "react-router-dom";
import { getData } from "../../services/auth.services";
import { useEffect, useState } from "react";
const MyAccount = () => {
  const { auth } = useAuth();
  const [points, setPoints] = useState(0);

  useEffect(() => {
    document.title = "Alares | Mi Cuenta ";
  }, []);

  useEffect(() => {
    async function getUserData() {
      try {
        const data = await getData(auth.data.user_id);
        setPoints(data.data.points);
      } catch (error) {
        console.log(error);
      }
    }
    getUserData();
  });

  return (
    <div className="myaccount__container">
      <h2 className="myaccount__bigtitle">Mi Cuenta</h2>
      <div className="myaccount-wrapper">
        <div className="myaccount__info-wrapper">
          <div className="myaccount__title">
            <h2>Informacion Personal</h2>
          </div>
          <div className="myaccount__info">
            <div className="myaccount__fields">
              <div className="myaccount__field">
                <label htmlFor="nombre">Nombre:</label>
                <input
                  type="text"
                  name="nombre"
                  value={auth.data.nombre || ""}
                  readOnly
                  tabIndex="-1"
                />
              </div>
              <div className="myaccount__field">
                <label htmlFor="apellido">Apellido:</label>
                <input
                  type="text"
                  name="apellido"
                  value={auth.data.apellido || ""}
                  readOnly
                  tabIndex="-1"
                />
              </div>
              <div className="myaccount__field">
                <label htmlFor="mail">Mail:</label>
                <input
                  type="email"
                  name="mail"
                  value={auth.data.email || ""}
                  readOnly
                  tabIndex="-1"
                />
              </div>
            </div>
            <div className="myaccount__pts">
              <img src={coheteImg} alt="Cohete icono" />
              <p>
                {points}
                <span> pts</span>
              </p>
            </div>
          </div>
        </div>
        <div className="myaccount__items">
          <NavLink to={"/mis-pedidos"}>
            <div className="myaccount__item">
              <img src={pedidoImg} alt="Mis pedidos" className="item__icon" />
              <div className="item__info">
                <h3 className="item__title">Mis Pedidos</h3>
                <p className="item__desc">Ver los pedidos realizados</p>
              </div>
              <div className="item__arrow">
                <img src={flechaImg} alt="Ir a mis pedidos" />
              </div>
            </div>
          </NavLink>
          <NavLink to={"/mis-reservas"}>
            <div className="myaccount__item">
              <img src={reserva3} alt="Mis Reservas" className="item__icon" />
              <div className="item__info">
                <h3 className="item__title">Mis Reservas</h3>
                <p className="item__desc">Ver las reservas realizadas</p>
              </div>
              <div className="item__arrow">
                <img src={flechaImg} alt="Ir a mis reservas" />
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
