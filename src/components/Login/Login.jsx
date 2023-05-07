import React from 'react'
import "./Login.scss";
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { login } from '../../redux/users/users.actions';
import { Link } from 'react-router-dom';
const Login = ({ onClose }) => {
    const { register, handleSubmit } = useForm();
    const { error } = useSelector((state) => state.users);
  return (
        <div className='b-login'>

        <form className='b-login-form' onSubmit={handleSubmit((dataLogin) => login(dataLogin))}>
            <input className='b-login-form__input' {...register("username")} placeholder='Usuario'/>
            <input className='b-login-form__input' {...register("password")} placeholder='Contraseña' type='password'/>
            <p className='b-login-form__error'>{error && error}</p>
            <button className='b-login-form__btn'>Iniciar Sesión</button>
        </form>
        <div className='b-login-info'>
            <p>¿No tienes una cuenta?</p>
            <p>Regístraté <Link className='b-login-info__link' to="/register" onClick={onClose}>aquí</Link></p>
        </div>
        </div>
  )
}

export default Login