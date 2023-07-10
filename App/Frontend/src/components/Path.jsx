import '../styles/path.css'

// eslint-disable-next-line react/prop-types
function Path({pathPrev,pathActual}) {
    return ( 

        <div className="path__container"><p className='path'>{pathPrev}</p><span className='path-span'>{`/${pathActual}`}</span></div>

     );
}

export default Path;