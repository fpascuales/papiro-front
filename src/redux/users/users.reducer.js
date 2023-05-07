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
                users: [...action.deploy.users]
            };
        case "GET_USER":
            return {
                ...state,
                loading: false,
                userSelected: {...action.deploy.userSelected}
            };
        case "LOGIN":
            return{
                ...state,
                loading: false,
                user: action.deploy.user,
                token: action.deploy.token
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
                user: null,
                token: null,
                error: action.deploy
            };
        default:
            return state;
    }
}