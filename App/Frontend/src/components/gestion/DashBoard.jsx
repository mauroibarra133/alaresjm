import '../../styles/dashboard/dashboard.css'
import pedidosIcon from '../../assets/images/entrega-de-pedidos.png';
import reservasIcon from '../../assets/images/reserva.png';
import dudasIcon from '../../assets/images/cotizacion.png';
import menuIcon from '../../assets/images/menu.png';
import productIcon from '../../assets/images/estrella.png';
import priceIcon from '../../assets/images/dolar.png';
import VerPedidos from "./VerPedidos";
import VerReservas from "./VerReservas";
import { useState } from "react";
import Path from "../Path";

function DashBoard() {
    const [activeTag, setActiveTag] = useState(0);
    const nameTags = ["Ver Pedidos", "Ver Reservas", "Ver Dudas", "Carta", "Productos", "Precios"]
    function handleTagClick(tagId) {
        if (activeTag === tagId) {
            return;
        }
        setActiveTag(tagId);
    }
    return (
        <div className="dashboard">
            <div className="dashboard__nav">
                <div onClick={() => handleTagClick(0)}>
                    <img src={pedidosIcon} alt="Pedidos" className={`dashboard__link-icon ${activeTag == 0 ? 'active' : ''}`} />
                </div>
                <div  onClick={() => handleTagClick(1)}>
                    <img src={reservasIcon} alt="Reservas" className={`dashboard__link-icon ${activeTag == 1 ? 'active' : ''}`} />
                </div>
                <div  onClick={() => handleTagClick(2)}>
                    <img src={dudasIcon} alt="Dudas" className={`dashboard__link-icon ${activeTag == 2 ? 'active' : ''}`} />
                </div>
                <div  onClick={() => handleTagClick(3)}>
                    <img src={menuIcon} alt="Carta" className={`dashboard__link-icon ${activeTag == 3 ? 'active' : ''}`} />
                </div>
                <div  onClick={() => handleTagClick(4)}>
                    <img src={productIcon} alt="Productos" className={`dashboard__link-icon ${activeTag == 4 ? 'active' : ''}`} />
                </div>
                <div onClick={() => handleTagClick(5)}>
                    <img src={priceIcon} alt="Productos" className={`dashboard__link-icon ${activeTag == 5 ? 'active' : ''}`} />
                </div>
                {/* Agrega el resto de los links aquí */}
            </div>
            <div className="dashboard__content">
                <Path goTo={'home'} pathPrev={'Dashboard'} pathActual={nameTags[activeTag]}></Path>
                {activeTag === 0 && <VerPedidos />}
                {activeTag === 1 && <VerReservas />}
            </div>
        </div>
    );
}

export default DashBoard;
