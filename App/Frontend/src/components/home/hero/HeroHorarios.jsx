import repartidorIcon from '../../../assets/images/repartidor-icon-min.webp'
import '../../../styles/hero/heroHorarios.css'
import { NavLink } from 'react-router-dom';

function HeroHorarios() {
    return ( 
        <div className="hero-horarios__container" name='#horarios'>
            <div className="hero-horarios">
                <div className="hero-horarios__text-section">
                    <div className="hero-horarios__text">
                        <h3 className="hero-horarios__title">Donde estamos</h3>
                        <p>Estamos ubicados en calle Castulo Peña 582, Jesus Maria</p>
                    </div>

                    <div className="hero-horarios__text">
                        <h3 className="hero-horarios__title">Horarios</h3>
                        <p> De 12:00 pm a 15:00 pm y 19:00 pm a 03:00 am</p>
                    </div>

                </div>
              <div className="hero-horarios__map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.6874214572867!2d-64.098024!3d-30.979203999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432639d1898555f%3A0x576e166fa4c9dc86!2sA&#39;lares!5e0!3m2!1ses!2sar!4v1692594574161!5m2!1ses!2sar" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>

            </div>
            <NavLink className='hero-horarios__button' to='/delivery'>
                    <p>Tenemos Delivery</p>
                    <img src={repartidorIcon} alt="Icono de Repartidor" />
                </NavLink>  
        </div>
     );
}

export default HeroHorarios;