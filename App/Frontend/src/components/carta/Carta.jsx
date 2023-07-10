import '../../styles/carta/carta.css'
import carritoImg from '../../assets/images/carrito.png';
import {getCategories} from '../../services/categorias.services.js'
import {getProducts} from '../../services/productos.services.js'
import { useEffect, useState} from 'react';
import Path from '../Path';
import Tag from './Tag'
import { NavLink } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

function Carta() {

    const [categorias,setCategorias] = useState([]);
    const [products,setProducts] = useState([]);
    const [activeTag, setActiveTag] = useState(null);
    const {cart,addToCart, checkProductInCart, removeProductFromCart} = useCart();
    console.log(cart);
    function generateUniqueKey() {
        return Math.random().toString(36).substr(2, 9);
      }

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
                <div className="carta__carta">
                    {activeTag != null && products.map(product => {
                        const isProductInCart = checkProductInCart(product);
                        return (
                        <div className="carta__item" key={generateUniqueKey()}>
                            <div className="carta__item-r1">
                                <div className='carta__name-price'><p className="carta__item-name">{product.nombre.toString().toUpperCase()}</p></div>
                                <div className="carta__prices">
                                    <div className='carta__img' 
                                        style={{backgroundColor: isProductInCart ? '#fb9999' : '#E8E8E8'}}
                                        onClick={()=> isProductInCart ? removeProductFromCart(product) :addToCart(product)}>
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
                        )})}



                </div>
                <div className="carta__buttons">
                    <button className="carta__button-vermas carta__button button"><p>VER MAS</p></button>
                    <button className="carta__button-carrito carta__button button" >
                        <p>CARRITO</p>
                        <img src={carritoImg} alt="" />
                        </button>
                </div>
            </div>
            
        </>

     );
}

export default Carta;