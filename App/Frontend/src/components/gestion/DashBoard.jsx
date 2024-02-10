import "../../styles/dashboard/dashboard.css";
import { useState, useEffect } from "react";
import ordersIcon from "../../assets/images/entrega-de-pedidos.webp";
import bookingsIcon from "../../assets/images/reserva.webp";
import doubtIcon from "../../assets/images/cotizacion.webp";
import menuIcon from "../../assets/images/menu.webp";
import VerPedidos from "./VerPedidos";
import VerReservas from "./VerReservas";
import VerDudas from "./VerDudas";
import Path from "../Path";
import VerCarta from "./VerCarta";

function DashBoard() {
  //States and constants
  const [activeTag, setActiveTag] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
  const nameTags = ["Ver Pedidos", "Ver Reservas", "Ver Dudas", "Carta"];
  const imgTags = [ordersIcon, bookingsIcon, doubtIcon, menuIcon];

  //Use Effects
  useEffect(() => {
    document.title = "Alares | Dashboard ";
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //Functions
  function handleTagClick(tagId) {
    if (activeTag === tagId) {
      return;
    }
    setActiveTag(tagId);
  }

  return (
    <div className="dashboard">
      <div className="dashboard__nav">
        <div className="dashboard__links-wrapper">
          {nameTags.map((tag, i) => (
            <div onClick={() => handleTagClick(i)} key={i}>
              <img
                src={imgTags[i]}
                alt={tag}
                className={`dashboard__link-icon ${
                  activeTag == i ? "active" : ""
                }`}
              />
              {isLargeScreen && <p>{nameTags[i]}</p>}
            </div>
          ))}
        </div>

        {/* Agrega el resto de los links aquí */}
      </div>
      <div className="dashboard__content">
        <Path
          goTo={"home"}
          pathPrev={"Dashboard"}
          pathActual={nameTags[activeTag]}
        ></Path>
        {activeTag === 0 && <VerPedidos />}
        {activeTag === 1 && <VerReservas />}
        {activeTag === 2 && <VerDudas />}
        {activeTag === 3 && <VerCarta />}
      </div>
    </div>
  );
}

export default DashBoard;
