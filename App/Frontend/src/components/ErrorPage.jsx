import '../styles/errorPage.css'
import foodImg from '../assets/images/error-comida.webp';
import forkImg from '../assets/images/error-fork.webp';
import knifeImg from '../assets/images/error-knife.webp';

export default function ErrorPage() {

  return (
    <div className="error-page">
      <div className="error-page__container">
        <div className="error-page__numbers-container">
          <div className='error-page__numbers'>
            <p className="error-numbers">4</p>
            <div className="error-img">
              <img src={forkImg} alt="Imagen de un tenedor" />
              <img src={foodImg} alt="Imagen de un plato de comida" />
              <img src={knifeImg} alt="Imagen de un cuchillo" />
            </div>
            <p className="error-numbers">4</p>
          </div>

        </div>
        <div className="error-page__title">Page not found</div>
        <div className="error-page__msg">Lo sentimos, la pagina solicitada no se encuentra disponible</div>
      </div>
    </div>
    
  );
}