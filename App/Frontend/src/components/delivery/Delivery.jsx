import Path from '../Path';
import '../../styles/delivery/delivery.css'
import plusIcon from '../../assets/images/plus.svg'
import minusIcon from '../../assets/images/minus.svg'

function Delivery() {
    return ( 
        <div className="delivery__container">
            <Path pathPrev={'Home'} pathActual={Delivery.name}/>
            <div className="pedido__container">
                <div className="pedido__items">
                    <div className="pedido__item">
                        <div className="pedido__item-r1">
                            <p className="pedido__name">MUZZA</p>
                            <p className="pedido__price">$2000</p>
                        </div>
                        <div className="pedido__item-r2">
                            <p className="pedido__desc">QUESO MUZZARELLA</p>
                            <div className="pedido__buttons">
                                <img src={plusIcon} alt="" />
                                <p>2</p>
                                <img src={minusIcon} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="pedido__item">
                        <div className="pedido__item-r1">
                            <p className="pedido__name">MUZZA</p>
                            <p className="pedido__price">$2000</p>
                        </div>
                        <div className="pedido__item-r2">
                            <p className="pedido__desc">QUESO MUZZARELLA</p>
                            <div className="pedido__buttons">
                                <img src={plusIcon} alt="" />
                                <p>2</p>
                                <img src={minusIcon} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="pedido__item">
                        <div className="pedido__item-r1">
                            <p className="pedido__name">MUZZA</p>
                            <p className="pedido__price">$2000</p>
                        </div>
                        <div className="pedido__item-r2">
                            <p className="pedido__desc">QUESO MUZZARELLA</p>
                            <div className="pedido__buttons">
                                <img src={plusIcon} alt="" />
                                <p>2</p>
                                <img src={minusIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pedido__total">
                    <p className="pedido__total-name">TOTAL</p>
                    <p className="pedido__total-monto">$453465</p>
                </div>
            </div>
            <div className="pedido__form">
                <div className="form__row">
                    <label htmlFor="nombre-cliente">A nombre de</label>
                    <input type="text" />
                </div>
                <div className="form__row">
                    <label htmlFor="direccion">Direccion</label>
                    <input type="text" />
                </div>
                <div className="form__row">
                    <label htmlFor="tipo-pago">Tipo Pago</label>
                    <select name="tipo-pago" id="tipo-pago">
                        <option value="Efectivo">Efectivo</option>
                        <option value="Transferencia">Transferencia</option>
                    </select>
                </div>
                <div className="form__row">
                    <label htmlFor="monto-eftvo">Abono con</label>
                    <input type="text" />
                </div>
            </div>
            <div className="pedido__pago">
                <label htmlFor="comprobante">Subir Comprobante</label>
                <input type="file" name="comprobante" id="comprobante" />
            </div>
            <div className="pedido__button">
                <button className='pedido__confirmar'>
                    Confirmar Pedido
                </button>
            </div>
        </div>

     );
}

export default Delivery;