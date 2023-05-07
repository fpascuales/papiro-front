import { API } from "../../shared/Api.js";
import store from "../store.js";

const { dispatch } = store;

const getAllPosts = async () => {
    dispatch({type: "LOADING"});
    const result = await API.get("posts");
    dispatch({
        type: "GET_POSTS",
        deploy: {
            posts: result.data
        }
    })
}
// const getPostById = async () => {
//     dispatch({type: "LOADING"});
//     const 
// }

export { getAllPosts };