import '../styles/carta/carta.css'
// eslint-disable-next-line react/prop-types
function Path({pathPrev,pathActual}) {
    return ( 

        <div className="carta-path__container"><p className='carta__path'>{pathPrev}</p><span className='carta__path-span'>{`/${pathActual}`}</span></div>

     );
}

export default Path;