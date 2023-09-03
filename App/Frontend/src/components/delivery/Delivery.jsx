/* eslint-disable react/prop-types */
import { useCart } from '../../hooks/useCart';
import {useEffect, useState} from 'react'
import { useAuth } from '../../hooks/useAuth';
import { generateUniqueKey } from '../../utils/functions';
import { initMercadoPago } from '@mercadopago/sdk-react'
import { createPreferenceMP } from '../../services/mercadoPago.services';
import { createOrder, getOrders } from '../../services/pedidos.services';
import Path from '../Path';
import CartItem from './CartItem';
import CartVacio from './CartVacio';
import FormDelivery from './FormDelivery';
import Modal from '../Modal';
import io from 'socket.io-client';
import '../../styles/delivery/delivery.css'
const socket = io('/');
import trashImg from '../../assets/images/trash.webp'

function Delivery() {

  initMercadoPago("APP_USR-aaad6c69-62aa-4d6b-a9fd-e744881e088a");

  //States
  const [total, setTotal] = useState(0);
  const [preferenceId, setPreferenceId] = useState(null);
  const [isOrderedEft, setIsOrderedEft] = useState({
    isSubmitted : false,
    goodStatus: false
  });
  const [loading,setLoading] = useState(false);

  //Hooks
  const {auth} = useAuth();
  const { cart, clearCart, addToCart, removeProductFromCart, modifyCart } = useCart();
  //Use Effects
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const status = searchParams.get('collection_status');
    if(status) clearCart()
  }, []);

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

  //Functions
  function handleCloseModal(){
      setIsOrderedEft({
        isSubmitted: false,
        goodStatus: false
      })
  }
  async function createPreference({direccionCliente, tipoPago, tipoEntrega, notaPedido}){
    try {
        const response = await createPreferenceMP(modifyCart(cart), direccionCliente, tipoPago, tipoEntrega, notaPedido, auth.data.user_id)
      return response;
    } catch (error) {
      return error
    }
  }
  const handleOrder = async (order) => {
      //Creo la preferencia de MP
      if(order.tipoPago == "2"){
        try {
          const response = await createPreference(order);
          const id = response.data.response.id
          if (id) {
            setPreferenceId(id);
          }
        } catch (error) {
          setIsOrderedEft({
            isSubmitted : true,
            goodStatus: false
          })
        }
          
      }else{
        //SI es efectivo limpio el carrito y muestro un modal
        try {
          const today = new Date()
          const today_ISO = today.toISOString();

          const response = await createOrder(today_ISO, auth.data.user_id,  order.direccionCliente,order.notaPedido,parseInt(order.total),
          parseInt(order.tipoPago),parseInt(order.tipoEntrega), parseInt(order.montoEft), modifyCart(cart) )

          if(response.status >= 200 && response.status < 300){
            //MAndar el pedido por socket
            const response = await getOrders({date: today})
            socket.emit('newOrder',response.data.data[0]);
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
      setLoading(false)
    };

const onSubmit = (data)=>{
  setLoading(true);
    const order = {
        ...data,
        carritoItems: cart,
        total: total,
    }
    handleOrder(order);
}
    return ( 
        <>
        <div className="delivery__container" >
            <Path pathPrev={'Home'} pathActual={'Delivery'} goTo={'Home'}/>
            <div className="order__container">
                <div className="order__items">
                    {cart.length === 0 ? <CartVacio/> : cart.map(product => (

                        <CartItem key={generateUniqueKey()} {...product} addToCart={()=>addToCart(product)} removeProductFromCart={()=>removeProductFromCart(product)}/>

                    ))}
                </div>
                <div className="order__total">
                    <p className="order__total-name">TOTAL</p>
                    <p className="order__total-price">{`$${total}`}</p>
                </div>
                <div className="order__button">
                <button className='button delete_cart_button' onClick={clearCart}>
                    <img src={trashImg} alt="Trash Button" />
                </button>
                </div>
            </div>
            <FormDelivery onSubmit={onSubmit} total={total} preferenceId={preferenceId} isOrderedEft={isOrderedEft} loading={loading}/>
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