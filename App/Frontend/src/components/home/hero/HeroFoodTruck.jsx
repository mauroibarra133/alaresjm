import '../../../styles/hero/carrusel/carrusel.css'
import '../../../styles/hero/heroFoodtruck.css'
import Carrusel from '../Carrusel'

function HeroFoodTruck() {
    return ( 
        <div className="hero-foodtruck__container" name='#foodtruck'>
            <div className="hero-foodtruck__title">
                <h1>Nuestro Foodtruck</h1>
            </div>
            <Carrusel/>
            <div className="hero-foodtruck__button"><p>Contactanos</p></div>
        </div>
     );
}

export default HeroFoodTruck;