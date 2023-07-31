/* eslint-disable react/prop-types */
import '../../styles/carta/carta.css'
import ItemMenu from './ItemMenu';
import { generateUniqueKey } from '../../utils/functions';

function InitialMenu({products,checkProductInCart, removeProductFromCart,addToCart, categories, setCartClick}) {
    
    const mostrarPorCategoria = (products,i)=>{
       const productosFiltrados = products.filter(product => product.id_categoria == i);
       return (
        productosFiltrados.map(product => { 
            const isProductInCart = checkProductInCart(product);
            return (
           <ItemMenu key={generateUniqueKey()} isProductInCart={isProductInCart} 
           removeProductFromCart={removeProductFromCart} addToCart={addToCart}
           product={product} setCartClick={setCartClick} />
            )})
     ); 
    }

    const listarTodo = (categories, products) => {
        return categories.map((categoria, i) => {
            return (
            <div className="menu-item__wrapper" key={i}>
                <div className="menu-item__title">
                    <h2>{categoria.nombre}</h2>
                </div>
                <div className="menu-items__wrapper">{mostrarPorCategoria(products, i + 1)}</div>
            </div>
            );
        });
    };

    return ( 
        <>
        {listarTodo(categories,products)}
        </>
     );
}

export default InitialMenu;

