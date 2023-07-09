import Footer from '../Footer'
import '../../styles/carta/carta.css'
import carritoImg from '../../assets/images/carrito.svg';
import {getCategories} from '../../services/categorias.services.js'
import {getProducts} from '../../services/productos.services.js'
import { useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom'
import Tag from './Tag'

function Carta() {

    const [categorias,setCategorias] = useState([]);
    const [products,setProducts] = useState([]);
    const [activeTag, setActiveTag] = useState(null);

    function generateUniqueKey() {
        return Math.random().toString(36).substr(2, 9);
      }

      
    function handleTagClick(tagId){
        if(activeTag === tagId){
            return;
        }
      setActiveTag(tagId);
      getProducts(tagId).then(data => setProducts(data))
      console.log(products);
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
                <div className="carta-path__container"><NavLink to={'/'}><p className='carta__path'>Home </p></NavLink><span className='carta__path-span'>/Carta</span></div>
               
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
                    
                <div className="carta__carta">
                    {activeTag != null && products.map(product => (
                        <div className="carta__item" key={generateUniqueKey()}>
                            <div className="carta__item-r1">
                                <p className="carta__item-name">{product.nombre.toString().toUpperCase()}</p>
                                <div className="carta__item-price">
                                    <p className={`${!product.precioChico ? 'inactive' : ''}`}>{product.precioChico ? "$"+product.precioChico : ''} </p>
                                    <p className={`${!product.precioGrande ? 'inactive' : ''}`}>{`${product.precioGrande ? "$"+product.precioGrande : ''}`}</p>
                                </div>
                            </div>
                            <div className="carta__item-r2">
                                <p className="carta__item-desc">{product.descripcion.toString().toUpperCase()}</p>
                            </div>
                        </div>
                    ))}



                </div>
                <div className="carta__buttons">
                    <button className="carta__button-vermas carta__button"><p>VER MAS</p></button>
                    <button className="carta__button-carrito carta__button">
                        <p>CARRITO</p>
                        <img src={carritoImg} alt="" />
                        </button>
                </div>
            </div>
            <Footer/>
            
        </>

     );
}

export default Carta;