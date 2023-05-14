import React from "react";
import "./UploadFile.scss";
import { AddPhotoAlternate } from "@mui/icons-material";
const UploadFile = ({ register, funcion, isRegister }) => {
  return (
    <div className="file-input">
      <input
        type="file"
        name="file-input"
        id="file-input"
        className="file-input__input"
        {...register("image")}
        onChange={funcion}
      />
      <label className={isRegister ? "file-input-btn" : "file-input-btn file-input-btn__upload"} htmlFor="file-input">
        <AddPhotoAlternate/>
        <span>Subir imagen</span>
      </label>
    </div>
  );
};

export default UploadFile;
