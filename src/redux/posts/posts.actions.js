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
const filteredPosts = (posts, user) => {
  try {
    dispatch({ type: "LOADING" });
    const result = posts.filter((post) => post.user === user._id);
    dispatch({
      type: "FILTERED_POSTS",
      payload: {
        postsFiltered: result
      }
    });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.response });
  }
};
const searchPostsByUser = (posts, users, userToFind) => {
  try {
    dispatch({ type: "LOADING" });
    const findUser = users.find((user) => user.username.toLowerCase().includes(userToFind.toLowerCase()));
    const result = posts.filter((post) => post.user === findUser._id);
    dispatch({
      type: "SEARCH_POSTS",
      payload: {
        postsByUser: result,
      },
    });       
  } catch (error) {
    clearSearchPosts();
    dispatch({ type: "ERROR", payload: error.response });
  }
};
const clearSearchPosts = () =>{
  try {
    dispatch({
      type: "CLEAR_SEARCH",
      payload: {
        postsByUser: []
      }
    });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.response });
  }
}
const createPost = async (dataPost, user, onClosePost, onOpenSuccess, navigate) => {
  try {
    dispatch({ type: "LOADING" });
    const formData = new FormData();
    formData.append("user", user);
    formData.append("title", dataPost.title);
    formData.append("body", dataPost.body);
    if(dataPost.image[0]){
      formData.append("image", dataPost.image[0]);
    }
    const result = await APIIMAGES.post("posts", formData);
    await getAllPosts();
    onClosePost();
    navigate("/");
    onOpenSuccess();
    dispatch({
      type: "CREATE_POST",
      payload: result.data
    });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.response.data });
  }
};
const updatePost = async (postId, postToUpdate, user, onClosePost, onOpenSuccess) => {
  try {
    dispatch({ type: "LOADING" });
    const formData = new FormData();
    formData.append("title", postToUpdate.title);
    formData.append("body", postToUpdate.body);
    if(postToUpdate.image[0]){
      formData.append("image", postToUpdate.image[0]);
    }
    const result = await APIIMAGES.put(`posts/${postId}`, formData, {
      headers: {
        user: user._id
      }
    });
    await getAllPosts();
    onClosePost();
    onOpenSuccess();
    dispatch({
      type: "UPDATE_POST",
      payload: result.data
    })
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.response.data });
  }
}
const deletePost = async (postId, onOpenSuccess) => {
  try {
    dispatch({ type: "LOADING" });
    const result = await API.delete(`posts/${postId}`);
    await getAllPosts();
    onOpenSuccess();
    dispatch({
      type: "DELETE_POST",
      payload: result.data
    });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.response.data });
  }
}
const deleteAllPostFromUser = async (posts) => {
  try {
    for (const post of posts) {
      deletePost(post._id);
    }
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.response.data });
  }
}

export {
  getAllPosts,
  filteredPosts,
  searchPostsByUser,
  clearSearchPosts,
  createPost,
  updatePost,
  deletePost,
  deleteAllPostFromUser
};