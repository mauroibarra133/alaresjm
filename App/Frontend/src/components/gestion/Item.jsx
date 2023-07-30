import '../../styles/dashboard/pedido.css'
import cruzIcon from '../../assets/images/xmark-solid.svg'

/* eslint-disable react/prop-types */
function Item({modalCarta,closeModal, categorias}) {
    const item = modalCarta.item
    console.log(item);
    console.log(categorias);
    return ( 
        <div className='dashboard__modal vercarta__modal'>
            <div className={`dashboard__modal-top vercarta__modal-top`}>
                <p className="vercarta__top-id   dashboard__modal-top-id">{`Producto nº ${item.id}}`}</p>
                <div className="vercarta__top-cruz dashboard__top-cruz">
                <img src={cruzIcon} alt=""  onClick={closeModal}/>
                </div>
            </div>
            <div className='vercarta__modal-body'>
                <div className="vercarta__modal-info">
                    <div className="vercarta__modal-row">
                        <label htmlFor="">Nombre</label>
                        <input type="text" defaultValue={item.nombre} className='vercarta__input'/>
                    </div>
                    <div className="vercarta__modal-row">
                        <label htmlFor="">Descripcion</label>
                        <textarea name="" id="" cols="20" rows="6" defaultValue={item.descripcion}></textarea>
                    </div>
                    <div className="vercarta__modal-row">
                        <label htmlFor="">Categoria</label>
                        <select name="" id="" defaultValue={categorias[item.id_categoria-1].nombre}>
                            {categorias && categorias.map(categ => (
                                <option  key={categ.id}>{categ.nombre}</option>
                            ))}
                        </select>
                    </div>
                    <div className="vercarta__modal-row">
                        <label htmlFor="">Precio chico</label>
                        <input type="text" defaultValue={`$${item.precioChico || 0}`}/>
                    </div>
                    <div className="vercarta__modal-row">
                        <label htmlFor="">Precio grande</label>
                        <input type="text" defaultValue={`$${item.precioGrande || 0}`}/>
                    </div>
                </div>
                <button className='button'>Grabar</button>
            </div>
        </div>
    )}


export default Item;