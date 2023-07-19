import { useId,useState } from 'react';
import '../../styles/reserva/reservas.css'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import Modal from '../Modal'
import {useAuth} from '../../hooks/useAuth'
import {ONLY_LETTERS} from '../../utils/constants'
function Reservas() {

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
    }

function handleOpenModal(valor){
    setShowModal({
    isSubmitted: true,
    isGood: valor,
    msg: valor == true ? "Tu reserva se ha registrado correctamente" : "Tu reserva no se ha podido confirmar.Intente mas tarde"
});
}

async function onSubmit(data){
    console.log(data);
    try {
        const response = await axios.post("http://localhost:4000/reservas",{
            fecha: data.fecha,
            hora: data.hora,
            id_usuario: auth.data.user_id,
            cantidad_personas: data.comensales,
            lugar: data.zona,
            cliente_reserva: data.cliente
        });
        console.log(response);
        handleOpenModal(true);
    } catch (error) {
        handleOpenModal(false);
        
    }

}
    return (
        <div className="reservas__container">
            <div className="reservas__title"><h2>RESERVAS</h2></div>
            <div className="reservas__form-wrapper">
                <form className="reservas__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="reservas__row">
                        <div>
                            <label htmlFor="">Fecha</label>
                            <input type="date"  {...register("fecha",{required: true})} />
                        </div>
                        {errors.fecha?.type === 'required' && <p role="alert" className='form-error'>La fecha es requerida.</p>}                               
                    </div>
                    <div className="reservas__row">
                        <div>
                            <label htmlFor="">Hora</label>
                            <input type="time"  {...register("hora",{required: true})} />
                        </div>
                        {errors.hora?.type === 'required' && <p role="alert" className='form-error'>La hora es requerida.</p>}                               

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