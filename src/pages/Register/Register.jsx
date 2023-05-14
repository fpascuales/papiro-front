import React, { useState } from "react";
import "./Register.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../redux/users/users.actions";
import UploadFile from "../../components/UploadFile/UploadFile";
const Register = () => {
  const { register, handleSubmit } = useForm();
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
        <UploadFile
          isRegister={true}
          register={register}
          funcion={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
        />
        {image && <img className="b-register-form__image" src={image} />}
        <button className="b-register-form__btn">REGISTRARSE</button>
      </form>
    </div>
  );
};

export default Register;
