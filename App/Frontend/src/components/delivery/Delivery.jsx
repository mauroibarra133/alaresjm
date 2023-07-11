/* eslint-disable react/prop-types */
import Path from '../Path';
import '../../styles/delivery/delivery.css'
import {useId, useEffect, useState} from 'react'
import { useCart } from '../../hooks/useCart';
import CartItem from './CartItem';
import CartVacio from './cartVacio';

function Delivery() {
 
const clientNameId = useId();
const clientDirectionId = useId();
const typePayId = useId();
const amountEftvoId = useId();
const ticketId = useId();

const { cart, clearCart, addToCart, removeProductFromCart } = useCart();
const [total, setTotal] = useState(0);
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
console.log(cart);

function generateUniqueKey() {
    return Math.random().toString(36).substr(2, 9);
  }

    return ( 
        <div className="delivery__container">
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
            <div className="pedido__form">
                <div className="form__row">
                    <label htmlFor={clientNameId}>A nombre de</label>
                    <input type="text" id={clientNameId} />
                </div>
                <div className="form__row">
                    <label htmlFor={clientDirectionId}>Direccion</label>
                    <input type="text" id={clientDirectionId}/>
                </div>
                <div className="form__row">
                    <label htmlFor={typePayId}>Tipo Pago</label>
                    <select name={typePayId} id={typePayId}>
                        <option value="Efectivo">Efectivo</option>
                        <option value="Transferencia">Transferencia</option>
                    </select>
                </div>
                <div className="form__row">
                    <label htmlFor={amountEftvoId}>Abono con</label>
                    <input type="text" id={amountEftvoId}/>
                </div>
            </div>
            <div className="pedido__pago">
                <label htmlFor={ticketId}>Subir Comprobante</label>
                <div className='pedido__pago-input-container'>
                    <input type="file" name={ticketId} id={ticketId} />
                </div>
            </div>
            <div className="pedido__button">
                <button className='pedido__confirmar button'>
                    Confirmar Pedido
                </button>
            </div>
        </div>

     );
}

export default Delivery;