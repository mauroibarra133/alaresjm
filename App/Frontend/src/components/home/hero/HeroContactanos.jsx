import { useState } from 'react';
import '../../../styles/hero/heroContactanos.css'
import {useForm} from 'react-hook-form';
import {AgregarDuda} from '../../../services/dudas.services'

function HeroContactanos() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [clicked,setClicked] = useState(false);

    function handleClick(){
        if(Object.keys(errors).length == 0) setClicked(!clicked)
    }

    function onSubmit(data){
        AgregarDuda(data);
        reset();
    }
    return ( 
        <div className={`hero-contactanos__container ${clicked ? "active" : ""}`} name='#contacto' >
            <div className="hero-contactanos__title">
                <h2>Contactanos</h2>
                <p>Contrata nuestro servicio de Foodtrack o haznos tus preguntas!</p>
            </div>
            <form className="hero-contactanos__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="hero-contactanos__inputs">
                    <div className="hero-contactanos__input">
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" placeholder='Ej: Juan' {...register('nombre', { pattern: /^[A-Za-z]+$/i, required:true,maxLength:50,minLength:2 })} />
                        </div>
                        {errors.nombre?.type === 'required' && <p role="alert">Nombre es requerido</p>}
                    </div>
                    <div className="hero-contactanos__input">
                        <div>
                            <label htmlFor="apellido">Apellido</label>
                            <input type="text" placeholder='Ej: Gonzales'{...register('apellido',{ pattern: /^[A-Za-z]+$/i, required:true,maxLength:50,minLength:2})}/>
                        </div>
                        {errors.apellido?.type === 'required' && <p role="alert">El apellido es requerido</p>}
        
                    </div>
                    <div className="hero-contactanos__input">
                        <div>
                            <label htmlFor="telefono" >Telefono</label>
                            <input type="tel" placeholder='Ej: 3525-6491324'{...register('telefono',{ pattern: /^[0-9]+$/ , required:true,minLength:6})} />
                        </div>
                        {errors.telefono?.type === 'required' && <p role="alert">El numero es requerido</p>}
                    </div>
                    <div className="hero-contactanos__input">
                        <div>
                            <label htmlFor="mail">Mail</label>
                            <input type="email" placeholder='Ej: alares@gmail.com'{...register('mail',{required:true,minLength:8})}/>
                        </div>
                            {errors.mail?.type === 'required' && <p role="alert">El mail es requerido</p>}
                    </div>
                    <div className="hero-contactanos__input">
                        <div>
                            <label htmlFor="duda">Tu duda</label>
                            <textarea name="duda" id="duda" cols="30" rows="10" 
                                placeholder='Ej: Como contrato el servicio de foodtruck?' {...register('descripcion', {required:true, minLength:10})}></textarea>
                        </div>
                        {errors.descripcion?.type === 'required' && <p role="alert">La duda es requerida</p>}
                    </div>


                </div>
                <input className={`hero-contactanos__button`} type='submit' value={'Enviar'} onClick={handleClick} />
            </form>
        </div>
     );
}

export default HeroContactanos;