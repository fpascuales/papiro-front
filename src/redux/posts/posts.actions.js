import { API, APIIMAGES } from "../../shared/Api.js";
import store from "../store.js";

const { dispatch } = store;

const getAllPosts = async () => {
  try {
    dispatch({ type: "LOADING" });
    const result = await API.get("posts");
    const sortedPosts = result.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    dispatch({
      type: "GET_POSTS",
      deploy: {
        posts: sortedPosts
      }
    });
  } catch (error) {
    dispatch({ type: "ERROR", deploy: error.response.data });
  }
};
// const getPostById = async () => {
//     dispatch({type: "LOADING"});
//     const 
// }
const createPost = async (dataPost, user, onClosePost, navigate) => {
  try {
    const formData = new FormData();
    formData.append("user", user);
    formData.append("title", dataPost.title);
    formData.append("body", dataPost.body);
    formData.append("image", dataPost.image[0]);
    console.log(formData);
    const result = await APIIMAGES.post("posts", formData);
    dispatch({
      type: "CREATE_POST",
      deploy: result.data
    });
    onClosePost();
    navigate("/");
  } catch (error) {
    dispatch({ type: "ERROR", deploy: error.response.data });
  }
}

export {
  getAllPosts,
  createPost
};