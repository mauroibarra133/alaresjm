import Path from '../Path'
import '../../styles/login/login.css'
import logoImg from '../../assets/images/alares-logo.png'
import { NavLink } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import foodImg from '../../assets/images/food-bg.png'
import { useId } from 'react';


function SignUp(){
    const {register, handleSubmit} = useForm();
    const emailId = useId();
    const passwordId = useId();
    const nameId = useId();
    const surnameId = useId();

    function onSubmit(data){
        console.log(data);
    }
    return ( 
        <div className="login__container">
        <Path pathPrev={'Home'} pathActual={'Login'}></Path>
        <div className="login__box-container">
            <div className="login__box">
                    <img src={logoImg} alt="" className='login__logo' />
                    <div className="login__square">
                        <div className="login__titles">
                            <p className="login__title">SIGNUP</p>
                            <p className="login__title">LOGIN</p>
                        </div>
                        <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
                             <div className="login__name login__input-wrapper">
                                <label htmlFor={nameId}>Nombre</label>
                                <input type="text" id={nameId} {...register('regName')} placeholder='nombre'/>
                            </div>
                            <div className="login__surname login__input-wrapper">
                                <label htmlFor={surnameId}>Apellido</label>
                                <input type="text" id={surnameId} {...register('regSurname')} placeholder='apellido'/>
                            </div>
                            <div className="login__email login__input-wrapper">
                                <label htmlFor={emailId}>Email</label>
                                <input type="text" id={emailId} {...register('regEmail')} placeholder='email'/>
                            </div>
                            <div className="login__password login__input-wrapper">
                                <label htmlFor={passwordId}>Password</label>
                                <input type="password" id={passwordId} {...register('regPassword')} placeholder='password'/>
                            </div>
                            <div className="login__button">
                                <button type='submit' className='button'>REGISTRARSE</button>
                            </div>
                        </form>
                        <img src={foodImg} alt="Foto de comida" className='login__decoration'/>
                    </div>
                </div>
            <div className="login__msgs">
                <NavLink to='/api/login'>
                <p className='login__msg'>Ya tienes una cuenta? <span>Inicia Sesion</span></p>
                </NavLink>
            </div>
        </div>
        {/* <Modal isSubmitted={errorStatus.isSubmitted} isGoodStatus={!errorStatus.existError} msg={errorStatus.msg}
        handleSubmit={setErrorStatus}
        ></Modal> */}
     </div>
    )
}


export default SignUp;