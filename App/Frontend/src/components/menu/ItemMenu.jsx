/* eslint-disable react/prop-types */
import carritoImg from '../../assets/images/carrito.webp';
import { useAuth } from '../../hooks/useAuth';


function ItemMenu({isProductInCart,removeProductFromCart,addToCart,product, setCartClick}) {

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
        <div className="menu__item">
        <div className="menu__item-r1">
            <div className='menu__name-price'><p className="menu__item-name">{product.nombre.toString().toUpperCase()}</p></div>
            <div className="menu__prices">
                <div className='menu__img' 
                    style={{backgroundColor: isProductInCart ? '#fb9999' : '#E8E8E8'}}
                    onClick={()=> handleCartClick()} >
                    <img src={carritoImg} className={'menu__icono-cart'} alt="Carrito" /></div>
                <div className="menu__item-price">
                    <p className={`${!product.preciochico ? 'inactive' : ''}`}> {product.preciochico ? "$"+product.preciochico : ''} </p>
                    <p className={`${!product.preciogrande ? 'inactive' : ''}`}>{`${product.preciogrande ? "$"+product.preciogrande : ''}`}</p>
                </div>
            </div>

        </div>
        <div className="menu__item-r2">
            <p className="menu__item-desc">{product.descripcion.toString().toUpperCase()}</p>
        </div>
    </div>

     );
}

export default ItemMenu;