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
      payload: {
        posts: sortedPosts
      }
    });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.response.data });
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
    if(dataPost.image[0]){
      formData.append("image", dataPost.image[0]);
    }
    const result = await APIIMAGES.post("posts", formData);
    await getAllPosts();
    dispatch({
      type: "CREATE_POST",
      payload: result.data
    });
    onClosePost();
    navigate("/");
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.response.data });
  }
}
const deletePost = async (postId) => {
  try {
    const result = await API.delete(`posts/${postId}`);
    await getAllPosts();
    dispatch({
      type: "DELETE_POST",
      payload: result.data
    });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.response.data });
  }
}

export {
  getAllPosts,
  createPost,
  deletePost
};