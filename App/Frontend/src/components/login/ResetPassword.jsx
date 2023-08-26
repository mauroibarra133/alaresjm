import Path from "../Path";
import logoImg from '../../assets/images/alares-logo.webp'
import {useForm} from 'react-hook-form'
import { useId, useState } from "react";
import { NavLink } from "react-router-dom";
import { PASSWORD_REGEX } from '../../utils/constants';
import foodImg from '../../assets/images/food-bg.webp'
import '../../styles/login/login.css'
import { useParams } from 'react-router-dom';
import { changePassword } from "../../services/auth.services";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
    //Constants
    const passwordID = useId();
    const confirmPasswordID = useId();
    const navigate = useNavigate()

    //States
    let [msg, setMsg] = useState('')

    //Hooks
    const {register, formState, handleSubmit, getValues} = useForm({
        mode: 'onBlur'
    });
    const {errors} = formState;
    const { id, token } = useParams();

    //functions
    async function onSubmit(data){
        console.log(data);
        try {
            const response = await changePassword(id,token,data.password);
            console.log(response);
        setMsg('La contraseña se ha cambiado correctamente');
            setTimeout(() => {
                setMsg('')
                navigate('/login')
            }, 2000);
        } catch (error) {
            console.log(error);
        }


    }

    function checkPasswords(confirmPassword){
        if(confirmPassword == getValues("password")){
            return true
        }
        return false
    }
    return ( 
        <div className="login__container">
        <Path pathPrev={'Home'} pathActual={'Cambiar Contraseña'} goTo={'Home'}></Path>
        <div className="login__box-container">
            <div className="login__box">
                    <img src={logoImg} alt="" className='login__logo' />
                    <div className="login__square">
                        <div className="login__titles">
                            <p className="login__title">RESET PASSWORD</p>
                            {/* <p className="login__title">SIGNUP</p> */}
                        </div>
                        <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="login__wrapper reset-passw__wrapper">
                                <div className='login__input-wrapper'>
                                    <label htmlFor={passwordID}>Contraseña</label>
                                    <input type="password" id={passwordID} {...register('password',{pattern: PASSWORD_REGEX, required:true,minLength:8})} placeholder='password'/>
                                </div>
                                 {errors.password?.type === 'required' && <p role="alert" className='form-error'>La contraseña es requerida</p>}
                                    {errors.password?.type === 'pattern' && <p role="alert" className='form-error'>La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial </p>}
                                    {errors.password?.type === 'minLength' && <p role="alert" className='form-error'>La contraseña debe ser de al menos 8 caracteres </p>}
                                <div className='login__input-wrapper'>
                                    <label htmlFor={confirmPasswordID}>Confirmar contraseña</label>
                                    <input type="password" id={confirmPasswordID} {...register('confirmPassword',{pattern: PASSWORD_REGEX, required:true,minLength:8, validate: checkPasswords})} placeholder='confirm password'/>
                                </div>
                                 {errors.confirmPassword?.type === 'required' && <p role="alert" className='form-error'>La contraseña es requerida</p>}
                                    {errors.confirmPassword?.type === 'pattern' && <p role="alert" className='form-error'>La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial </p>}
                                    {errors.confirmPassword?.type === 'minLength' && <p role="alert" className='form-error'>La contraseña debe ser de al menos 8 caracteres </p>}
                                    {errors.confirmPassword?.type === 'validate' && <p role="alert" className='form-error'>Las contraseñas no coinciden </p>}
                            </div>
                            {msg &&  <p className="form-error" style={{color: '#4e7848'}}>{msg}</p>}
                            <div className="login__button">
                                <button type='submit' className='button'>REESTABLECER</button>
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

export default ResetPassword;