import '../../../styles/hero/carrusel/carrusel.css'
import '../../../styles/hero/heroFoodtruck.css'
import Carrusel from '../Carrusel'
import {Link} from 'react-scroll';



function HeroFoodTruck() {
    return ( 
        <div className="hero-foodtruck__container" name='#foodtruck'>
            <div className="hero-foodtruck__title">
                <h1>Nuestro Foodtruck</h1>
            </div>
            <Carrusel/>
            <Link to='#contacto' spy={true} smooth={true} duration={1000} offset={-50}><div className="hero-foodtruck__button"><p>Contactanos</p></div></Link>
        </div>
     );
}

export default HeroFoodTruck;