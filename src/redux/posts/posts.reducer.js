const INITIAL_STATE = {
    posts: [],
    postsFiltered: [],
    postsByUser: [],
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
                posts: [...action.payload.posts],
                error: null
            };
        case "SELECT_POST":
            return {
                ...state,
                loading: false,
                postSelected: {...action.payload.post},
                error: null
            };
        case "CREATE_POST":
            return {
                ...state,
                loading: false,
                error: null
            };
        case "UPDATE_POST":
            return {
                ...state,
                loading: false,
                error: null
            };
        case "FILTERED_POSTS":
            return {
                ...state,
                loading: false,
                postsFiltered: [...action.payload.postsFiltered],
                error: null
            };
        case "SEARCH_POSTS":
            return {
                ...state,
                loading: false,
                postsByUser: [...action.payload.postsByUser],
                error: null
            };
        case "CLEAR_SEARCH":
            return{
                ...state,
                loading: false,
                postsByUser: [],
                error: null
            }
        case "DELETE_POST":
            return {
                ...state,
                loading: false,
                error: null
            };
        case "ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload};
        default:
            return state;
    }
};