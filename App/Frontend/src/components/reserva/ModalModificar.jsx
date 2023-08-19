/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useEffect, useId, useState } from "react";
import { validateDate, validatePastHour, validateTime } from "../../utils/functions";
import '../../styles/reserva/modal-modificar.css'
import {ONLY_LETTERS} from '../../utils/constants'
import cruzImg from '../../assets/images/xmark-solid.svg'
import Modal from "../Modal";
import { updateReserva } from "../../services/reservas.services";

function ModalModificar({showModalUpdate,reserva, handleCloseModalUpdate}) {
    const customersId = useId()
    const zoneId = useId()
    const clientId = useId()
    const fechaReserva = new Date(reserva.fecha).toISOString().split('T')[0]
    const {register, handleSubmit,formState, setValue} = useForm({
        mode: 'onBlur'
    })
    const [showModal, setShowModal] = useState({
        isSubmitted: false,
        isGood: false,
        msg: ''
    })

    const {errors} = formState;
    function closeModal(){
        if(!showModal.isGood){
            setShowModal({
                isSubmitted: false,
                isGood: false,
                msg: ''
            })
        }else{
            setShowModal({
                isSubmitted: false,
                isGood: false,
                msg: ''
            })
            handleCloseModalUpdate()
        }

    }

    function openModal(status,msgBad= "Hubo un error al modificar tu reserva"){
        setShowModal({
            isSubmitted: true,
            isGood: status,
            msg: status ? "Tu reserva ha sido modificada correctamente" : msgBad
        })
    }
    async function onSubmit(data){
        if(data.cliente == reserva.cliente_reserva && parseInt(data.comensales) == reserva.cantidad_personas && data.fecha == fechaReserva 
            && data.hora == reserva.hora && data.zona == reserva.lugar){
                setShowModal({
                    isSubmitted: true,
                    isGood: false,
                    msg: 'No se ha modificado ningun campo'
                })
            }else{
                if(!validatePastHour(data.hora,data.fecha)){
                    openModal(false, 'La hora ingresada es antigua')
                    return
                  }
                const response = await updateReserva(reserva.id, {...data, estado: 'A Confirmar'})
                if(response.status === 200){
                    openModal(true)
                }else{
                    openModal(false)
                }

            }
        }
    useEffect( ()=>{
        setValue('zona', reserva.lugar)
    })
    return ( 
        <>
        {showModalUpdate && (
                    <div className="modal-modificar">
                    <h1>Modificar Datos</h1>
                    <img className="modal-closebutton" src={cruzImg} alt="Close Button" onClick={handleCloseModalUpdate} />
                    <div className="modal-modificar__container">
                    <form className="reservas__form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="reservas__row">
                                <div>
                                    <label htmlFor="">Fecha</label>
                                    <input type="date"  defaultValue={fechaReserva}  {...register("fecha",{required: true, validate: validateDate})} />
                                </div>
                                {errors.fecha?.type === 'required' && <p role="alert" className='form-error'>La fecha es requerida.</p>}                               
                                {errors.fecha?.type === 'validate' && <p role="alert" className='form-error'>La fecha es pasada.</p>}                               
                            </div>
                            <div className="reservas__row">
                                <div>
                                    <label htmlFor="">Hora</label>
                                    <input type="time" defaultValue={reserva.hora} {...register("hora",{required: true,validate: validateTime})} />
                                </div>
                                {errors.hora?.type === 'required' && <p role="alert" className='form-error'>La hora es requerida.</p>}                               
                                {errors.hora?.type === 'validate' && <p role="alert" className='form-error'>Debe ser entre las 19:00hs y 23:00hs.</p>}                               
        
                            </div>
                            <div className="reservas__row">
                                <div>
                                    <label htmlFor={customersId}>Numero de comensales</label>
                                    <input type="number" id={customersId} defaultValue={reserva.cantidad_personas} {...register("comensales",{required: true})} />
                                </div>
                                {errors.comensales?.type === 'required' && <><p role="alert" className='form-error'>La cantidad de comensales</p><p role="alert" className='form-error'> es requerida.</p></>}                               
                            </div>
                            <div className="reservas__row">
                                <div>
                                    <label htmlFor={zoneId}>Zona a reservar</label>
                                    <select name={zoneId} id={zoneId}  {...register("zona",{required: true})}>
                                        <option value="Terraza">Terraza</option>
                                        <option value="Terraza Norte">Terraza Norte</option>
                                        <option value="Salon">Salon</option>
                                        <option value="Patio">Patio</option>
                                    </select>
                                </div>
                            </div>
                            <div className="reservas__row">
                                <div>
                                    <label htmlFor={clientId}>A nombre de</label>
                                    <input type="text" name={clientId} id={clientId} defaultValue={reserva.cliente_reserva} {...register("cliente",{required: true, pattern: ONLY_LETTERS})}/>
                                </div>
                                {errors.cliente?.type === 'required' && <p role="alert" className='form-error'>El nombre es requerido</p>}                               
                                {errors.cliente?.type === 'pattern' && <p role="alert" className='form-error'>El nombre solo debe incluir letras</p>}                               
                            </div>
        
                            <div className="button__wrapper">
                                <button className="button" type='submit'>ACTUALIZAR</button>
                            </div>
                        </form>
                    </div>
                <Modal isSubmitted={showModal.isSubmitted} isGoodStatus={showModal.isGood} handleSubmit={closeModal} msg={showModal.msg} offset={-120}></Modal>
                </div>
        )}
        </>
     );
}

export default ModalModificar;  