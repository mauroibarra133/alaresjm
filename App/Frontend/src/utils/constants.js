import confirmedStatus from '../assets/images/comprobar.png'
import waitStatus from '../assets/images/procesando.png'
import badStatus from '../assets/images/cancelar.png'
import cookingStatus from '../assets/images/sombrero-de-cocinero.png'
import readyStatus from '../assets/images/caja-de-entrega.png'
import OKStatus from '../assets/images/comprobado.png'
import deliveryStatus from '../assets/images/enviado.png'
import noReadStatus from '../assets/images/mensaje-no-leido.png'
import readStatus from '../assets/images/doble-verificacion.png'

export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[-_]).{8,}$/
export const EMAIL_REGEX =  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
export const ONLY_LETTERS = /^[A-Za-z\s]+$/
export const ONLY_NUMBERS = /^[0-9]+$/ 
export const ADDRESS_REGEX = /^[a-zA-Z0-9\s.,#-]+$/;
export const PRECIO__REGEX = /^\$\d+$/

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
      status: "A confirmar",
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
        status: "En reparto",
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