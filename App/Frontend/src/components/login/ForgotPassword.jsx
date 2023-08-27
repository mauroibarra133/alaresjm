import Path from "../Path";
import logoImg from '../../assets/images/alares-logo.webp'
import { EMAIL_REGEX } from '../../utils/constants';
import {useId, useState} from 'react'
import { NavLink } from "react-router-dom";
import foodImg from '../../assets/images/food-bg.webp'
import { useForm } from "react-hook-form";
import '../../styles/login/login.css'
import { sendPasswordLink } from "../../services/auth.services";

function ForgotPassword() {

    //Hooks
    const userId = useId();
    const {register, formState, handleSubmit} = useForm({
        mode: 'onBlur'
    });
    const {errors} = formState;

    //States
    let [msg, setMsg] = useState('')

    //Functions
    async function onSubmit(data){
       const response = await sendPasswordLink(data)
       console.log(response);

       if(response.status == 201){
            setMsg(true)
        }
    }
    return ( 
        <div className="login__container">
            <Path pathPrev={'Home'} pathActual={'Reestablecer Contraseña'} goTo={'Home'}></Path>
            <div className="login__box-container">
                <div className="login__box">
                        <img src={logoImg} alt="Alares Logo" className='login__logo' />
                        <div className="login__square">
                            <div className="login__titles">
                                <p className="login__title">RESET PASSWORD</p>
                                {/* <p className="login__title">SIGNUP</p> */}
                            </div>
                            <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="login__wrapper">
                                    <div className='login__input-wrapper'>
                                        <label htmlFor={userId}>Email</label>
                                        <input type="text" id={userId} {...register('email',{pattern: EMAIL_REGEX, required:true,minLength:8})} placeholder='email'/>
                                    </div>
                                    {errors.email?.type === 'required' && <p role="alert" className='form-error'>El mail es requerido</p>}                               
                                    {errors.email?.type === 'minLength' && <p role="alert" className='form-error'>El mail debe ser mas largo</p>}                               
                                    {errors.email?.type === 'pattern' && <p role="alert" className='form-error'>Formato de mail incorrecto</p>}     
                                </div>
                                {msg &&  <p className="form-error" style={{color: '#4e7848'}}>El link para cambiar la contraseña se envió a su mail.</p>}
                                <div className="login__button">
                                    <button type='submit' className='button'>ENVIAR MAIL</button>
                                </div>
                            </form>
                            <img src={foodImg} alt="Foto de comida" className='login__decoration'/>
                        </div>
                    </div>
                <div className="login__msgs">
                    <NavLink to='/signup'>
                    <p className='login__msg'>No tienes una cuenta? <span>Registrate</span></p>
                    </NavLink>
                    <NavLink to='/login'>
                    <p className='login__msg'>Ya tienes cuenta? <span>Iniciar Sesion</span></p>
                    </NavLink>
                </div>
            </div>
        </div>

     );
}

export default ForgotPassword;