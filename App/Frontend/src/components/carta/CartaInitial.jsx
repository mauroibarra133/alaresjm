/* eslint-disable react/prop-types */
import '../../styles/carta/carta.css'
import CartaItem from './CartaItem';
import { generateUniqueKey } from '../../utils/functions';

function CartaInitial({products,checkProductInCart, removeProductFromCart,addToCart, categorias, setCartClick}) {
    
    const mostrarPorCategoria = (products,i)=>{
       const productosFiltrados = products.filter(product => product.id_categoria == i);
       return (
        productosFiltrados.map(product => { 
            const isProductInCart = checkProductInCart(product);
            return (
           <CartaItem key={generateUniqueKey()} isProductInCart={isProductInCart} 
           removeProductFromCart={removeProductFromCart} addToCart={addToCart}
           product={product} setCartClick={setCartClick} />
            )})
     ); 
    }

    const listarTodo = (categorias, products) => {
    return categorias.map((categoria, i) => {
        return (
        <div className="carta-item__wrapper" key={i}>
            <div className="carta-item__title">
                <h2>{categoria.nombre}</h2>
            </div>
            <div className="carta-items__wrapper">{mostrarPorCategoria(products, i + 1)}</div>
        </div>
        );
    });
    };

    return ( 
        <>
        {listarTodo(categorias,products)}
        </>
     );
}

export default CartaInitial;

