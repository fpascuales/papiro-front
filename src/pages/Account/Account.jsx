import React, { useState } from 'react'
import "./Account.scss";
import { useSelector } from 'react-redux';
// import ButtonEdit from '../../components/ButtonEdit/ButtonEdit';
const Account = () => {
    const { user } = useSelector((state) => state.users);
    const [ isEditMode, setIsEditMode ] = useState(false);
    console.log(isEditMode);
  return (
    <div className='b-account'>
        <div className='b-account__header'>
        <h1 className='b-account__title'>Mi Cuenta</h1>
        <button
        onClick={setIsEditMode(true)}
        >EDITAR</button>
        {/* <ButtonEdit setIsEditMode={setIsEditMode}/> */}
        </div>
      <div className="b-account-info">  
        <div>    
            <img className='b-account-left' src={user.image}/>
        </div>
        <div className="b-account-right">
          <div className="b-account-right__right-one">
            <p>Usuario</p>
            <p>Email</p>
            <p>Rol</p>
          </div>
          <div className="b-account-right__right-two">
            <input
              className="b-account-right__input"
              placeholder={user.username}
              disabled
            ></input>
            <input
              className="b-account-right__input"
              placeholder={user.email}
              disabled
            ></input>
            <input
              className="b-account-right__input"
              placeholder={user.rol}
              disabled
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account