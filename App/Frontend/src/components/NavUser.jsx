/* eslint-disable react/prop-types */
import '../styles/nav.css'
import { NavLink} from 'react-router-dom';
import {useAuth} from '../hooks/useAuth'
function NavUser({clicked, handleUserClick,closeSession}) {

    const {auth} = useAuth()
    
 return ( 

        <div className={`nav ${clicked ? 'active'  : ''} user`}>
        <div className="nav__container user" >
            {!auth.isLogin && (
                <NavLink to='/login'  className='nav__item-container user' >
                    <div className='nav__item user' onClick={handleUserClick}><p>INICIAR SESION</p></div>
                </NavLink>
            )}
            {auth.isLogin && (
            <NavLink to='/mi-cuenta'  className='nav__item-container user' >
                <div className='nav__item user' onClick={handleUserClick}><p>MI CUENTA</p></div>
            </NavLink>
            )}
                        {(auth.isLogin) && (
            <NavLink to='/mis-pedidos'  className='nav__item-container user' >
                <div className='nav__item user' onClick={handleUserClick}><p>MIS PEDIDOS</p></div>
            </NavLink>
            )}
                        {(auth.isLogin) && (
            <NavLink to='/mis-reservas'  className='nav__item-container user' >
                <div className='nav__item user' onClick={handleUserClick}><p>MIS RESERVAS </p></div>
            </NavLink>
            )}  
                {(auth.isLogin && ((auth.data.rol == "Dev" || auth.data.rol == "Guest") || auth.data.rol == "Admin")) && (
            <NavLink to='/dashboard'  className='nav__item-container user' >
                <div className='nav__item user' onClick={handleUserClick}><p>GESTIONAR WEB </p></div>
            </NavLink>
            )}
            
                        {auth.isLogin && (
            <NavLink to='/'  className='nav__item-container user' >
                <div className='nav__item user' onClick={closeSession}><p>CERRAR SESION</p></div>
            </NavLink>
            )}

        </div>
    </div>

     );
}

export default NavUser;