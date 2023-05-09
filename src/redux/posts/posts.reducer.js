const INITIAL_STATE = {
    posts: [],
    postsFiltered: [],
    postSelected: null,
    loading: false,
    error: null
};

export const postsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOADING":
            return {...state, loading: true};
        case "GET_POSTS":
            return {
                ...state,
                loading: false,
                posts: [...action.deploy.posts]
            };
        case "SELECT_POST":
            return {
                ...state,
                loading: false,
                postSelected: {...action.deploy.post}
            };
        case "CREATE_POST":
            return {
                ...state,
                loading: false
            };
        case "UPDATE_POST":
            return {...state};
        case "DELETE_POST":
            return {...state};
        case "ERROR":
            return {
                ...state,
                loading: false,
                error: action.deploy};
        default:
            return state;
    }
};