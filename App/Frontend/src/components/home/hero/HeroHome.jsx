import '../../../styles/hero/heroHome.css'
import {NavLink} from 'react-router-dom'
function HeroHome() {
    return ( 
        <div className="hero-home__container" name='#home'> 
            <div className="hero-home__text-container">
                <h2 className="hero-home__title1">Conoce nuestras</h2>
                <h2 className="hero-home__title2">Burgers</h2>

                <NavLink to={'/carta'}>
                    <button className="hero-home__button button">
                        Ver Carta
                    </button>
                </NavLink>

            </div>
        </div>
     );


    }

export default HeroHome;