import burgerIcon from '../assets/images/header-menu-burger.svg';
import userIcon from '../assets/images/header-user.svg';
import alaresLogo from '../assets/images/alares-logo.png';
import  '../styles/header.css';
import { useState } from 'react';
import Nav from './Nav'
import { NavLink } from 'react-router-dom';
import NavUser from './NavUser';
import Overlay from './Overlay';

function Header() {
    const [burgerClicked,setBurgerClicked] = useState(false);
    const [userClicked,setUserClicked] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);


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
            <NavUser clicked={userClicked} handleUserClick={handleUserClick}/>
            {showOverlay && (
                <Overlay></Overlay>
            )}
            </>
            
    );
}

export default Header;