import Path from '../Path'
import '../../styles/login/login.css'
import logoImg from '../../assets/images/alares-logo.png'
import {useForm} from 'react-hook-form';
import { useId } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {
    const {register, handleSubmit} = useForm();
    const userId = useId();
    const passwordId = useId();
    const navigate = useNavigate();

     async function onSubmit(data){
        try {
            const response = await axios.post('http://localhost:4000/api/login',data)
            if (response){
                document.cookie = `token=${response.data.token}; max-age=${60 * 60}; path=/; samesite=strict`
                console.log(response.data.msg);
                navigate('/')
            }
        } catch (error) {
            console.log(error.response.data.msg);
        }

    }


    return ( 
        <div className="login__container">
            <Path pathPrev={'Home'} pathActual={'Login'}></Path>
            <div className="login__box-container">
                <div className="login__box">
                        <img src={logoImg} alt="" className='login__logo' />
                        <div className="login__square">
                            <div className="login__titles">
                                <p className="login__title">LOGIN</p>
                                <p className="login__title">SIGNUP</p>
                            </div>
                            <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="login__user">
                                    <label htmlFor={userId}>Email</label>
                                    <input type="text" id={userId} {...register('email')}/>
                                </div>
                                <div className="login__password">
                                    <label htmlFor={passwordId}>Password</label>
                                    <input type="password" id={passwordId} {...register('password')}/>
                                </div>
                                <div className="login__button">
                                    <button type='submit' className='button'>INICIAR SESION</button>
                                </div>

                            </form>
                        </div>
                    </div>
                <div className="login__msgs">
                    <p className='login__msg'>Olvidaste tu contraseña?</p>
                    <p className='login__msg'>No tienes una cuenta? Registrate</p>
                </div>
            </div>
        </div>

     );
}

export default Login;