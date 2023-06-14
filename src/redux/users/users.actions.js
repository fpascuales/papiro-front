import { API, APIIMAGES } from "../../shared/Api";
import store from "../store";
const { dispatch } = store;
const getAllUsers = async () => {
  try {
    dispatch({ type: "LOADING" });
    const result = await API.get("users");
    dispatch({
      type: "GET_USERS",
      payload: {
        users: result.data
      }
    });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.response.data });
  }
};
const getUserById = async (userId) => {
  try {
    dispatch({ type: "LOADING" });
    const result = await API.get(`users/${userId}`);
    dispatch({
      type: "GET_USER",
      payload: {
        userSelected: result.data,
      },
    });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.response.data });
  }
};
const login = async (dataLogin, onCloseLogin) => {
  try {
    const result = await API.post("users/login", dataLogin);
    dispatch({
      type: "LOGIN",
      payload: {
        user: result.data.userToLog,
        token: result.data.token,
      },
    });
    localStorage.setItem("token", result.data.token);
    onCloseLogin();
    window.location.reload();
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.response.data });
  }
};
const signUp = async (dataRegister, navigate) => {
  try {
    const formData = new FormData();
    formData.append("username", dataRegister.username);
    formData.append("email", dataRegister.email);
    formData.append("password", dataRegister.password);
    formData.append("image", dataRegister.image[0]);
    const result = await APIIMAGES.post("users", formData);
    dispatch({
      type: "REGISTER",
      payload: result.data
    });
    const user = {
      username: dataRegister.username,
      password: dataRegister.password
    };
    login(user);
    navigate("/");
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.response.data });
  }
}
const checkSession = async () => {
  try {
    const result = await API.get("users/check");
    dispatch({
      type: "LOGIN",
      payload: {
        user: result.data !== "No estás autorizado" ? result.data : null,
        token: localStorage.getItem("token")
      }
    });
  }
  catch (error) {
    dispatch({ type: "ERROR", payload: error.response.data });
  }
}
const updateUser = async (userId, userToUpdate, onOpenSuccess) => {
  try {
    dispatch({ type: "LOADING" });
    const formData = new FormData();
    formData.append("email", userToUpdate.email);
    if(userToUpdate.password){
      formData.append("password", userToUpdate.password);
    }
    if(userToUpdate.image[0]){
      formData.append("image", userToUpdate.image[0]);
    }
    if(userToUpdate.rol){
      formData.append("rol", userToUpdate.rol);
    }
    const result = await APIIMAGES.put(`users/${userId}`, formData);
    onOpenSuccess();
    dispatch({
      type: "UPDATE_USER",
      payload: result.data
    });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.response.data });
  }
}

const updateOtherUser = async (userId, userToUpdate, onCloseUser, onOpenSuccess) => {
  try {
    dispatch({ type: "LOADING" });
    const formData = new FormData();
    formData.append("email", userToUpdate.email);
    if(userToUpdate.password){
      formData.append("password", userToUpdate.password);
    }
    if(userToUpdate.image[0]){
      formData.append("image", userToUpdate.image[0]);
    }
    if(userToUpdate.rol){
      formData.append("rol", userToUpdate.rol);
    }
    const result = await APIIMAGES.put(`users/${userId}`, formData);
    onCloseUser();
    onOpenSuccess();
    dispatch({
      type: "UPDATE_OTHER_USER",
      payload: result.data
    });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.response.data });
  }
}
const logout = (navigate) => {
  try {
    setTimeout(() => {
      navigate("/");
      dispatch({ type: "LOGOUT" });
    }, 500);
    localStorage.removeItem("token");
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.response.data });
  }
}
const deleteUser = async (userId, onCloseConfirm, onOpenSuccess) => {
  try {
    dispatch({ type: "LOADING" });
    const result = await API.delete(`users/${userId}`);
    await getAllUsers();
    onCloseConfirm();
    onOpenSuccess();
    dispatch({
      type: "DELETE_USER",
      payload: result.data
    });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.response.data });
  }
}

export {
    getAllUsers,
    getUserById,
    login,
    signUp,
    checkSession,
    updateUser,
    updateOtherUser,
    logout,
    deleteUser
};