import confirmedStatus from '../assets/images/comprobar.webp'
import waitStatus from '../assets/images/procesando.webp'
import badStatus from '../assets/images/cancelar.webp'
import cookingStatus from '../assets/images/sombrero-de-cocinero.webp'
import readyStatus from '../assets/images/caja-de-entrega.webp'
import OKStatus from '../assets/images/comprobado.webp'
import deliveryStatus from '../assets/images/enviado.webp'
import noReadStatus from '../assets/images/mensaje-no-leido.webp'
import readStatus from '../assets/images/doble-verificacion.webp'

export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[-_]).{8,}$/
export const EMAIL_REGEX =  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
export const ONLY_LETTERS = /^[A-Za-z\s]+$/
export const ONLY_NUMBERS = /^[0-9]+$/ 
export const ADDRESS_REGEX = /^[a-zA-Z0-9\s.,#-]+$/;
export const PRECIO__REGEX = /^\$\d+$/
export const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;



export const SERVER_HOST = 'http://localhost:4000';
// export const SERVER_HOST = 'https://alaresjm.onrender.com'

export const meses = {
    0: 'Enero',
    1: 'Febrero',
    2: 'Marzo',
    3: 'Abril',
    4: 'Mayo',
    5: 'Junio',
    6: 'Julio',
    7: 'Agosto',
    8: 'Septiembre',
    9: 'Octubre',
    10: 'Noviembre',
    11: 'Diciembre'
  };
  
  export const ordersStatus = [
    {
      status: "A Confirmar",
      img: waitStatus
    },
    {
      status: "Confirmado",
      img: confirmedStatus
    },
    {
      status: "En Preparacion",
      img: cookingStatus
    },
    {
        status: "Listo",
        img: readyStatus
    },
    {
        status: "En Reparto",
        img: deliveryStatus
    },
    {
        status: "Entregado",
        img: OKStatus
    },
    {
      status: "Reservado",
      img: OKStatus
  },
    {
        status: "Cancelado",
        img: badStatus
    },
    {
      status: "No Leido",
      img: noReadStatus
    },
    {
      status: "Leido",
      img: readStatus
    },
    {
      status: "Respondido",
      img: OKStatus
    }
  ];