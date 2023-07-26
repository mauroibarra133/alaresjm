/* eslint-disable react/prop-types */
import Path from '../Path';
import '../../styles/delivery/delivery.css'
import {useEffect, useState} from 'react'
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';
import CartItem from './CartItem';
import CartVacio from './cartVacio';
import FormDelivery from './FormDelivery';
import { generateUniqueKey } from '../../utils/functions';
import { initMercadoPago } from '@mercadopago/sdk-react'
import Modal from '../Modal';
import { createPreferenceMP } from '../../services/mercadoPago.services';
import { crearPedido, getPedidos } from '../../services/pedidos.services';
import io from 'socket.io-client';
const socket = io('/');

function Delivery() {

initMercadoPago("TEST-803ddd42-4075-4c56-934e-c037302ed0d6");

const { cart, clearCart, addToCart, removeProductFromCart, modifyCart } = useCart();
const [total, setTotal] = useState(0);
const [preferenceId, setPreferenceId] = useState(null);
const [isOrderedEft, setIsOrderedEft] = useState({
  isSubmitted : false,
  goodStatus: false
})
const {auth} = useAuth();

function handleCloseModal(){
    setIsOrderedEft({
      isSubmitted: false,
      goodStatus: false
    })
}
const createPreference = async ({nombreCliente, direccionCliente, tipoPago, tipoEntrega, notaPedido}) => {
  try {
      const response= createPreferenceMP(modifyCart(cart), nombreCliente, direccionCliente, tipoPago, tipoEntrega, notaPedido)
    return response;
  } catch (error) {
    console.log(error);
  }
};
const handleOrder = async (pedido) => {
    //Creo la preferencia de MP
    if(pedido.tipoPago === "2"){
          const {data} = await createPreference(pedido);
          const id = data.response.id
        
        if (id) {
          setPreferenceId(id);
        }

    }else{
      console.log(auth);
      //SI es efectivo limpio el carrito y muestro un modal
      try {
        const fecha_hoy = new Date()
        const fecha_ISO = fecha_hoy.toISOString();
        const response = await crearPedido(fecha_ISO, auth.data.user_id,  pedido.direccionCliente,pedido.notaPedido,parseInt(pedido.total),
        parseInt(pedido.tipoPago),parseInt(pedido.tipoEntrega), parseInt(pedido.montoEft), modifyCart(cart) )
        if(response.status >= 200 && response.status < 300){
          console.log("salio bien wn");

          //MAndar el pedido por socket
          const response = await getPedidos({date: fecha_hoy})
          
          socket.emit('pedidoNuevo',response.data.data[0]);

          //Mostrar modal
          setIsOrderedEft({
            isSubmitted : true,
            goodStatus: true
          })
          clearCart();
        }
      } catch (error) {
        setIsOrderedEft({
          isSubmitted : true,
          goodStatus: false
        });
        console.log(error);
      }
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
            <Path pathPrev={'Home'} pathActual={Delivery.name} goTo={'Home'}/>
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
            <Modal isSubmitted={isOrderedEft.isSubmitted} 
            handleSubmit={handleCloseModal}
            isGoodStatus={isOrderedEft.goodStatus}
            position={"top"}
             msg={ isOrderedEft.goodStatus ?"Tu pedido ha sido realizado correctamente!": "Tu pedido no pudo ser procesado, intente nuevamente!"}/>
        </div>
        </>
     );
}

export default Delivery;