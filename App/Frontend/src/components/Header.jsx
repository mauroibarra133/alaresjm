import burgerIcon from '../assets/images/header-menu-burger.webp';
import userIcon from '../assets/images/header-user.webp';
import alaresLogo from '../assets/images/alares-logo.webp';
import  '../styles/header.css';
import { useState } from 'react';
import Nav from './Nav'
import { NavLink } from 'react-router-dom';
import NavUser from './NavUser';
import Overlay from './Overlay';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';
import { SERVER_HOST } from '../utils/constants';
function Header() {
    //states
    const [burgerClicked,setBurgerClicked] = useState(false);
    const [userClicked,setUserClicked] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const {logout} = useAuth()
    //Functions
    const handleBurgerClick = ()=>{
        if(!burgerClicked && userClicked){
            setUserClicked(!userClicked)
        }
        setShowOverlay(!burgerClicked);
        setBurgerClicked(!burgerClicked)
    }

    const handleUserClick= ()=>{
        if(burgerClicked && !userClicked){
            setBurgerClicked(!burgerClicked)
        }
        setShowOverlay(!userClicked);
        setUserClicked(!userClicked)

    }
    const closeSession = async ()=>{
        try {
            await axios.get(`${SERVER_HOST}/api/logout`,{withCredentials: true})
            handleUserClick()
            logout()
            
        } catch (error) {
            console.log(error);
        }
    }
    return (  
            <>
            <div className="header__container">
                <img onClick={handleBurgerClick} src={burgerIcon} className='header__icon header__icon-burger' alt="Menu Icon" />
                <div className='header__logo'>
                    <NavLink to='/'  duration={500}><img src={alaresLogo} alt="Alares Logo" /></NavLink>
                </div>
                <img onClick={handleUserClick} src={userIcon} className='header__icon' alt="Menu Icon" />
            </div>

            <Nav clicked={burgerClicked} handleBurgerClick={handleBurgerClick}/>
            <NavUser clicked={userClicked} handleUserClick={handleUserClick} closeSession={closeSession}/>
            {showOverlay && (
                <Overlay></Overlay>
            )}
            </>
            
    );
}

export default Header;