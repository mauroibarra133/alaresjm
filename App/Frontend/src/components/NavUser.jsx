import '../styles/nav.css'
import { NavLink} from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function NavUser({clicked, handleUserClick}) {
 return ( 

        <div className={`nav ${clicked ? 'active'  : ''}`}>
        <div className="nav__container user" >
            <NavLink to='/api/login'  className='nav__item-container' >
                <div className='nav__item' onClick={handleUserClick}><p>INICIAR SESION</p></div>
            </NavLink>
        </div>
    </div>

     );
}

export default NavUser;