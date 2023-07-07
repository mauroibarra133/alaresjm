import '../styles/nav.css'
import {Link} from 'react-scroll';

// eslint-disable-next-line react/prop-types
function Nav({clicked, handleClick}) {
    return ( 

        <div className={`nav ${clicked ? 'active' : ''}`}>
        <div className="nav__container" >
            <Link to='#home' spy={true} smooth={true} duration={500} className='nav__item-container' onClick={handleClick}>
                <div className='nav__item' onClick={handleClick} ><p>HOME</p></div>
            </Link>
            <Link to='#quienes-somos' spy={true} smooth={true} duration={500} className='nav__item-container' onClick={handleClick}>
                <div className='nav__item'><p>QUIENES SOMOS</p></div>
            </Link>
            <Link to='#foodtruck' spy={true} smooth={true} duration={500} className='nav__item-container' onClick={handleClick}>
                <div className='nav__item'><p>FOODTRUCK</p></div>
            </Link>
            <Link to='/reservas' spy={true} smooth={true} duration={500} className='nav__item-container'>
                <div className='nav__item'><p>RESERVAS</p></div>
            </Link>
            <Link to='/carta' spy={true} smooth={true} duration={500} className='nav__item-container'>
                <div className='nav__item'><p>NUESTRA CARTA</p></div>
            </Link>
            <Link to='/clientes' spy={true} smooth={true} duration={500} className='nav__item-container'>
                <div className='nav__item'><p>MEJORES CLIENTES</p></div>
            </Link>
            <Link to='/delivery' spy={true} smooth={true} duration={500} className='nav__item-container'>
                <div className='nav__item'><p>DELIVERY</p></div>
            </Link>
            <Link to='#contacto' spy={true} smooth={true} duration={500} offset={-30} className='nav__item-container' onClick={handleClick}>
                <div className='nav__item'><p>CONTACTO</p></div>
            </Link>
        </div>
    </div>

     );
}

export default Nav;