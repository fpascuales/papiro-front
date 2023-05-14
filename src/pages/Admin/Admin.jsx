import React from 'react'
import "./Admin.scss";
import { useSelector } from 'react-redux';
import User from '../../components/User/User';
import { useModalSuccess } from '../../customHooks/useModalSuccess';
import Toast from '../../components/Toast/Toast';
const Admin = () => {
    const { users } = useSelector((state) => state.users);
    const { isOpenSuccess, onOpenSuccess, onCloseSuccess } = useModalSuccess();
  return (
    <div className='b-admin'>
      <div className="b-admin__header">
        <h1 className="b-admin__title">Área Administrador</h1>
      </div>
      {users.map((user)=> {
        return (
          <div key={user._id}>
            <User user={user} onOpenSuccess={onOpenSuccess}/>
          </div>
        )
      })}
      {isOpenSuccess && (
        <Toast
          isOpenSuccess={isOpenSuccess}
          onCloseSuccess={onCloseSuccess}
          isEditMode={true}
        />
      )}
    </div>
  )
}

export default Admin