import iconPasta from '../../../assets/images/pasta-min.webp'
import iconBurger from '../../../assets/images/hamburgo-min.webp'
import iconPizza from '../../../assets/images/pizza-min.webp'
import iconTragos from '../../../assets/images/martini-min.webp'
import '../../../styles/hero/heroQuienesSomos.css'

function HeroQuienesSomos() {
    return ( 

        <div className="hero-quienessomos__overlay" name='#quienes-somos'>
            <div className="hero-quienessomos">
                <div className="hero-quienessomos__title"><h2>Nuestras <br /> Especialidades</h2></div>
                <div className="hero-quienessomos__text"><p>
                ¡Bienvenido al paraíso de las comidas rápidas!
                Déjate seducir por nuestro irresistible bar,
                donde los sabores audaces y los ingredientes
                frescos se combinan para crear deliciosas 
                obras maestras culinarias. ¡Prepárate para 
                una experiencia única llena de sabor, rapidez 
                y satisfacción en cada bocado!
                    </p></div>
                <div className="hero-quienessomos__icons">
                        <div className="hero-quienessomos__icon">
                            <img src={iconPasta} alt="Icono de Pasta" />
                            <p className='hero-quienessomos__icon-text'>PASTA</p>
                        </div>

                        <div className="hero-quienessomos__icon">
                            <img src={iconTragos} alt="Icono de Trago" />
                            <p className='hero-quienessomos__icon-text'>TRAGOS</p>
                        </div>
                        <div className="hero-quienessomos__icon">
                            <img src={iconBurger} alt="Icono de Hamburguesa" />
                            <p className='hero-quienessomos__icon-text'>BURGER</p>
                        </div>
                        <div className="hero-quienessomos__icon">
                            <img src={iconPizza} alt="Icono de Pizza" />
                            <p className='hero-quienessomos__icon-text'>PIZZA</p>
                        </div>
                </div>
            </div>
            
        </div>
        
     );
}

export default HeroQuienesSomos;