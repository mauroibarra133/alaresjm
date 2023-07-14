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
import axios from 'axios';

  

function Delivery() {

initMercadoPago("TEST-803ddd42-4075-4c56-934e-c037302ed0d6");
const { cart, clearCart, addToCart, removeProductFromCart } = useCart();
const [total, setTotal] = useState(0);
const [preferenceId, setPreferenceId] = useState(null);

const createPreference = async (nombreCliente,direccionCliente) => {
    try {
      const response = await axios.post("http://localhost:4000/create_preference", {
        title: 'Pedido',
        price: total,
        quantity: 1,
        name: nombreCliente,
        address: direccionCliente
      });
      console.log(response);
      const { id} = response.data;
      return {id: id};
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async (nombreCliente,direccionCliente ) => {
    const {id} = await createPreference(nombreCliente,direccionCliente);
    if (id) {
      setPreferenceId(id);
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

const onSubmit = (data)=>{
    // setDataForm(data);
    const pedido = {
        ...data,
        carritoItems: cart,
        total: total,
    }
    console.log(pedido);
    handleBuy(pedido.nombreCliente, pedido.direccionCliente);
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
            <FormDelivery onSubmit={onSubmit} total={total} preferenceId={preferenceId}/>
        </div>
        </>
     );
}

export default Delivery;