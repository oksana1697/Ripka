import { combineReducers } from "redux";
import {
    ADD_USER_START,
    ADD_USER_FAILURE,
    ADD_USER_SUCCESS,
    FETCH_USER_SUCCESS,
    FETCH_USER_START,
    FETCH_USER_FAILURE, RECEIVE_USERS
} from "../actions/actionTypes";

export const users = (state = [], action) => {
    switch (action.type) {
        case ADD_USER_SUCCESS:
        case FETCH_USER_SUCCESS:
            return [...state, action.user];

        case RECEIVE_USERS:
            console.log("receive_users:",[...action.response])
        return [...state,...action.response];

        default:
            return state;
    }
};

const isUserProcessing = (state = false, action) => {
    switch (action.type) {
        case ADD_USER_START:
            return true;

        case ADD_USER_FAILURE:
        case ADD_USER_SUCCESS:
            return false;

        default:
            return state;
    }
};
const isUserFetching = (state = {}, action) => {
    switch (action.type) {
        case FETCH_USER_START:
            return {
                ...state,
                [action.id]: true
            };

        case FETCH_USER_FAILURE:
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                [action.id]: false
            };

        default:
            return state;
    }
};
export default combineReducers({
    users,
    isUserFetching,
    isUserProcessing
});

export const getIsUserProcessing = state => state.isUserProcessing;
export const getAllAvailableUsers = state => state.users;
export const getUserById = (id, state) =>
    state.users.find(user => user.id === Number(id));

export const getIsUserFetching = (id, state) => state.isUserFetching[id];