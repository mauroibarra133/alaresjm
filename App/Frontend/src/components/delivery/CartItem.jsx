/* eslint-disable react/prop-types */
import plusIcon from '../../assets/images/plus.webp'
import minusIcon from '../../assets/images/minus.webp'
import { useCart } from '../../hooks/useCart';
import { useId } from 'react';

function CartItem({id,nombre,preciogrande,preciochico,descripcion,quantity, priceSelected, addToCart, removeProductFromCart}){

    let selectedValue;
    const {setPriceSelected} = useCart();
    const priceId = useId()

    //Functions
    const handleSelectChange = (event) => {
         selectedValue = event.target.value;
        setPriceSelected(id,selectedValue === 'Grande' ? preciogrande : preciochico,selectedValue === "Grande"? 3 : 1);
      };
    return (
        <div className="order__item">
        <div className="order__item-r1">
            <p className="order__name">{nombre.toUpperCase()}</p>
            <select  value={priceSelected == preciogrande ? 'Grande' : 'Chico'} onChange={handleSelectChange} name={priceId} id={priceId} className='order__item-selectsize'>
                {preciogrande != 0 && (
                <option value="Grande" disabled={preciogrande == 0 ? true : false} >Grande</option>
                )}
                {preciochico != 0 && (
                <option value="Chico" disabled={preciochico == 0 ? true : false}>Chico</option>
                )}
            </select>
            <p className="order__price">{`$${priceSelected*quantity}`}</p>
        </div>
        <div className="order__item-r2">
        <p className="order__desc">{descripcion.toUpperCase()}</p>
            <div className="order__buttons">
                <img src={plusIcon} alt="Sumar Item" onClick={addToCart}/>
                <p>{quantity}</p>
                <img src={minusIcon} alt="Restar item"  onClick={removeProductFromCart}/>
            </div>
        </div>
    </div>

    )
}

export default CartItem;