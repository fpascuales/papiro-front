const INITIAL_STATE = {
    user: null,
    users: [],
    userSelected: null,
    token: null,
    loading: false,
    error: null
}

export const usersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOADING":
            return {...state, loading: true};
        case "GET_USERS":
            return {
                ...state,
                loading: false,
                users: [...action.payload.users],
                error: null
            };
        case "GET_USER":
            return {
                ...state,
                loading: false,
                userSelected: {...action.payload.userSelected},
                error: null
            };
        case "REGISTER":
            return {
                ...state,
                loading: false,
                error: null
            };
        case "UPDATE_USER":
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null
            };
        case "UPDATE_OTHER_USER":
            return {
                ...state,
                loading: false,
                error: null
            };
        case "LOGIN":
            return{
                ...state,
                loading: false,
                user: action.payload.user,
                token: action.payload.token,
                error: null
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
                token: null,
                error: null
            };
        case "DELETE_USER":
            return {
                ...state,
                loading: false,
                error: null
            };
        case "ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}