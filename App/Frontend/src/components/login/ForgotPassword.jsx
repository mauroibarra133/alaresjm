import Path from "../Path";
import logoImg from '../../assets/images/alares-logo.webp'
import { EMAIL_REGEX } from '../../utils/constants';
import {useId} from 'react'
import { NavLink } from "react-router-dom";
import foodImg from '../../assets/images/food-bg.webp'
import { useForm } from "react-hook-form";
import '../../styles/login/login.css'

function ForgotPassword() {

    //Hooks
    const userId = useId();
    const {register, formState} = useForm({
        mode: 'onBlur'
    });
    const {errors} = formState;

    //States

    return ( 
        <div className="login__container">
            <Path pathPrev={'Home'} pathActual={'Reestablecer Contraseña'} goTo={'Home'}></Path>
            <div className="login__box-container">
                <div className="login__box">
                        <img src={logoImg} alt="" className='login__logo' />
                        <div className="login__square">
                            <div className="login__titles">
                                <p className="login__title">LOGIN</p>
                                <p className="login__title">SIGNUP</p>
                            </div>
                            <form className="login__form" onSubmit={()=>console.log('a')}>
                                <div className="login__wrapper">
                                    <div className='login__input-wrapper'>
                                        <label htmlFor={userId}>Email</label>
                                        <input type="text" id={userId} {...register('email',{pattern: EMAIL_REGEX, required:true,minLength:8})} placeholder='email'/>
                                    </div>
                                    {errors.email?.type === 'required' && <p role="alert" className='form-error'>El mail es requerido</p>}                               
                                    {errors.email?.type === 'minLength' && <p role="alert" className='form-error'>El mail debe ser mas largo</p>}                               
                                    {errors.email?.type === 'pattern' && <p role="alert" className='form-error'>Formato de mail incorrecto</p>}     
                                </div>

                                <div className="login__button">
                                    <button type='submit' className='button'>INICIAR SESION</button>
                                </div>
                            </form>
                            <img src={foodImg} alt="Foto de comida" className='login__decoration'/>
                        </div>
                    </div>
                <div className="login__msgs">
                    <NavLink to='/signup'>
                    <p className='login__msg'>No tienes una cuenta? <span>Registrate</span></p>
                    </NavLink>
                    <NavLink to='/signup'>
                    <p className='login__msg'>Olvidaste tu contraseña? <span>Reestablecer</span></p>
                    </NavLink>
                </div>
            </div>
        </div>

     );
}

export default ForgotPassword;