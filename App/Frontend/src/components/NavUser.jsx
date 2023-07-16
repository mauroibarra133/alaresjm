import '../styles/nav.css'
import { NavLink} from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function NavUser({clicked, handleUserClick}) {
 return ( 

        <div className={`nav ${clicked ? 'active'  : ''} user`}>
        <div className="nav__container user" >
            <NavLink to='/api/login'  className='nav__item-container' >
                <div className='nav__item user' onClick={handleUserClick}><p>INICIAR SESION</p></div>
            </NavLink>
            <NavLink to='/api/login'  className='nav__item-container' >
                <div className='nav__item user' onClick={handleUserClick}><p>MI CUENTA</p></div>
            </NavLink>
        </div>
    </div>

     );
}

export default NavUser;