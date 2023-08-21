import '../../../styles/hero/carrusel/carrusel.css'
import '../../../styles/hero/heroFoodtruck.css'
import Carrusel from '../Carrusel'
import {Link} from 'react-scroll';



function HeroFoodTruck() {
    return ( 
        <div className="hero-foodtruck__container" name='#foodtruck'>
            <div className="hero-foodtruck__title">
                <h1>Nuestro Foodtruck</h1>
                <p>¡Sabores sobre ruedas que despiertan tus sentidos! Bienvenidos a nuestro Food Truck, donde la pasión culinaria se encuentra con la comodidad de la calle. Deliciosos platos gourmet servidos con un toque de creatividad y sazón inigualable. Únete a nosotros en un viaje gastronómico único, donde cada bocado es una aventura. ¿Listo para saborear lo extraordinario?</p>
            </div>
            <Carrusel/>
            <Link to='#contacto' spy={true} smooth={true} duration={1000} offset={-50}><div className="hero-foodtruck__button"><p>Contactanos</p></div></Link>
        </div>
     );
}

export default HeroFoodTruck;