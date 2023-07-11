/* eslint-disable react/prop-types */
import '../../styles/carta/carta.css'
function CartaInitial({products,checkProductInCart, removeProductFromCart,addToCart, generateUniqueKey, carritoImg, categorias}) {
    
    const mostrarPorCategoria = (products,i)=>{
       const productosFiltrados = products.filter(product => product.id_categoria == i);
       return (
        productosFiltrados.map(product => { 
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

