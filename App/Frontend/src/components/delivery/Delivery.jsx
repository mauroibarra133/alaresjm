/* eslint-disable react/prop-types */
import Path from '../Path';
import '../../styles/delivery/delivery.css'
import {useEffect, useState} from 'react'
import { useCart } from '../../hooks/useCart';
import CartItem from './CartItem';
import CartVacio from './cartVacio';
import FormDelivery from './FormDelivery';
import { generateUniqueKey } from '../../utils/functions';

function Delivery() {

const { cart, clearCart, addToCart, removeProductFromCart } = useCart();
const [total, setTotal] = useState(0);
// const [dataForm, setDataForm] = useState('');

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
            <FormDelivery onSubmit={onSubmit} total={total}/>
        </div>
        </>
     );
}

export default Delivery;