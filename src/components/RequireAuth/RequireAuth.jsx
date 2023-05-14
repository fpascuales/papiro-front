import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children, userAccess, adminAccess }) => {
    const { user } = useSelector((state) => state.users);
    if(!user && userAccess){
        return children;
    }
    else if(user && userAccess){
        return <Navigate to="/"/>;
    }
    else if(!user){
        return <Navigate to="/"/>;
    }
    else if(adminAccess && user.rol !== "admin"){
        return <Navigate to="/"/>;
    }
    return children;
}

export default RequireAuth