import clockIcon from '../../assets/images/clock-icon.svg'
import locationIcon from '../../assets/images/location-icon.svg'
import repartidorIcon from '../../assets/images/repartidor-icon.png'
import '../../styles/hero/heroHorarios.css'

function HeroHorarios() {
    return ( 
        <div className="hero-horarios__container">
            <div className="hero-horarios">
                <div className="hero-horarios__sections">
                    <div className="hero-horarios__section">
                        <h3 className="hero-horarios__title">Nuestros Horarios</h3>
                        <div className="hero-horarios__section-container">
                            <img className="hero-horarios-section__icon" src={clockIcon} alt="Icono de Horario" />
                            <div className="hero-horarios-section__text">
                                <p>DE 12:00 pm A 15:00 pm</p>
                                <p>DE 19:00 pm A 03:00 am</p>
                            </div>

                        </div>
                    </div>
                    <div className="hero-horarios__section">
                        <h3 className="hero-horarios__title">DONDE ESTAMOS</h3>
                        <div className="hero-horarios__section-container">
                            <img className="hero-horarios-hero__icon" src={locationIcon} alt="Icono de Ubicacion" />
                            <div className="hero-horarios-section__text">
                                <p>DE 19:00 pm A 03:00 am</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <button className='hero-horarios__button'>
                    <p>Tenemos Delivery</p>
                    <img src={repartidorIcon} alt="Icono de Repartidor" />
                </button>  
            </div>

        </div>
     );
}

export default HeroHorarios;