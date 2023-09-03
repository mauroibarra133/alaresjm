/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useEffect, useId } from "react";
import '../../styles/delivery/delivery.css'
import { ONLY_NUMBERS, ADDRESS_REGEX } from "../../utils/constants";
import { Wallet } from "@mercadopago/sdk-react";
import LoaderComponent from '../LoaderComponent'

function FormDelivery({onSubmit,total, preferenceId, isOrderedEft, loading}) {

    //Constants
    const clientDirectionId = useId();
    const typePayId = useId();
    const amountEftvoId = useId();
    const deliveryTypeId = useId();
    const notaId = useId();

    //states
    //Hooks
    const {register, watch, formState, handleSubmit, reset} = useForm({
        mode: 'onTouched'
    });
    const {errors} = formState;


    //UseEffects
    useEffect(()=>{
        isOrderedEft.isSubmitted ? reset() : null
    },[isOrderedEft.isSubmitted,reset])

    
    return ( 
        <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
        <div className="order__note-container">
            <label htmlFor={notaId}>Nota de pedido</label>
            <textarea name={notaId} id={notaId} cols="30" rows="5" 
                    placeholder='Por ej: quiero la hamburguesa sin lechuga y las papas sin panceta'
                    {...register('notaPedido')}></textarea>
        </div>
        <div className="order__form">
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
                    disabled: watch("tipoEntrega") !== "1", pattern:ADDRESS_REGEX})}/>
                    {errors.direccionCliente?.type === 'pattern' && <p role="alert" className='form-error input-error'>Algunos caracteres no estan permitidos</p>}
                    {errors.direccionCliente?.type === 'required' && <p role="alert" className='form-error input-error'>{errors.direccionCliente.message}</p>}
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
        <input
            type="text"
            id={amountEftvoId}
            {...register('montoEft', {
                required: "Debes incluir con cuanto efectivo nos pagas.",
                disabled: watch("tipoPago") === "2",
                pattern: {
                    value: ONLY_NUMBERS,
                    message: 'Solo se permiten números'
                },
                validate: (value) => {
                    const parsedValue = parseFloat(value);
                        if(parsedValue >= total && parsedValue <= parsedValue * 2) {
                        return "El monto no puede ser tan grande"

                        }else return "El monto a pagar debe ser superior al total"
                }
            })}
        />
        {errors.montoEft?.type === 'required' && (
            <p role="alert" className='form-error input-error'>
                {errors.montoEft.message}
            </p>
        )}
        {errors.montoEft?.type === 'pattern' && (
            <p role="alert" className='form-error input-error'>
                {errors.montoEft.message}
            </p>
        )}
        {errors.montoEft?.type === 'validate' && (
            <p role="alert" className='form-error input-error'>
                {errors.montoEft.message}
            </p>
        )}
    </div>
</div>

        </div>
        <div className="order__button">
            <button type='submit' className='order__confirmar button' disabled={total == 0}>
                {loading ? <LoaderComponent size={'small'} color={'mp-color'}/>: 'Confirmar pedido'}
            </button>
            
            {(preferenceId && watch("tipoPago") === "2") && <Wallet initialization={{ preferenceId,redirectMode: 'modal' }} className='button mp_button'/>}
        </div>
       

    </form>
        
     );
}

export default FormDelivery;