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
                users: [...action.payload.users]
            };
        case "GET_USER":
            return {
                ...state,
                loading: false,
                userSelected: {...action.payload.userSelected}
            };
        case "REGISTER":
            return {
                ...state,
                loading: false
            };
        case "UPDATE_USER":
            return {
                ...state,
                user: action.payload,
                loading: false
            };
        case "LOGIN":
            return{
                ...state,
                loading: false,
                user: action.payload.user,
                token: action.payload.token
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
                token: null
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