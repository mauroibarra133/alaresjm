/* eslint-disable react/prop-types */

function Tag({name, isActive, onClick }) {
    function handleClick(){
        onClick();
    }

    return ( 
        <div className={`menu__tag ${isActive ? 'active' : ''} `}  onClick={handleClick}>
            <p>{name}</p>
        </div>
     );
}

export default Tag;