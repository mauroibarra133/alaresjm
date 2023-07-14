/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useEffect, useId } from "react";
import { Wallet } from '@mercadopago/sdk-react'
import '../../styles/delivery/delivery.css'


function FormDelivery({onSubmit,total, preferenceId, isOrderedEft}) {
    const direccionPattern = /^[a-zA-Z0-9\s.,#-]+$/;

    const clientNameId = useId();
    const clientDirectionId = useId();
    const typePayId = useId();
    const amountEftvoId = useId();
    const deliveryTypeId = useId();
    const notaId = useId();

    const {register, watch, formState, handleSubmit, reset} = useForm({
        mode: 'onTouched'
    });
    const {errors} = formState;

    useEffect(()=>{
        isOrderedEft ? reset() : null
    },[isOrderedEft,reset])

    return ( 
        <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
        <div className="pedido__note-container">
            <label htmlFor={notaId}>Nota de pedido</label>
            <textarea name={notaId} id={notaId} cols="30" rows="5" 
                    placeholder='Por ej: quiero la hamburguesa sin lechuga y las papas sin panceta'
                    {...register('notaPedido')}></textarea>
        </div>
        <div className="pedido__form">
            <div className="form__row">
                <label htmlFor={clientNameId} >A nombre de</label>
                <div>
                    <input type="text" id={clientNameId} {
                        ...register('nombreCliente',{
                            required: "Debes incluir para quien es el pedido", 
                            pattern: {
                                value: /^[A-Za-z\s]+$/,
                                message: 'Solo se permiten letras'
                        }})} />
                    {errors.nombreCliente?.type === 'required' && <p role="alert" className='input-error'>{errors.nombreCliente.message}</p>}
                    {errors.nombreCliente?.type === 'pattern' && <p role="alert" className='input-error'>{errors.nombreCliente.message}</p>}
                </div>
            
            </div>
            <div className="form__row">
                <label htmlFor={deliveryTypeId}>Tipo Entrega</label>
                <select name={deliveryTypeId} id={deliveryTypeId}
                {...register('tipoEntrega',{required: "Debes incluir como sera entregado"})}>
                    <option value="1">Delivery</option>
                    <option value="2">Retirar en el local</option>
                </select>
            </div>
            <div className="form__row">
                <label htmlFor={clientDirectionId}>Direccion</label>
                <div>
                    <input type="text" id={clientDirectionId}  
                    {...register('direccionCliente',{required: "Debes incluir la direccion",
                    disabled: watch("tipoEntrega") !== "1", pattern:direccionPattern})}/>
                    {errors.direccionCliente?.type === 'pattern' && <p role="alert" className='input-error'>Algunos caracteres no estan permitidos</p>}
                    {errors.direccionCliente?.type === 'required' && <p role="alert" className='input-error'>{errors.direccionCliente.message}</p>}
                </div>

            </div>
            <div className="form__row">
                <label htmlFor={typePayId}>Tipo Pago</label>
                <select name={typePayId} id={typePayId} {...register('tipoPago',{required: "Debes incluir como pagar tu pedido"})}>
                    <option value="1">Efectivo</option>
                    <option value="2">Transferencia</option>
                </select>
            </div>
            <div className="form__row">
                <label htmlFor={amountEftvoId}>Abono con</label>
                <div>
                    <input type="text" id={amountEftvoId} 
                    {...register('montoEft',{required: "Debes incluir con cuanto efectivo nos pagas.",
                    disabled: watch("tipoPago") === "2",
                    pattern: {
                        value: /^[0-9]+$/,                            
                        message: 'Solo se permiten numeros'
                    },
                    validate: ()=> watch("montoEft") >= total || "El monto a pagar debe ser superior al total"
                })}/>
                        {errors.montoEft?.type === 'required' && <p role="alert" className='input-error'>{errors.montoEft.message}</p>}
                        {errors.montoEft?.type === 'pattern' && <p role="alert" className='input-error'>{errors.montoEft.message}</p>}
                        {errors.montoEft?.type === 'validate' && <p role="alert" className='input-error'>{errors.montoEft.message}</p>}
                </div>

            </div>
        </div>
        <div className="pedido__button">
            <button type='submit' className='pedido__confirmar button' disabled={total == 0}>
                Confirmar Pedido
            </button>
            {(preferenceId && watch("tipoPago") === "2") && <Wallet initialization={{ preferenceId,redirectMode: 'modal' }} className='button mp_button'/>}
        </div>
       

    </form>
        
     );
}

export default FormDelivery;