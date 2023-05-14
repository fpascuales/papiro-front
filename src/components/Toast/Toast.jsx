import React, { useEffect, useState } from 'react'
import "./Toast.scss";
import { Done } from '@mui/icons-material';
const Toast = ({ onCloseSuccess }) => {
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
      <p>¡Hecho!</p>
    </div>
  )
}

export default Toast