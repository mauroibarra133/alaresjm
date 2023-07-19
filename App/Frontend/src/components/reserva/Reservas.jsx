import { useId } from 'react';
import '../../styles/reserva/reservas.css'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {useAuth} from '../../hooks/useAuth'

function Reservas() {

    const customersId = useId()
    const zoneId = useId()
    const clientId = useId()
    const {auth} = useAuth()
const {register, handleSubmit,formState} = useForm({
        mode: 'onBlur'
    })
const {errors} = formState;
console.log(auth);
async function onSubmit(data){
    console.log(data);
    const response = await axios.post("http://localhost:4000/reservas",{
        fecha: data.fecha,
        hora: data.hora,
        id_usuario: 1,
        cantidad_personas: data.comensales,
        lugar: data.zona,
        cliente_reserva: data.cliente
    });

    console.log(response);
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
                            <input type="text" name={clientId} id={clientId} {...register("cliente",{required: true})}/>
                        </div>
                        {errors.cliente?.type === 'required' && <p role="alert" className='form-error'>El nombre es requerido</p>}                               
                    </div>

                    <div className="button__wrapper">
                        <button className="button" type='submit'>RESERVAR</button>
                    </div>
                </form>

            </div>

        </div>
     );
}

export default Reservas;