/* eslint-disable react/prop-types */

function Tag({nombre, isActive, onClick }) {
    function handleClick(){
        onClick();
    }

    return ( 
        <div className={`carta__tag ${isActive ? 'active' : ''} `}  onClick={handleClick}>
            <p>{nombre}</p>
        </div>
     );
}

export default Tag;