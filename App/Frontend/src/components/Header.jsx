import burgerIcon from '../assets/images/header-menu-burger.svg';
import userIcon from '../assets/images/header-user.svg';
import alaresLogo from '../assets/images/alares-logo.png';
import  '../styles/header.css';
import { useState } from 'react';
import Nav from './Nav'
import {Link} from 'react-scroll';



function Header() {
    const [clicked,setClicked] = useState(false);

    const handleClick = ()=>{
        setClicked(!clicked)
    }
    return (  
            <>
            <div className="header__container">
                <img onClick={handleClick} src={burgerIcon} className='header__icon header__icon-burger' alt="Menu Icon" />
                <div className='header__logo'>
                    <Link to='#home' spy={true} smooth={true} duration={500}><img src={alaresLogo} alt="Alares Logo" /></Link>
                </div>
                <img src={userIcon} className='header__icon' alt="Menu Icon" />
            </div>

            <Nav clicked={clicked} handleClick={handleClick}/>
            </>
            
    );
}

export default Header;