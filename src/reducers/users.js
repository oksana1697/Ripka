import { combineReducers } from 'redux';
import {
    ADD_USER_START,
    ADD_USER_FAILURE,
    ADD_USER_SUCCESS,
    FETCH_USER_SUCCESS,
    FETCH_USER_START,
    FETCH_USER_FAILURE,
    FETCH_USERS_FAILURE,
    FETCH_USERS_SUCCESS,
    DELETE_USER_SUCCESS,
    EDIT_USER_SUCCESS, EDIT_USER_FAILURE, EDIT_USER_START,
} from '../actions/actionTypes';

export const byId = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
    case ADD_USER_SUCCESS:
      return {
        ...state,
        ...action.users,
      };
    case FETCH_USERS_SUCCESS:
      return { ...state, ...action.users};
    case DELETE_USER_SUCCESS:
      const { id } = action;
      let keys = Object.keys(state).filter(el => el !== id);
      let newState = {};
      keys.forEach(item => {
        newState[item] = state[item];
      });
      return { ...newState };
    case EDIT_USER_SUCCESS:
      const { edit_id } = action;
      return state.filter(el => el.id !== edit_id);
    case FETCH_USER_FAILURE:
    case ADD_USER_FAILURE:
    case FETCH_USERS_FAILURE:
      return action;
    default:
      return state;
  }
};
export const allIds = (state = [], action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
    case FETCH_USERS_SUCCESS:
    case ADD_USER_SUCCESS:
      return [...state, ...action.ids].filter(
        (el, i, arr) => arr.indexOf(el) === i,
      );
    case DELETE_USER_SUCCESS: {
      return state.filter(el => el !== action.id);
    }
    case FETCH_USER_FAILURE:
    case FETCH_USERS_FAILURE:
    case ADD_USER_FAILURE:
      return action;
    default:
      return state;
  }
};
const isUserProcessing = (state = false, action) => {
  switch (action.type) {
    case ADD_USER_START:
      case EDIT_USER_START:
      return true;

    case ADD_USER_FAILURE:
    case ADD_USER_SUCCESS:
      case EDIT_USER_FAILURE:
      case EDIT_USER_SUCCESS:
        console.log('user processing end');
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
        [action.id]: true,
      };
      case FETCH_USERS_FAILURE:
      case FETCH_USERS_SUCCESS:
    case FETCH_USER_FAILURE:
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        [action.id]: false,
      };

    default:
      return state;
  }
};
export default combineReducers({
  byId,
  allIds,
  isUserFetching,
  isUserProcessing,
});

export const getIsUserProcessing = state => state.isUserProcessing;
export const getAllAvailableUsers = state => state.users.allIds;
export const getUserById = (state, id) => {
  return state.users.byId[id];
};
export const getIsUserFetching = (id, state) => state.isUserFetching[id];
