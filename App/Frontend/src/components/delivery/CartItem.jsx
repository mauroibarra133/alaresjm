/* eslint-disable react/prop-types */
import plusIcon from '../../assets/images/plus.svg'
import minusIcon from '../../assets/images/minus.svg'
import { useCart } from '../../hooks/useCart';

function CartItem({id,nombre,precioGrande,precioChico,descripcion,quantity, priceSelected, addToCart, removeProductFromCart}){

    const {setPriceSelected} = useCart();
    let selectedValue;
    const handleSelectChange = (event) => {
         selectedValue = event.target.value;
        setPriceSelected(id,selectedValue === 'Grande' ? precioGrande : precioChico,selectedValue === "Grande"? 3 : 1);
      };

    return (
        <div className="pedido__item">
        <div className="pedido__item-r1">
            <p className="pedido__name">{nombre.toUpperCase()}</p>
            <select value={priceSelected == precioGrande ? 'Grande' : 'Chico'} onChange={handleSelectChange} name="" id="" className='pedido__item-selectsize'>
                <option value="Grande" >Grande</option>
                <option value="Chico">Chico</option>
            </select>
            <p className="pedido__price">{`$${priceSelected*quantity}`}</p>
        </div>
        <div className="pedido__item-r2">
        <p className="pedido__desc">{descripcion.toUpperCase()}</p>
            <div className="pedido__buttons">
                <img src={plusIcon} alt="" onClick={addToCart}/>
                <p>{quantity}</p>
                <img src={minusIcon} alt=""  onClick={removeProductFromCart}/>
            </div>
        </div>
    </div>

    )
}

export default CartItem;