import React, { useState } from "react";
import "./Register.scss";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../redux/users/users.actions";
import UploadFile from "../../components/UploadFile/UploadFije";
const Register = () => {
  const { register, handleSubmit } = useForm();
  const { error } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const [image, setImage] = useState();
  return (
    <div className="b-register">
      <form
        className="b-register-form"
        onSubmit={handleSubmit((dataRegister) => signUp(dataRegister, navigate))}
      >
        <input
          className="b-register-form__input"
          {...register("username")}
          placeholder="Usuario"
        />
        <input
          className="b-register-form__input"
          {...register("email")}
          placeholder="Email"
          type="email"
        />
        <input
          className="b-register-form__input"
          {...register("password")}
          placeholder="Contraseña"
          type="password"
        />
        {/* METER COMPROBACIÓN DE CONTRASEÑAS */}
        {/* <input className='b-register-form__input' {...register("password")} placeholder='Confirmar Contraseña' type='password'/> */}
        <UploadFile
          register={register}
          funcion={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
        />
        {image && <img src={image} />}
        <button className="b-register-form__btn">REGISTRARSE</button>
      </form>
    </div>
  );
};

export default Register;
