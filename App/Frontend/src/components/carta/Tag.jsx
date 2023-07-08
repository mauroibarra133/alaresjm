/* eslint-disable react/prop-types */
import { useState} from 'react';


function Tag(props) {
    const [categoryClicked,setCategoryClicked] = useState(false);

    function handleClick(){
        setCategoryClicked(!categoryClicked)
    }

    return ( 
        <div className={`carta__tag ${categoryClicked ? 'active' : ''}`}  onClick={handleClick}>
            <p>{props.nombre}</p>
        </div>
     );
}

export default Tag;