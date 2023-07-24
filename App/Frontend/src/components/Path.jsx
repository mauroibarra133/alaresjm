import '../styles/path.css';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
function Path({pathPrev,pathActual, goTo}) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/${goTo}`.toLowerCase());
    }

    return ( 

        <div className="path__container"><p className={`path ${pathPrev == 'Dashboard' ? 'Dashboard' : ''}`} onClick={handleClick}>{pathPrev}</p><span className='path-span'>{`/${pathActual}`}</span></div>

     );
}

export default Path;