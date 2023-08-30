import '../styles/carta/carta.css'
// eslint-disable-next-line react/prop-types
function LoaderComponent({size,color}) {
    return (
      <div className={`loader-container ${size == 'small' ? 'small' : ''} `}>
        <div className={`loader ${size == 'small' ? 'small' : ''} ${color}`}></div>
      </div>
    );
  }
  
  export default LoaderComponent;