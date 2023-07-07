import  { useEffect } from "react";
import '../../styles/hero/carrusel/carrusel.css';
import Glide from "@glidejs/glide";
import imgCarrusel1 from '../../assets/images/foodtruck-1.jpg';
import imgCarrusel2 from '../../assets/images/foodtruck-2.jpg';
import imgCarrusel3 from '../../assets/images/foodtruck-3.jpg';
import imgCarrusel4 from '../../assets/images/foodtruck-4.jpg';

const sliderConfiguration= {
  gap: 20,
  perView: 1,
  startAt: 0,
  type: "slider",
  breakpoints:{
    1000:{
      perView:1
    },
    2000:{
      perView:2
    }
  }
};

function Carrusel(){
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const slider = new Glide('.glide', sliderConfiguration);
  useEffect(() => {
    return () => slider.mount()
  }, [slider])

  return (
    <>
      {" "}
      <div className='glide'>
        <div className='glide__track' data-glide-el='track'>
          <ul className='glide__slides'>
            <li className='glide__slide slider'>
                <img src={imgCarrusel1} alt="" />
            </li>
            <li className='glide__slide slider'>
                <img src={imgCarrusel2} alt="" />

            </li>
            <li className='glide__slide slider'>
                <img src={imgCarrusel3} alt="" />
            </li>
            <li className='glide__slide slider'>
                <img src={imgCarrusel4} alt="" />
            </li>

          </ul>
        </div>
        <div className="glide__bullets" data-glide-el="controls[nav]">
            <button className="glide__bullet" data-glide-dir="=0"></button>
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