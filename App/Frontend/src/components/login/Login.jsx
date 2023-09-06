import Path from '../Path'
import logoImg from '../../assets/images/alares-logo.webp'
import Modal from '../Modal'
import foodImg from '../../assets/images/food-bg.webp'
import {useForm} from 'react-hook-form';
import { useId, useState } from 'react';
import { useNavigate,NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../../utils/constants';
import { login } from '../../services/auth.services';
import '../../styles/login/login.css'
import LoaderComponent from '../LoaderComponent'

function Login() {
    //Hooks
    const {register, handleSubmit, formState} = useForm({
        mode: 'onBlur'
    });
    const {errors} = formState;

    const userId = useId();
    const passwordId = useId();
    const navigate = useNavigate();
    const {isLogued} = useAuth();

    //States
    const [errorStatus, setErrorStatus] = useState({
        isSubmitted: false,
        existError: false,
        msg: ''
})
const [isLoading, setIsLoading] = useState(false);

    //functions
    function handleCloseModal(){
        setErrorStatus({
            isSubmitted: false,
            existError: false,
            msg: ""
        })
        document.body.classList.remove('disable-scroll');
        !errorStatus.existError ? navigate('/') : null

    }
     async function onSubmit(data){
        setIsLoading(true); 
        try {
            const response = await login(data)
            if(response.status >= 200 && response.status < 300){
                isLogued()
                setErrorStatus({
                    isSubmitted: true,
                    existError: false,
                    msg: "Ha sido logueado correctamente"
                    })
                document.body.classList.add('disable-scroll');
            }
        setIsLoading(false); 
        } catch (error) {
            setErrorStatus({
                isSubmitted: true,
                existError: true,
                msg: error.message
                });
                console.log(error);
            document.body.classList.add('disable-scroll');
            setIsLoading(false); 
        }
    }


    return ( 
        <div className="login__container">
            <Path pathPrev={'Home'} pathActual={'Login'} goTo={'Home'}></Path>
            <div className="login__box-container">
                <div className="login__box">
                        <img src={logoImg} alt="Alares Logo" className='login__logo' />
                        <div className="login__square">
                            <div className="login__titles">
                                <p className="login__title">LOGIN</p>
                                <p className="login__title">SIGNUP</p>
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
                                <div className="login__wrapper">
                                    <div className="login__input-wrapper">
                                        <label htmlFor={passwordId}>Password</label>
                                        <input type="password" id={passwordId} {...register('password', {minLength: 8,required:true, pattern: PASSWORD_REGEX })} placeholder='password'/>
                                    </div>
                                    {errors.password?.type === 'required' && <p role="alert" className='form-error'>La contraseña es requerida</p>}
                                    {errors.password?.type === 'pattern' && <p role="alert" className='form-error'>La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial </p>}
                                    {errors.password?.type === 'minLength' && <p role="alert" className='form-error'>La contraseña debe ser de al menos 8 caracteres </p>}
                                </div>
                                <div className="login__button">
                                    <button type='submit' className='button'>
                                        {isLoading ? <LoaderComponent size={'small-button'} color={'orange'}/> : 'INICIAR SESION'}
                                    </button>
                                </div>
                            </form>
                            <img src={foodImg} alt="Foto de comida" className='login__decoration'/>
                        </div>
                    </div>
                <div className="login__msgs">
                    <NavLink to='/signup'>
                    <p className='login__msg'>No tienes una cuenta? <span>Registrate</span></p>
                    </NavLink>
                    <NavLink to='/forgot-password'>
                        <p className='login__msg'>Olvidaste tu contraseña? <span>Reestablecer</span></p>
                    </NavLink>
                </div>
            </div>
            {errorStatus.isSubmitted && (
            <Modal isSubmitted={errorStatus.isSubmitted} isGoodStatus={!errorStatus.existError} msg={errorStatus.msg}
            handleSubmit={handleCloseModal}
            ></Modal>
            )}

        </div>

     );
}

export default Login;