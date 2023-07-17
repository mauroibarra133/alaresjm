import '../styles/nav.css'
import { NavLink} from 'react-router-dom';
import {useAuth} from '../hooks/useAuth'
// eslint-disable-next-line react/prop-types
function NavUser({clicked, handleUserClick}) {

    const {auth} = useAuth()

    
 return ( 

        <div className={`nav ${clicked ? 'active'  : ''} user`}>
        <div className="nav__container user" >
            {!auth.isLogin && (
                <NavLink to='/api/login'  className='nav__item-container' >
                    <div className='nav__item user' onClick={handleUserClick}><p>INICIAR SESION</p></div>
                </NavLink>
            )}
            {auth.isLogin && (
            <NavLink to='/api/login'  className='nav__item-container' >
                <div className='nav__item user' onClick={handleUserClick}><p>MI CUENTA</p></div>
            </NavLink>
            )}


        </div>
    </div>

     );
}

export default NavUser;