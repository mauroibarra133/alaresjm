import '../../styles/carta/carta.css'

// eslint-disable-next-line react/prop-types
function LoaderComponent({size}) {
    return (
      <div className={`loader-container ${size == 'minimal' ? 'small' : ''}`}>
        <div className={`loader ${size == 'minimal' ? 'small' : ''}`}></div>
      </div>
    );
  }
  
  export default LoaderComponent;