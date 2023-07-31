import '../../styles/dashboard/pedido.css'
import cruzIcon from '../../assets/images/xmark-solid.svg'
import {useForm} from 'react-hook-form'
import { updateProduct,addProduct } from '../../services/productos.services'
import { PRECIO__REGEX } from '../../utils/constants'
/* eslint-disable react/prop-types */
function Item({modalCarta,closeModal, categorias,action, handleMsgStatus}) {
    const item = modalCarta.item
    const {handleSubmit, register, formState} = useForm({
        mode: 'onBlur'
    });
    const {isDirty, errors} = formState

    async function onSubmit(data){
        const {categoria} = data
        const id_categoria = categorias.filter(categ => categ.nombre == categoria)[0].id
        if(isDirty){
            if(action == 'U'){
               const response = await updateProduct(item.id,{...data,
                    precioChico : parseInt(data.precioChico.substring(1)),
                    precioGrande : parseInt(data.precioGrande.substring(1)),
                    id_categoria : id_categoria})
                    handleMsgStatus(response,'Producto modificado correctamente', 'Hubo un error al modificar tu producto')

            }else{
                 const response = await addProduct({...data,
                    precioChico : parseInt(data.precioChico.substring(1)),
                    precioGrande : parseInt(data.precioGrande.substring(1)),
                    id_categoria : id_categoria})
                    handleMsgStatus(response,'Producto agregado correctamente', 'Hubo un error al crear tu producto')

            }
            closeModal()
        }
            closeModal()

    }
    return ( 
        <div className='dashboard__modal vercarta__modal'>
            <div className={`dashboard__modal-top vercarta__modal-top`}>
                <p className="vercarta__top-id   dashboard__modal-top-id">{`${action == 'U' ? `Producto nº ${item.id}}` : 'New product'}`}</p>
                <div className="vercarta__top-cruz dashboard__top-cruz">
                <img src={cruzIcon} alt=""  onClick={closeModal}/>
                </div>
            </div>
            <form className='vercarta__modal-body' onSubmit={handleSubmit(onSubmit)}>
                <div className="vercarta__modal-info">
                    <div className="vercarta__modal-row">
                        <div>
                            <label htmlFor="">Nombre</label>
                            <input type="text" defaultValue={action == 'U' ? item.nombre : ''} className='vercarta__input'{...register('nombre', {required:true, maxLength:30})}/>
                        </div>
                        {errors.nombre?.type === 'required' && <p role="alert" className='form-error modal-item-error'>El nombre es necesario</p>}

                    </div>
                    <div className="vercarta__modal-row">
                        <div>
                            <label htmlFor="">Descripcion</label>
                            <textarea name="" id="" cols="20" rows="6"  {...register('descripcion')} defaultValue={action == 'U' ? item.descripcion : ''}></textarea>
                        </div>
                    </div>
                    <div className="vercarta__modal-row">
                        <div>
                            <label htmlFor="">Categoria</label>
                            <select name="" id="" defaultValue={action == 'U' ? categorias[item.id_categoria-1].nombre : categorias[0].nombre} {...register('categoria')}>
                                {categorias && categorias.map(categ => (
                                    <option  key={categ.id} >{categ.nombre}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="vercarta__modal-row">
                        <div>
                            <label htmlFor="">Precio chico</label>
                            <input type="text" defaultValue={`$${action == 'U' ? (item.precioChico || 0) : 0}`} {...register('precioChico', {pattern: PRECIO__REGEX})}/>
                        </div>
                    {errors.precioChico?.type === 'pattern' && <p role="alert" className='form-error modal-item-error'>Debe comenzar con $ y uno o mas digitos</p>}

                    </div>

                    <div className="vercarta__modal-row">
                        <div>
                            <label htmlFor="">Precio grande</label>
                            <input type="text" defaultValue={`$${action == 'U' ? (item.precioGrande || 0) : 0}`} {...register('precioGrande')}/>
                        </div>
                        {errors.precioGrande?.type === 'pattern' && <p role="alert" className='form-error modal-item-error'>Debe comenzar con $ y uno o mas digitos</p>}

                    </div>

                </div>
                <button className='button'type='submit'>{action == 'U' ? 'Grabar' : 'Agregar'}</button>
            </form>
        </div>
    )}


export default Item;