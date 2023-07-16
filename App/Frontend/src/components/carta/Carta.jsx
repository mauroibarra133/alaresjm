import '../../styles/carta/carta.css'
import {getCategories} from '../../services/categorias.services.js'
import {getProducts} from '../../services/productos.services.js'
import { useEffect, useState} from 'react';
import Path from '../Path';
import Tag from './Tag'
import { NavLink } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import CartaInitial from './CartaInitial';
import { generateUniqueKey } from '../../utils/functions';
import carritoImg from '../../assets/images/carrito.png'
import CartaItem from './CartaItem';
import Modal from '../Modal';
import { isAuth } from '../../services/auth.services';

function Carta() {

    const [categorias,setCategorias] = useState([]);
    const [products,setProducts] = useState([]);
    const [activeTag, setActiveTag] = useState(null);
    const [isLogin, setIsLogin] = useState({
        isCartClick: false ,
        isLog: false
    });
    const {addToCart, checkProductInCart, removeProductFromCart} = useCart();

    function handleTagClick(tagId){
        if(activeTag === tagId){
            return;
        }
      setActiveTag(tagId);
      getProducts(tagId).then(data => setProducts(data))
    }
    
    useEffect(()=>{
        async function buscarCategorias(){
            getCategories().then(data => setCategorias(data));
        }
        buscarCategorias();

        async function buscarProductos(){
            getProducts().then(data => setProducts(data));
        }
        buscarProductos();

        async function isLogued(){
            const response = await isAuth()
            if(response.status == 200){
                setIsLogin({
                    isCartClick: false ,
                    isLog: true
                })
            }
        }
        isLogued()
        console.log(isLogin);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    return ( 
        <>
            <div className='carta__container'>
             <NavLink to={'/'}><Path pathPrev={'Home'} pathActual={'Carta'}/></NavLink>
                <div className='carta__tags-container'>
                    <div className="carta__tags">
                        {categorias && categorias.map((categ)=> (
                            <Tag key={generateUniqueKey()} nombre={categ.nombre} isActive={activeTag===categ.id} onClick={() => handleTagClick(categ.id)}/>
                        ))}
                    </div>

                </div>
                <div className='carta__titulos-tamaños'>
                        <p>Chicas / Grandes</p>
                    </div>
                 
                 {/* Podria mejorarlo haciendo un Componente y mejorar el filtrado */}
                <div className={`carta__carta ${activeTag == null ? 'carta__carta--initial' : ''}`}>
                    {activeTag == null ? 
                    <CartaInitial products={products} 
                    checkProductInCart={checkProductInCart} 
                    removeProductFromCart={removeProductFromCart} 
                    addToCart={addToCart} 
                    categorias={categorias}
                    setIsLogin={setIsLogin} isLogin={isLogin}
                    /> 
                    
                    : 

                    products.map(product => {
                        const isProductInCart = checkProductInCart(product);
                        return (
                            <CartaItem key={generateUniqueKey()} isProductInCart={isProductInCart} 
                            removeProductFromCart={removeProductFromCart} addToCart={addToCart}
                            product={product} setIsLogin={setIsLogin} isLogin={isLogin}/>
                        )})}
                </div>
                <div className="carta__buttons">
                    <NavLink to={'/delivery'}><button className="carta__button-carrito carta__button button" >
                        <p>CARRITO</p>
                        <img src={carritoImg} alt="" />
                        </button></NavLink>
                </div>
            </div>
            <Modal position={"top"} isSubmitted={isLogin.isCartClick && !isLogin.isLog} handleSubmit={setIsLogin} msg={!isLogin.isLog ? "Debes estar logueado para usar el carrito" : ""}></Modal>
        </>

     );
}

export default Carta;