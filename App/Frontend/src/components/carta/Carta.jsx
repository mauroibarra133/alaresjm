import Footer from '../Footer'
import '../../styles/carta/carta.css'
import carritoImg from '../../assets/images/carrito.svg';

function Carta() {
    return ( 
        <>
            <div className='carta__container'>
                <div className="carta-path__container"> <p className='carta__path'>Home/ Carta</p></div>
               
                <div className='carta__tags-container'>
                    <div className="carta__tags">
                        <div className="carta__tag active">
                            <p>PIZZAS</p>
                        </div>
                        <div className="carta__tag">
                            <p>BURGERS</p>
                        </div>
                        <div className="carta__tag">
                            <p>PAPAS</p>
                        </div>
                        <div className="carta__tag">
                            <p>TRAGOS</p>
                        </div>
                        <div className="carta__tag">
                            <p>PASTA</p>
                        </div>
                        <div className="carta__tag">
                            <p>PASTA</p>
                        </div>
                    </div>

                </div>
                <div className="carta__carta">
                    <div className="carta__item">
                        <div className="carta__item-r1">
                            <p className="carta__item-name">MUZZA</p>
                            <p className="carta__item-price">$2200</p>
                        </div>
                        <div className="carta__item-r2">
                            <p className="carta__item-desc">QUESO MUZZARELLA</p>
                        </div>
                    </div>
                    <div className="carta__item">
                        <div className="carta__item-r1">
                            <p className="carta__item-name">MUZZA</p>
                            <p className="carta__item-price">$2200</p>
                        </div>
                        <div className="carta__item-r2">
                            <p className="carta__item-desc">QUESO MUZZARELLA</p>
                        </div>
                    </div>
                    <div className="carta__item">
                        <div className="carta__item-r1">
                            <p className="carta__item-name">MUZZA</p>
                            <p className="carta__item-price">$2200</p>
                        </div>
                        <div className="carta__item-r2">
                            <p className="carta__item-desc">QUESO MUZZARELLA</p>
                        </div>
                    </div>
                    <div className="carta__item">
                        <div className="carta__item-r1">
                            <p className="carta__item-name">MUZZA</p>
                            <p className="carta__item-price">$2200</p>
                        </div>
                        <div className="carta__item-r2">
                            <p className="carta__item-desc">QUESO MUZZARELLA</p>
                        </div>
                    </div>
                    <div className="carta__item">
                        <div className="carta__item-r1">
                            <p className="carta__item-name">MUZZA</p>
                            <p className="carta__item-price">$2200</p>
                        </div>
                        <div className="carta__item-r2">
                            <p className="carta__item-desc">QUESO MUZZARELLA</p>
                        </div>
                    </div>
                    <div className="carta__item">
                        <div className="carta__item-r1">
                            <p className="carta__item-name">MUZZA</p>
                            <p className="carta__item-price">$2200</p>
                        </div>
                        <div className="carta__item-r2">
                            <p className="carta__item-desc">QUESO MUZZARELLA</p>
                        </div>
                    </div>
                    <div className="carta__item">
                        <div className="carta__item-r1">
                            <p className="carta__item-name">MUZZA</p>
                            <p className="carta__item-price">$2200</p>
                        </div>
                        <div className="carta__item-r2">
                            <p className="carta__item-desc">QUESO MUZZARELLA</p>
                        </div>
                    </div>
                    <div className="carta__item">
                        <div className="carta__item-r1">
                            <p className="carta__item-name">MUZZA</p>
                            <p className="carta__item-price">$2200</p>
                        </div>
                        <div className="carta__item-r2">
                            <p className="carta__item-desc">QUESO MUZZARELLA</p>
                        </div>
                    </div>
                </div>
                <div className="carta__buttons">
                    <button className="carta__button-vermas carta__button"><p>VER MAS</p></button>
                    <button className="carta__button-carrito carta__button">
                        <p>CARRITO</p>
                        <img src={carritoImg} alt="" />
                        </button>
                </div>
            </div>
            <Footer/>
            
        </>

     );
}

export default Carta;