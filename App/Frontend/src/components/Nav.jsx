/* eslint-disable react/prop-types */
import '../styles/nav.css'
import {Link} from 'react-scroll';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

function Nav({clicked, handleBurgerClick}) {
    //Hooks
    const location =useLocation()
    const navigate =useNavigate()

    //Functions
    function handleLocation(){
        if(location.pathname != '/'){
            navigate('/')
        }
        handleBurgerClick()
    }
 return ( 

        <div className={`nav ${clicked ? 'active' : ''}`}>
        <div className="nav__container" >
            <Link to='#home' spy smooth className='nav__item-container' >
                <div className='nav__item' onClick={handleLocation} ><p>HOME</p></div>
            </Link>
            <Link to='#quienes-somos' spy smooth duration={500} className='nav__item-container'>
                <div className='nav__item'  onClick={handleLocation} ><p>QUIENES SOMOS</p></div>
            </Link>
            <Link to='#horarios' spy smooth duration={500} className='nav__item-container'>
                <div className='nav__item'  onClick={handleLocation} ><p>HORARIOS</p></div>
            </Link>
            <Link to='#foodtruck'  spy smooth duration={500} offset={-30} className='nav__item-container'>
                <div className='nav__item' onClick={handleLocation}><p>FOODTRUCK</p></div>
            </Link>
            <NavLink to='/reservas'  className='nav__item-container' >
                <div className='nav__item' onClick={handleLocation}><p>RESERVAS</p></div>
            </NavLink>
            <NavLink to='/carta'   className='nav__item-container' >
                <div className='nav__item' onClick={handleLocation}><p>NUESTRA CARTA</p></div>
            </NavLink>
            <NavLink to='/ranking'   className='nav__item-container' >
                <div className='nav__item' onClick={handleLocation}><p>MEJORES CLIENTES</p></div>
            </NavLink>
            <NavLink to='/delivery'   className='nav__item-container' >
                <div className='nav__item' onClick={handleLocation}><p>DELIVERY</p></div>
            </NavLink>
            <Link to='#contacto'  spy smooth duration={500} offset={-30} className='nav__item-container' >
                <div className='nav__item' onClick={handleLocation}><p>CONTACTO</p></div>
            </Link>
        </div>
    </div>

     );
}

export default Nav;