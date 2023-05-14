import React, { useEffect, useState } from "react";
import "./ModalPost.scss";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost, updatePost } from "../../redux/posts/posts.actions";
import UploadFile from "../UploadFile/UploadFile";
import { DeleteForever } from "@mui/icons-material";
const ModalPost = ({ onClosePost, isEditing, post, onOpenSuccess }) => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const { error } = useSelector((state) => state.posts);
  const user = useSelector((state) => state.users.user._id);
  const navigate = useNavigate();
  const [image, setImage] = useState();
  const [textLength, setTextLength] = useState(0);
  const textAreaValue = watch("body", "");
  const onSubmit = (dataPost) => {
    if(isEditing && post) { 
      updatePost(post._id, dataPost, user, onClosePost, onOpenSuccess);
    }
    else{
      createPost(dataPost, user, onClosePost, onOpenSuccess, navigate);
    }
  };
  const resetImage = () => {setImage('');}
  useEffect(() => {
    if(isEditing && post) {
      setValue("title", post.title);
      setValue("body", post.body);
      if(post.image){ setImage(post.image);}
    }
  }, [isEditing, post, setValue]);
  useEffect(() => {
    setTextLength(textAreaValue.length);
  }, [textAreaValue]);
  const handleInputChage = (e) => {
    setTextLength(e.target.value.length);
  }
  const maxLength = 200;
  const remainingChars = maxLength - textLength;
  return (
    <div className="b-create-post">
      <form className="b-create-post b-create-post-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="b-create-post b-create-post-form">
          <input
            className="b-create-post-form__input"
            {...register("title")}
            placeholder="Título (max. 50 carácteres)"
            maxLength={50}
          />
          <textarea
            className="b-create-post-form__textarea"
            {...register("body")}
            placeholder="Mensaje"
            maxLength={maxLength}
            onChange={handleInputChage}
          />
          <p className="e-textarea-info">{remainingChars} caracteres restantes</p>
          <UploadFile register={register} funcion={(e) => setImage(URL.createObjectURL(e.target.files[0]))}/>
          {image && 
            <div>
              <DeleteForever className="e-del-image" onClick={resetImage}/>
              <img className="b-create-post-form__image" src={image}/>
            </div>
          }
          <p className="b-create-post-form__error">{error && error}</p>
        </div>
        <div className="b-create-post-btns">
          <button className="b-create-post-btns__btn b-create-post-btns__left" onClick={onClosePost}>CANCELAR</button>
          <button className="b-create-post-btns__btn b-create-post-btns__right">{isEditing ? "ACTUALIZAR" : "PUBLICAR"}</button>
        </div>
      </form>
    </div>
  );
};

export default ModalPost;