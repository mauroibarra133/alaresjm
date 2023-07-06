import clockIcon from '../../assets/images/clock-icon.svg'
import locationIcon from '../../assets/images/location-icon.svg'
import repartidorIcon from '../../assets/images/repartidor-icon.png'
import '../../styles/hero/heroHorarios.css'

function HeroHorarios() {
    return ( 
        <div className="heroHorarios-container">
            <div className="hero-horarios">
                <div className="hero-horarios-sections">
                    <div className="hero-horarios-section">
                        <h3 className="hero-horarios-title">Nuestros Horarios</h3>
                        <div className="horarios-section-container">
                            <img className="horarios-section-icon" src={clockIcon} alt="Icono de Horario" />
                            <div className="horarios-section-text">
                                <p>DE 12:00 pm A 15:00 pm</p>
                                <p>DE 19:00 pm A 03:00 am</p>
                            </div>

                        </div>
                    </div>
                    <div className="hero-horarios-section">
                        <h3 className="hero-horarios-title">DONDE ESTAMOS</h3>
                        <div className="horarios-section-container">
                            <img className="horarios-hero-icon" src={locationIcon} alt="Icono de Ubicacion" />
                            <p>DE 19:00 pm A 03:00 am</p>
                        </div>
                    </div>
                </div>
                
                <button className='hero-horarios-button'>
                    <p>Tenemos Delivery</p>
                    <img src={repartidorIcon} alt="Icono de Repartidor" />
                </button>  
            </div>

        </div>
     );
}

export default HeroHorarios;