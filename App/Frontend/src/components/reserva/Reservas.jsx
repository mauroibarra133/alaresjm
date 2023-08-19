import { useId,useState } from 'react';
import '../../styles/reserva/reservas.css'
import {useForm} from 'react-hook-form'
import Modal from '../Modal'
import {useAuth} from '../../hooks/useAuth'
import {ONLY_LETTERS} from '../../utils/constants'
import Path from '../Path';
import { agregarReserva } from '../../services/reservas.services';
import { useNavigate } from 'react-router-dom';
import { validateDate, validatePastHour, validateTime } from "../../utils/functions";

function Reservas() {
    const navigate = useNavigate()
    const customersId = useId()
    const zoneId = useId()
    const clientId = useId()
    const {auth} = useAuth()

const {register, handleSubmit,formState} = useForm({
        mode: 'onBlur'
    })
const {errors} = formState;
const [showModal,setShowModal] = useState({
    isSubmitted: false,
    isGood: false,
    msg: ""
});

function handleCloseModal(){
    setShowModal({
    isSubmitted: false,
    isGood: false,
    msg: ""});
    navigate('/')

    }

function handleOpenModal(valor,msgBad= 'Tu reserva no se ha podido confirmar.Intente mas tarde'){
    setShowModal({
    isSubmitted: true,
    isGood: valor,
    msg: valor == true ? "Tu reserva se ha registrado correctamente" : msgBad
});
}

async function onSubmit(data){
    console.log(data);
      if(!validatePastHour(data.hora,data.fecha)){
        handleOpenModal(false, 'La hora ingresada es antigua')
        return
      }
    try {
        const reserva = await agregarReserva(data.fecha,data.hora,auth.data.user_id,data.comensales,data.zona,data.cliente)
        console.log(reserva);
        handleOpenModal(true);
    } catch (error) {
        handleOpenModal(false);
        
    }

}



    return (
        <div className="reservas__container">
            <Path pathPrev={'Home'} pathActual={'Reservas'} goTo={'Home'}></Path>
            <div className="reservas__title"><h2>RESERVAS</h2></div>
            <div className="reservas__form-wrapper">
                <form className="reservas__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="reservas__row">
                        <div>
                            <label htmlFor="">Fecha</label>
                            <input type="date"  {...register("fecha",{required: true, validate: validateDate})} />
                        </div>
                        {errors.fecha?.type === 'required' && <p role="alert" className='form-error'>La fecha es requerida.</p>}                               
                        {errors.fecha?.type === 'validate' && <p role="alert" className='form-error'>La fecha es pasada.</p>}                               
                    </div>
                    <div className="reservas__row">
                        <div>
                            <label htmlFor="">Hora</label>
                            <input type="time"  {...register("hora",{required: true,validate: validateTime})} />
                        </div>
                        {errors.hora?.type === 'required' && <p role="alert" className='form-error'>La hora es requerida.</p>}                               
                        {errors.hora?.type === 'validate' && <p role="alert" className='form-error'>Debe ser entre las 19:00hs y 23:00hs.</p>}                               

                    </div>
                    <div className="reservas__row">
                        <div>
                            <label htmlFor={customersId}>Numero de comensales</label>
                            <input type="number" id={customersId} {...register("comensales",{required: true})} />
                        </div>
                        {errors.comensales?.type === 'required' && <><p role="alert" className='form-error'>La cantidad de comensales</p><p role="alert" className='form-error'> es requerida.</p></>}                               
                    </div>
                    <div className="reservas__row">
                        <div>
                            <label htmlFor={zoneId}>Zona a reservar</label>
                            <select name={zoneId} id={zoneId} {...register("zona",{required: true})}>
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
                            <input type="text" name={clientId} id={clientId} {...register("cliente",{required: true, pattern: ONLY_LETTERS})}/>
                        </div>
                        {errors.cliente?.type === 'required' && <p role="alert" className='form-error'>El nombre es requerido</p>}                               
                        {errors.cliente?.type === 'pattern' && <p role="alert" className='form-error'>El nombre solo debe incluir letras</p>}                               
                    </div>

                    <div className="button__wrapper">
                        <button className="button" type='submit'>RESERVAR</button>
                    </div>
                </form>
            </div>
            <Modal isSubmitted={showModal.isSubmitted} isGoodStatus={showModal.isGood} handleSubmit={handleCloseModal} msg={showModal.msg}></Modal>
        </div>
     );
}

export default Reservas;