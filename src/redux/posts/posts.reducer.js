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
                posts: [...action.payload.posts]
            };
        case "SELECT_POST":
            return {
                ...state,
                loading: false,
                postSelected: {...action.payload.post}
            };
        case "CREATE_POST":
            return {
                ...state,
                loading: false
            };
        case "UPDATE_POST":
            return {...state};
        case "FILTERED_POSTS":
            return {
                ...state,
                loading: false,
                postsFiltered: [...action.payload.postsFiltered]
            };
        case "SEARCH_POSTS":
            return {
                ...state,
                loading: false,
                postsByUser: [...action.payload.postsByUser]
            };
        case "CLEAR_SEARCH":
            return{
                ...state,
                loading: false,
                postsByUser: []
            }
        case "DELETE_POST":
            return {...state};
        case "ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload};
        default:
            return state;
    }
};