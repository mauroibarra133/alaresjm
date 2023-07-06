import burgerIcon from '../assets/images/header-menu-burger.svg';
import userIcon from '../assets/images/header-user.svg';
import alaresLogo from '../assets/images/alares-logo.png';
import  '../styles/header.css';

function Header() {
    return (  
            <div className="header__container">
                <img src={burgerIcon} className='header__icon header__icon-burger' alt="Menu Icon" />
                <div className='header__logo'>
                    <img src={alaresLogo} alt="Alares Logo" />
                </div>
                <img src={userIcon} className='header__icon' alt="Menu Icon" />
            </div>
    );
}

export default Header;