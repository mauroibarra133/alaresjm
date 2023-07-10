/* eslint-disable react/prop-types */
import Path from '../Path';
import '../../styles/delivery/delivery.css'
// import plusIcon from '../../assets/images/plus.svg'
// import minusIcon from '../../assets/images/minus.svg'
import {useId} from 'react'
import { useCart } from '../../hooks/useCart';
function Delivery() {
 
const clientNameId = useId();
const clientDirectionId = useId();
const typePayId = useId();
const amountEftvoId = useId();
const ticketId = useId();

const {cart,clearCart} = useCart();
console.log(cart);

// function generateUniqueKey() {
//     return Math.random().toString(36).substr(2, 9);
//   }

// const CartItem = ({nombre,precioChico,precioGrande,descripcion,quantity,addToCart})=>{

//     const [priceSelected, setPriceSelected] = useState(true);
//     const handlePriceSelected = (value) =>{
//         setPriceSelected(value)
//     }

//     return (
//         <div className="pedido__item">
//         <div className="pedido__item-r1">
//             <p className="pedido__name">{nombre.toUpperCase()}</p>
//             <select name="" id="" className='pedido__item-selectsize'>
//                 <option value="Grande" onClick={handlePriceSelected(true)}>Grande</option>
//                 <option value="Chico" onClick={handlePriceSelected(false)}>Chico</option>
//             </select>
//             <p className="pedido__price">{priceSelected ? precioGrande : precioChico}</p>
//         </div>
//         <div className="pedido__item-r2">
//         <p className="pedido__desc">{descripcion.toUpperCase()}</p>
//             <div className="pedido__buttons">
//                 <img src={plusIcon} alt=""  onClick={addToCart} />
//                 <p>{quantity}</p>
//                 <img src={minusIcon} alt="" />
//             </div>
//         </div>
//     </div>

//     )
// }
    return ( 
        <div className="delivery__container">
            <Path pathPrev={'Home'} pathActual={Delivery.name}/>
            <div className="pedido__container">
                <div className="pedido__items">
                    {/* {cart.map(product => (
                        <CartItem key={generateUniqueKey()} addToCart={()=> addToCart(product)} {...product}/>
                    ))} */}
                </div>
                <div className="pedido__total">
                    <p className="pedido__total-name">TOTAL</p>
                    <p className="pedido__total-price">$453465</p>
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