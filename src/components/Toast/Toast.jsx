import React, { useEffect, useState } from 'react'
import "./Toast.scss";
import { Done } from '@mui/icons-material';
const Toast = ({ isOpenSuccess, onCloseSuccess, isEditMode }) => {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setIsVisible(false);
            onCloseSuccess();
        }, 5000);
        return () => clearTimeout(timeOut);
    }, []);
  return (
    <div className={`b-toast ${isVisible ? 'visible slide-up-enter' : 'slide-up-exit'}`}>
        <Done className='toast-icon'/>
        <p>{!isEditMode &&  'Actualizado correctamente'}</p>
    </div>
  )
}

export default Toast