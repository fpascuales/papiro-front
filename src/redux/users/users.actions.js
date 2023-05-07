import { API } from "../../shared/Api";
import store from "../store";

const { dispatch } = store;

const getAllUsers = async () => {
    dispatch({type: "LOADING"});
    const result = await API.get("users");
    dispatch({
        type: "GET_USERS",
        deploy: {
            users: {
                users: result.data
            }
        }
    })
}
const getUserById = async (userId) => {
    const result = await API.get(`users/${userId}`)
    dispatch({
        type: "GET_USER",
        deploy: {
            userSelected: result.data
        }
    })
}

export {
    getAllUsers,
    getUserById
};