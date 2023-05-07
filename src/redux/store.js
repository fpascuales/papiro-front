import { configureStore } from "@reduxjs/toolkit"
import { postsReducer } from "./posts/posts.reducer";
import { usersReducer } from "./users/users.reducer";

export default configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer
    }
})