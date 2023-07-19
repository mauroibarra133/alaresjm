import '../../styles/carta/carta.css'
import {getCategories} from '../../services/categorias.services.js'
import {getProducts} from '../../services/productos.services.js'
import { useEffect, useState} from 'react';
import Path from '../Path';
import Tag from './Tag'
import { NavLink } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';
import CartaInitial from './CartaInitial';
import { generateUniqueKey } from '../../utils/functions';
import carritoImg from '../../assets/images/carrito.png'
import CartaItem from './CartaItem';
import Modal from '../Modal';

function Carta() {
    const [categorias,setCategorias] = useState([]);
    const [products,setProducts] = useState([]);
    const [activeTag, setActiveTag] = useState(null);
    const [isCartClick, setCartClick] = useState(false);

    const {addToCart, checkProductInCart, removeProductFromCart} = useCart();
    const {auth} = useAuth() 

    function handleTagClick(tagId){
        if(activeTag === tagId){
            return;
        }
      setActiveTag(tagId);
      getProducts(tagId).then(data => setProducts(data))
    }

    useEffect(()=>{
        async function buscarCategorias(){
            getCategories().then(data => setCategorias(data))
            .catch(error => console.log(error));
        }
        buscarCategorias();

        async function buscarProductos(){
            getProducts().then(data => setProducts(data));
        }
        buscarProductos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    return ( 
        <>
            <div className='carta__container'>
                <Path pathPrev={'Home'} pathActual={'Carta'}goTo={'Home'} />
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
                    setCartClick={setCartClick}
                    /> 
                    
                    : 

                    products.map(product => {
                        const isProductInCart = checkProductInCart(product);
                        return (
                            <CartaItem key={generateUniqueKey()} isProductInCart={isProductInCart} 
                            removeProductFromCart={removeProductFromCart} addToCart={addToCart}
                            product={product} setCartClick={setCartClick} />
                        )})}
                </div>
                <div className="carta__buttons">
                    <NavLink to={'/delivery'}><button className="carta__button-carrito carta__button button" >
                        <p>CARRITO</p>
                        <img src={carritoImg} alt="" />
                        </button></NavLink>
                </div>
            </div>
            <Modal isSubmitted={isCartClick && !auth.isLogin} 
            position={"top"}
            handleSubmit={()=>setCartClick(false)} msg={!auth.isLogin ? "Debes estar logueado para usar el carrito" : ""}></Modal>
        </>

     );
}

export default Carta;