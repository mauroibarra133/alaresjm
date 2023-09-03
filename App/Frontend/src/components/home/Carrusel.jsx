import  { useEffect } from "react";
import '../../styles/hero/carrusel/carrusel.css';
import Glide from "@glidejs/glide";
import imgCarrusel1 from '../../assets/images/foodtruck-1-min.webp';
import imgCarrusel2 from '../../assets/images/foodtruck-2-min.webp';
import imgCarrusel3 from '../../assets/images/foodtruck-3-min.webp';
import imgCarrusel4 from '../../assets/images/foodtruck-4-min.webp';

const sliderConfiguration= {
  gap: 20,
  perView: 1,
  startAt: 0,
  type: "slider",
};

function Carrusel(){

  //Use effects
  useEffect(()=>{
    let sliderExist = Array.from(document.querySelectorAll(".glide"));
    sliderExist.forEach((item)=>{
      const slider =  new Glide(item, sliderConfiguration);
      slider.mount()
    })
  },[])

  return (
    <>
      {" "}
      <div className='glide glide--ltr glide--slider glide--swipeable'>
        <div className='glide__track' data-glide-el='track'>
          <ul className='glide__slides'>
            <li className='glide__slide slider glide__slide--active'>
                <img src={imgCarrusel1} alt="Imagen Carrusel" />
            </li>
            <li className='glide__slide slider'>
                <img src={imgCarrusel2} alt="Imagen Carrusel" />

            </li>
            <li className='glide__slide slider'>
                <img src={imgCarrusel3} alt="Imagen Carrusel" />
            </li>
            <li className='glide__slide slider'>
                <img src={imgCarrusel4} alt="Imagen Carrusel" />
            </li>
          </ul>
        </div>
        <div className="glide__bullets" data-glide-el="controls[nav]">
            <button className="glide__bullet glide__bullet--active" data-glide-dir="=0"></button>
            <button className="glide__bullet" data-glide-dir="=1"></button>
            <button className="glide__bullet" data-glide-dir="=2"></button>
            <button className="glide__bullet" data-glide-dir="=3"></button>
    </div>
        <div className='glide__arrows' data-glide-el='controls'>
          <button
            className='glide__arrow glide__arrow--prev'
            data-glide-dir='<'
          >
            Volver
          </button>
          <button
            className='glide__arrow glide__arrow--next'
            data-glide-dir='>'
          >
            Avanzar
          </button>
        </div>
      </div>
    </>
  )
}

export default Carrusel;