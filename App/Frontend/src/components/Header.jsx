import burgerIcon from '../assets/images/header-menu-burger.svg';
import userIcon from '../assets/images/header-user.svg';
import alaresLogo from '../assets/images/alares-logo.png';
import  '../styles/header.css';

function Header() {
    return (  
            <div className="header-container">
                <img src={burgerIcon} className='header-icon burger' alt="Menu Icon" />
                <div className='header-logo'>
                    <img src={alaresLogo} alt="Alares Logo" />
                </div>
                <img src={userIcon} className='header-icon' alt="Menu Icon" />
            </div>
    );
}

export default Header;