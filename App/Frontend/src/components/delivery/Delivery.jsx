/* eslint-disable react/prop-types */
import Path from '../Path';
import '../../styles/delivery/delivery.css'
import {useId, useEffect, useState} from 'react'
import {useForm} from 'react-hook-form';
import {DevTool} from '@hookform/devtools'
import { useCart } from '../../hooks/useCart';
import CartItem from './CartItem';
import CartVacio from './cartVacio';

function Delivery() {

const direccionPattern = /^[a-zA-Z0-9\s.,#-]+$/;
const clientNameId = useId();
const clientDirectionId = useId();
const typePayId = useId();
const amountEftvoId = useId();
const ticketId = useId();
const notaId = useId();
const deliveryTypeId = useId();


const { cart, clearCart, addToCart, removeProductFromCart } = useCart();
const [total, setTotal] = useState(0);

const {control, register, watch, formState, handleSubmit} = useForm({
    defaultValues:{
        carritoItems: []
    },
    mode: 'onTouched'
});
const {errors} = formState;

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
    console.log(cart,total,data);
}
function generateUniqueKey() {
    return Math.random().toString(36).substr(2, 9);
  }

    return ( 
        <>
        <form className="delivery__container" onSubmit={handleSubmit(onSubmit)}>
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
            <div className="pedido__note-container">
                <label htmlFor={notaId}>Nota de pedido</label>
                <textarea name={notaId} id={notaId} cols="30" rows="5" 
                    placeholder='Por ej: quiero la hamburguesa sin lechuga y las papas sin panceta'
                    {...register('nota-pedido')}
                ></textarea>
            </div>
            <div className="pedido__form">
                <div className="form__row">
                    <label htmlFor={clientNameId} >A nombre de</label>
                    <div>
                        <input type="text" id={clientNameId} {
                            ...register('nombreCliente',{
                                required: "Debes incluir para quien es el pedido", 
                                pattern: {
                                    value: /^[A-Za-z\s]+$/,
                                    message: 'Solo se permiten letras'
                            }})} />
                        {errors.nombreCliente?.type === 'required' && <p role="alert" className='input-error'>{errors.nombreCliente.message}</p>}
                        {errors.nombreCliente?.type === 'pattern' && <p role="alert" className='input-error'>{errors.nombreCliente.message}</p>}
                    </div>
                   
                </div>
                <div className="form__row">
                    <label htmlFor={deliveryTypeId}>Tipo Entrega</label>
                    <select name={deliveryTypeId} id={deliveryTypeId}
                     {...register('tipoEntrega',{required: "Debes incluir como sera entregado"})}>
                        <option value="delivery">Delivery</option>
                        <option value="take-away">Retirar en el local</option>
                    </select>
                </div>
                <div className="form__row">
                    <label htmlFor={clientDirectionId}>Direccion</label>
                    <div>
                        <input type="text" id={clientDirectionId}  
                        {...register('direccionCliente',{required: "Debes incluir la direccion",
                        disabled: watch("tipoEntrega") !== "delivery", pattern:direccionPattern})}/>
                        {errors.direccionCliente?.type === 'pattern' && <p role="alert" className='input-error'>Algunos caracteres no estan permitidos</p>}
                        {errors.direccionCliente?.type === 'required' && <p role="alert" className='input-error'>{errors.direccionCliente.message}</p>}
                    </div>

                </div>
                <div className="form__row">
                    <label htmlFor={typePayId}>Tipo Pago</label>
                    <select name={typePayId} id={typePayId} {...register('tipoPago',{required: "Debes incluir como pagar tu pedido"})}>
                        <option value="efectivo">Efectivo</option>
                        <option value="transferencia">Transferencia</option>
                    </select>
                </div>
                <div className="form__row">
                    <label htmlFor={amountEftvoId}>Abono con</label>
                    <div>
                        <input type="text" id={amountEftvoId} 
                        {...register('montoEft',{required: "Debes incluir con cuanto efectivo nos pagas.",
                        disabled: watch("tipoPago") === "transferencia",
                        pattern: {
                            value: /^[0-9]+$/,                            
                            message: 'Solo se permiten numeros'
                        },
                        validate: ()=> watch("montoEft") >= total || "El monto a pagar debe ser superior al total"
                    })}/>
                            {errors.montoEft?.type === 'required' && <p role="alert" className='input-error'>{errors.montoEft.message}</p>}
                            {errors.montoEft?.type === 'pattern' && <p role="alert" className='input-error'>{errors.montoEft.message}</p>}
                            {errors.montoEft?.type === 'validate' && <p role="alert" className='input-error'>{errors.montoEft.message}</p>}
                    </div>

                </div>
            </div>
            <div className={`pedido__pago ${watch("tipo-pago") !== "transferencia" ? "disabled" : ""}`} >
                <label htmlFor={ticketId} className={`${watch("tipoPago") !== "transferencia" ? "disabled" : ""}`}>Subir Comprobante Transferencia</label>
                <div className='pedido__pago-input-container' >
                    <input type="file" name={ticketId} id={ticketId} 
                    {...register('comprobanteTransferencia',{required: "Debes incluir tu comprobante de transferencia.",
                    disabled: watch("tipoPago") !== "transferencia"})}
                     />
                </div>
            </div>
            {errors.comprobanteTransferencia?.type === 'required' && <p role="alert" className='input-error input-error-file'>{errors.comprobanteTransferencia.message}</p>}
            <div className="pedido__button">
                <button type='submit' className='pedido__confirmar button' disabled={cart.length <= 0}>
                    Confirmar Pedido
                </button>
            </div>
        </form>

        <DevTool control={control}></DevTool>
        </>
     );
}

export default Delivery;