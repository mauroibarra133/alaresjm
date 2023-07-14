/* eslint-disable react/prop-types */
import Path from '../Path';
import '../../styles/delivery/delivery.css'
import {useEffect, useState} from 'react'
import { useCart } from '../../hooks/useCart';
import CartItem from './CartItem';
import CartVacio from './cartVacio';
import FormDelivery from './FormDelivery';
import { generateUniqueKey } from '../../utils/functions';
import { initMercadoPago } from '@mercadopago/sdk-react'
import Modal from '../Modal';
import axios from 'axios';

function Delivery() {

initMercadoPago("TEST-803ddd42-4075-4c56-934e-c037302ed0d6");

const { cart, clearCart, addToCart, removeProductFromCart, modifyCart } = useCart();
const [total, setTotal] = useState(0);
const [preferenceId, setPreferenceId] = useState(null);
const [isOrderedEft, setIsOrderedEft] = useState(false)

const createPreference = async ({nombreCliente, direccionCliente, tipoPago, tipoEntrega, notaPedido}) => {
  try {
    const response = await axios.post("http://localhost:4000/create_preference", {
      items: modifyCart(cart),
      name: nombreCliente,
      address: direccionCliente,
      extra: {
        tipoPago: tipoPago,
        tipoEntrega: tipoEntrega,
        notaPedido: notaPedido
      }
    });
    return response.data.response;
  } catch (error) {
    console.log(error);
  }
};
const handleOrder = async (pedido) => {
    //Creo la preferencia de MP
    if(pedido.tipoPago === "2"){
          const {id} = await createPreference(pedido);
      if (id) {
        setPreferenceId(id);
        console.log(id);
      }
    }else{
      //SI es efectivo limpio el carrito y muestro un modal
      setIsOrderedEft(true)
      clearCart();
    }
  };
useEffect(() => {
    const calculateTotal = () => {
      const totalPrice = cart.reduce(
        (accumulator, product) =>
          accumulator + product.priceSelected * product.quantity,
        0
      );
      setTotal(totalPrice);
    };

    calculateTotal();
  }, [cart]);

useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const status = searchParams.get('collection_status');
    if(status) clearCart()
    // Hacer algo con los parámetros obtenidos
  }, []);
  

const onSubmit = (data)=>{
    const pedido = {
        ...data,
        carritoItems: cart,
        total: total,
    }
    handleOrder(pedido);
}

    return ( 
        <>
        <div className="delivery__container" >
            <Path pathPrev={'Home'} pathActual={Delivery.name}/>
            <div className="pedido__container">
                <div className="pedido__items">
                    {cart.length === 0 ? <CartVacio/> : cart.map(product => (

                        <CartItem key={generateUniqueKey()} {...product} addToCart={()=>addToCart(product)} removeProductFromCart={()=>removeProductFromCart(product)}/>

                    ))}
                </div>
                <div className="pedido__total">
                    <p className="pedido__total-name">TOTAL</p>
                    <p className="pedido__total-price">{`$${total}`}</p>
                </div>
                <div className="pedido__button">
                <button className='button' onClick={clearCart}>
                    Limpiar Carrito
                </button>
                </div>
            </div>
            <FormDelivery onSubmit={onSubmit} total={total} preferenceId={preferenceId} isOrderedEft={isOrderedEft}/>
            <Modal isSubmitted={isOrderedEft} handleSubmit={setIsOrderedEft} msg={"Tu pedido ha sido realizado correctamente!"}/>
        </div>
        </>
     );
}

export default Delivery;