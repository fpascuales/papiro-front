import { API } from "../../shared/Api";
import store from "../store";

const { dispatch } = store;

const getAllUsers = async () => {
  try {
    dispatch({ type: "LOADING" });
    const result = await API.get("users");
    dispatch({
      type: "GET_USERS",
      deploy: {
        users: {
          users: result.data,
        },
      },
    });
  } catch (error) {
    dispatch({ type: "ERROR", deploy: error.response.data });
  }
};
const getUserById = async (userId) => {
  try {
    const result = await API.get(`users/${userId}`);
    dispatch({
      type: "GET_USER",
      deploy: {
        userSelected: result.data,
      },
    });
  } catch (error) {
    dispatch({ type: "ERROR", deploy: error.response.data });
  }
};
const login = async (dataLogin) => {
  try {
    dispatch({ type: "LOADING" });
    const result = await API.post("users/login", dataLogin);
    dispatch({
      type: "LOGIN",
      deploy: {
        user: result.data.userToLog,
        token: result.data.token,
      },
    });
    localStorage.setItem("token", result.data.token);
  } catch (error) {
    dispatch({ type: "ERROR", deploy: error.response.data });
  }
};

export {
    getAllUsers,
    getUserById,
    login
};