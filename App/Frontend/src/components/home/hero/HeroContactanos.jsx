import { useState, useId } from 'react';
import {useForm} from 'react-hook-form';
import {addDoubt} from '../../../services/dudas.services'
import { EMAIL_REGEX, ONLY_LETTERS, ONLY_NUMBERS } from '../../../utils/constants';
import Modal from '../../Modal';
import '../../../styles/hero/heroContactanos.css'

// import {DevTool}from '@hookform/devtools'

function HeroContactanos() {
    //Constants
    const formContactId = useId();
    const nameId = useId();
    const surnameId = useId();
    const phoneId = useId();
    const mailId = useId();
    const dudaId = useId();

    //States
    const [clicked,setClicked] = useState(false);
    const [formStatus,setFormStatus] = useState({
        isSubmitted : false,
        goodStatus: false
    });

    //Hooks
    const { register, handleSubmit, formState, reset } = useForm({
        mode: 'onBlur',
    });
    const {errors, isValid} = formState;

    //Functions
    function handleClick(){
        if(Object.keys(errors).length == 0) setClicked(!clicked)
    }
    function handleCloseModal(){
        setFormStatus({
            isSubmitted: false,
            goodStatus: false
        })
    }

    function handleOpenModal(status){
        setFormStatus({
            isSubmitted: true,
            goodStatus: status
        })
    }

    async function onSubmit(data){
        try {
            await addDoubt(data);
            reset();
            handleOpenModal(true)
            
        } catch (error) {
            handleOpenModal(false)   
        }
    }
    return ( 
        <div className={`hero-contactanos__container ${clicked ? "active" : ""}`} name='#contacto' >
            <div className="hero-contactanos__title">
                <h2>Contactanos</h2>
                <p>Contrata nuestro servicio de Foodtrack o haznos tus preguntas!</p>
            </div>
            <form id={formContactId} className="hero-contactanos__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="hero-contactanos__inputs">
                    <div className="hero-contactanos__input">
                        <div>
                            <label htmlFor={nameId}>Nombre</label>
                            <input id={nameId} type="text" placeholder='Ej: Juan' {...register('nombre', { pattern: ONLY_LETTERS, required:true,maxLength:50,minLength:2 })} />
                        </div>
                        {errors.nombre?.type === 'required' && <p role="alert" className='form-error'>Nombre es requerido</p>}
                        {errors.nombre?.type === 'pattern' && <p role="alert" className='form-error'>Solo deben incluir letras</p>}
                    </div>
                    <div className="hero-contactanos__input">
                        <div>
                            <label htmlFor={surnameId}>Apellido</label>
                            <input id={surnameId} type="text" placeholder='Ej: Gonzales'{...register('apellido',{ pattern: ONLY_LETTERS, required:true,maxLength:50,minLength:2})}/>
                        </div>
                        {errors.apellido?.type === 'required' && <p role="alert" className='form-error'>El apellido es requerido</p>}
                        {errors.apellido?.type === 'pattern' && <p role="alert" className='form-error'>Solo deben incluir letras</p>}

        
                    </div>
                    <div className="hero-contactanos__input">
                        <div>
                            <label htmlFor={phoneId} >Telefono</label>
                            <input id={phoneId} type="tel" placeholder='Ej: 3525-6491324'{...register('telefono',{ pattern: ONLY_NUMBERS , required:true,minLength:6})} />
                        </div>
                        {errors.telefono?.type === 'required' && <p role="alert" className='form-error'>El numero es requerido</p>}
                        {errors.telefono?.type === 'pattern' && <p role="alert" className='form-error'>Solo debe incluir numeros</p>}
                    </div>
                    <div className="hero-contactanos__input">
                        <div>
                            <label htmlFor={mailId}>Mail</label>
                            <input id={mailId} type="email" placeholder='Ej: alares@gmail.com'{...register('mail',{pattern: EMAIL_REGEX, required:true,minLength:8})}/>
                        </div>
                            {errors.mail?.type === 'required' && <p role="alert" className='form-error'>El mail es requerido</p>}
                    </div>
                    <div className="hero-contactanos__input">
                        <div>
                            <label htmlFor={dudaId}>Tu duda</label>
                            <textarea name="duda" id={dudaId} cols="30" rows="10" 
                                placeholder='Ej: Como contrato el servicio de foodtruck?' {...register('descripcion', {required:true, minLength:10})}></textarea>
                        </div>
                        {errors.descripcion?.type === 'required' && <p role="alert" className='form-error'>La duda es requerida</p>}
                        {errors.descripcion?.type === 'minLength' && <p role="alert" className='form-error'>Debe ser mayor a 10 caracteres</p>}
                    </div>
                </div>
                <button className={`hero-contactanos__button button`} type='submit'  onClick={handleClick} disabled={!isValid}>Enviar</button>
            </form>
            <Modal isSubmitted={formStatus.isSubmitted}
             handleSubmit={handleCloseModal}
             isGoodStatus={formStatus.goodStatus}
              msg={formStatus.goodStatus ?"Tu duda y/o inquietud se ha enviado correctamente!" : "Tu consulta no ha sido enviada correctamente. Porfavor intente mas tarde."}/>
              {/* <DevTool control={control}></DevTool> */}
        </div>
     );
}

export default HeroContactanos;