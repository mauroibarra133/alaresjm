import iconPasta from '../../assets/images/quienesSomos-icon-pasta.png'
import iconBurger from '../../assets/images/quienesSomos-icon-burger.png'
import iconPizza from '../../assets/images/quienesSomos-icon-pizza.png'
import iconTragos from '../../assets/images/quienesSomos-icon-tragos.png'
import '../../styles/hero/heroQuienesSomos.css'

function HeroQuienesSomos() {
    return ( 

        <div className="heroQuienesSomos-overlay">
            <div className="hero">
                <div className="hero-title"><h2>Nuestras <br /> Especialidades</h2></div>
                <div className="hero-text"><p>
                ¡Bienvenido al paraíso de las comidas rápidas!
                Déjate seducir por nuestro irresistible bar,
                donde los sabores audaces y los ingredientes
                frescos se combinan para crear deliciosas 
                obras maestras culinarias. ¡Prepárate para 
                una experiencia única llena de sabor, rapidez 
                y satisfacción en cada bocado!
                    </p></div>
                <div className="hero-icons">
                        <div className="icon">
                            <img src={iconPasta} alt="Icono de Pasta" />
                            <p className='icon-text'>PASTA</p>
                        </div>

                        <div className="icon">
                            <img src={iconTragos} alt="Icono de Trago" />
                            <p className='icon-text'>TRAGOS</p>
                        </div>
                        <div className="icon">
                            <img src={iconBurger} alt="Icono de Hamburguesa" />
                            <p className='icon-text'>BURGER</p>
                        </div>
                        <div className="icon">
                            <img src={iconPizza} alt="Icono de Pizza" />
                            <p className='icon-text'>PIZZA</p>
                        </div>
                </div>
            </div>
            
        </div>
        
     );
}

export default HeroQuienesSomos;