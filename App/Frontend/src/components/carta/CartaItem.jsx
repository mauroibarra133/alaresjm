/* eslint-disable react/prop-types */
import carritoImg from '../../assets/images/carrito.png';
import { useAuth } from '../../hooks/useAuth';


function CartaItem({isProductInCart,removeProductFromCart,addToCart,product, setCartClick}) {

    const {auth} = useAuth()

    async function handleCartClick(){
        if(auth.isLogin){
            setCartClick(false)
            return isProductInCart ? removeProductFromCart(product) :addToCart(product)
        }else{
        setCartClick(true)

        }
    }

    return ( 
        <div className="carta__item">
        <div className="carta__item-r1">
            <div className='carta__name-price'><p className="carta__item-name">{product.nombre.toString().toUpperCase()}</p></div>
            <div className="carta__prices">
                <div className='carta__img' 
                    style={{backgroundColor: isProductInCart ? '#fb9999' : '#E8E8E8'}}
                    onClick={()=> handleCartClick()} >
                    <img src={carritoImg} className={'carta__icono-carrito'} alt="" /></div>
                <div className="carta__item-price">
                    <p className={`${!product.precioChico ? 'inactive' : ''}`}>{product.precioChico ? "$"+product.precioChico : ''} </p>
                    <p className={`${!product.precioGrande ? 'inactive' : ''}`}>{`${product.precioGrande ? "$"+product.precioGrande : ''}`}</p>
                </div>
            </div>

        </div>
        <div className="carta__item-r2">
            <p className="carta__item-desc">{product.descripcion.toString().toUpperCase()}</p>
        </div>
    </div>

     );
}

export default CartaItem;