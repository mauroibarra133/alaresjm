import { useState, useId } from 'react';
import '../../../styles/hero/heroContactanos.css'
import {useForm} from 'react-hook-form';
import {AgregarDuda} from '../../../services/dudas.services'
// import {DevTool}from '@hookform/devtools'

import Modal from '../../Modal';

function HeroContactanos() {
    const formContactId = useId();
    const nameId = useId();
    const surnameId = useId();
    const phoneId = useId();
    const mailId = useId();
    const dudaId = useId();
    const { register, handleSubmit, formState, reset } = useForm({
        mode: 'onBlur',
        
    });
    const {errors, isValid, isDirty} = formState;
    const [clicked,setClicked] = useState(false);
    const [formStatus,setFormStatus] = useState({
        isSubmitted : false,
        goodStatus: false
    });

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
        const response = await AgregarDuda(data);
        console.log(response);
        reset();
        if(response.status >= 200 && response.status < 300){
            handleOpenModal(true)
        }else{
            handleOpenModal(false)
        }
        // setTimeout(() => {
        //     handleCloseModal()
        // }, 3000);
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
                            <input id={nameId} type="text" placeholder='Ej: Juan' {...register('nombre', { pattern: /^[A-Za-z\s]+$/, required:true,maxLength:50,minLength:2 })} />
                        </div>
                        {errors.nombre?.type === 'required' && <p role="alert">Nombre es requerido</p>}
                        {errors.nombre?.type === 'pattern' && <p role="alert">Solo deben incluir letras</p>}
                    </div>
                    <div className="hero-contactanos__input">
                        <div>
                            <label htmlFor={surnameId}>Apellido</label>
                            <input id={surnameId} type="text" placeholder='Ej: Gonzales'{...register('apellido',{ pattern: /^[A-Za-z\s]+$/, required:true,maxLength:50,minLength:2})}/>
                        </div>
                        {errors.apellido?.type === 'required' && <p role="alert">El apellido es requerido</p>}
                        {errors.apellido?.type === 'pattern' && <p role="alert">Solo deben incluir letras</p>}

        
                    </div>
                    <div className="hero-contactanos__input">
                        <div>
                            <label htmlFor={phoneId} >Telefono</label>
                            <input id={phoneId} type="tel" placeholder='Ej: 3525-6491324'{...register('telefono',{ pattern: /^[0-9]+$/ , required:true,minLength:6})} />
                        </div>
                        {errors.telefono?.type === 'required' && <p role="alert">El numero es requerido</p>}
                        {errors.telefono?.type === 'pattern' && <p role="alert">Solo debe incluir numeros</p>}
                    </div>
                    <div className="hero-contactanos__input">
                        <div>
                            <label htmlFor={mailId}>Mail</label>
                            <input id={mailId} type="email" placeholder='Ej: alares@gmail.com'{...register('mail',{required:true,minLength:8})}/>
                        </div>
                            {errors.mail?.type === 'required' && <p role="alert">El mail es requerido</p>}
                    </div>
                    <div className="hero-contactanos__input">
                        <div>
                            <label htmlFor={dudaId}>Tu duda</label>
                            <textarea name="duda" id={dudaId} cols="30" rows="10" 
                                placeholder='Ej: Como contrato el servicio de foodtruck?' {...register('descripcion', {required:true, minLength:10})}></textarea>
                        </div>
                        {errors.descripcion?.type === 'required' && <p role="alert">La duda es requerida</p>}
                        {errors.descripcion?.type === 'minLength' && <p role="alert">Debe ser mayor a 10 caracteres</p>}
                    </div>
                </div>
                <button className={`hero-contactanos__button button`} type='submit'  onClick={handleClick} disabled={!isDirty || !isValid}>Enviar</button>
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