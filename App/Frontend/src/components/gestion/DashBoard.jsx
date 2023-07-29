import '../../styles/dashboard/dashboard.css'
import pedidosIcon from '../../assets/images/entrega-de-pedidos.png';
import reservasIcon from '../../assets/images/reserva.png';
import dudasIcon from '../../assets/images/cotizacion.png';
import menuIcon from '../../assets/images/menu.png';
import VerPedidos from "./VerPedidos";
import VerReservas from "./VerReservas";
import VerDudas from "./VerDudas";
import { useState, useEffect } from "react";
import Path from "../Path";
import VerCarta from './VerCarta';

function DashBoard() {
    const [activeTag, setActiveTag] = useState(0);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);  
    const nameTags = ["Ver Pedidos", "Ver Reservas", "Ver Dudas", "Carta"]

    useEffect(() => {
        const handleResize = () => {
          setIsLargeScreen(window.innerWidth > 768);
        };
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

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
                    <div onClick={() => handleTagClick(0)}>
                        <img src={pedidosIcon} alt="Pedidos" className={`dashboard__link-icon ${activeTag == 0 ? 'active' : ''}`} />
                        {isLargeScreen && (
                                        <p>{nameTags[0]}</p>
                                    )}
                    </div>
                    <div  onClick={() => handleTagClick(1)}>
                        <img src={reservasIcon} alt="Reservas" className={`dashboard__link-icon ${activeTag == 1 ? 'active' : ''}`} />
                        {isLargeScreen && (
                                        <p>{nameTags[1]}</p>
                                    )}
                    </div>
                    <div  onClick={() => handleTagClick(2)}>
                        <img src={dudasIcon} alt="Dudas" className={`dashboard__link-icon ${activeTag == 2 ? 'active' : ''}`} />
                        {isLargeScreen && (
                                        <p>{nameTags[2]}</p>
                                    )}
                    </div>
                    <div  onClick={() => handleTagClick(3)}>
                        <img src={menuIcon} alt="Carta" className={`dashboard__link-icon ${activeTag == 3 ? 'active' : ''}`} />
                        {isLargeScreen && (
                                        <p>{nameTags[3]}</p>
                                    )}
                    </div>
                </div>

                {/* Agrega el resto de los links aquí */}
            </div>
            <div className="dashboard__content">
                <Path goTo={'home'} pathPrev={'Dashboard'} pathActual={nameTags[activeTag]}></Path>
                {activeTag === 0 && <VerPedidos />}
                {activeTag === 1 && <VerReservas />}
                {activeTag === 2 && <VerDudas />}
                {activeTag === 3 && <VerCarta />}
            </div>
        </div>
    );
}

export default DashBoard;
