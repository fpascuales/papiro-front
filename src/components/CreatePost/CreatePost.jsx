import React, { useState } from "react";
import "./CreatePost.scss";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../redux/posts/posts.actions";
import UploadFile from "../UploadFile/UploadFije";

const CreatePost = ({ onClosePost }) => {
  const { register, handleSubmit } = useForm();
  const { error } = useSelector((state) => state.posts);
  const user = useSelector((state) => state.users.user._id);
  const navigate = useNavigate();
  const [image, setImage] = useState();
  return (
    <div className="b-create-post">
      <form
        className="b-create-post b-create-post-form"
        onSubmit={handleSubmit((dataPost) => createPost(dataPost, user, onClosePost, navigate))}
      >
        <div className="b-create-post b-create-post-form">
        <input
            className="b-create-post-form__input"
            {...register("title")}
            placeholder="Título"
        />
        <textarea
            className="b-create-post-form__textarea"
            {...register("body")}
            placeholder="Mensaje"
        />
        <UploadFile
            register={register}
            funcion={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
        />
        {image && <img className="b-create-post-form__image" src={image}/>}
        </div>
        <p className="b-create-post-form__error">{error && error}</p>
        <div className="b-create-post-btns">
        <button className="b-create-post-btns__btn b-create-post-btns__left" onClick={onClosePost}>
          CANCELAR
        </button>
        <button className="b-create-post-btns__btn b-create-post-btns__right">PUBLICAR</button>
        </div>
      </form>

    </div>
  );
};

export default CreatePost;