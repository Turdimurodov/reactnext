import { SET_ERROR, SET_LOADING, SET_USERS } from "../Action/Types";

const InitialState = {
    usersdata: [],
    loading: true,
    error: false,
};

export const UsersReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_USERS: return { ...state, usersdata: action.payload, loading: false };
        case SET_LOADING: return { ...state, loading: true, error: false }
        case SET_ERROR: return { ...state, error: true, loading: false }
        default: return state;
    }
}