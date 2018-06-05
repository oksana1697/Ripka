import { combineReducers } from "redux"
import {
    ADD_USER_FAILURE,
    ADD_USER_SUCCESS,
    FETCH_USER_SUCCESS,
    FETCH_USER_START,
    FETCH_USER_FAILURE,
    FETCH_USERS_FAILURE,
    FETCH_USERS_SUCCESS,
    DELETE_USER_SUCCESS,
    EDIT_USER_SUCCESS,
    SEARCH_USERS_SUCCESS,
    SEARCH_USERS_FAILURE,
    FETCH_USERS_START, SEARCH_EVENTS_SUCCESS
} from "../actions/actionTypes"
import { uniq } from "ramda"

export const byId = (state = {}, action) => {
  switch (action.type) {
      case SEARCH_USERS_SUCCESS: {
          const { data } = action

          return {
              ...state,
              ...data.entities.users
          }
      }

      case ADD_USER_SUCCESS: {
      const { id, user } = action
      return {
        ...state,
        [id]: user
      }
    }

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        ...action.users
      }
    case FETCH_USERS_SUCCESS:
      return { ...action.users }
    case DELETE_USER_SUCCESS:
      const { id } = action
      let keys = Object.keys(state).filter(el => el !== id)
      let newState = {}
      keys.forEach(item => {
        newState[item] = state[item]
      })
      return { ...newState }
    case EDIT_USER_SUCCESS: {
      const { id, user } = action
      return {
        ...state,
        [id]: user
      }
    }
    case FETCH_USER_FAILURE:
    case ADD_USER_FAILURE:
    case FETCH_USERS_FAILURE:
      return action
    default:
      return state
  }
}
export const allIds = (state = [], action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return [...state, ...action.ids].filter((el, i, arr) => arr.indexOf(el) === i)

    case FETCH_USERS_SUCCESS:
      return [...action.ids].filter((el, i, arr) => arr.indexOf(el) === i)

    case ADD_USER_SUCCESS: {
      const { id } = action
      return uniq([...state, id])
    }

    case DELETE_USER_SUCCESS: {
      return state.filter(el => el !== action.id)
    }
    case FETCH_USER_FAILURE:
    case FETCH_USERS_FAILURE:
    case ADD_USER_FAILURE:
      return action
    default:
      return state
  }
}

const searchUsers = (state = [], action) => {
    switch (action.type) {
        default:
            return state
    }
}
const isUserFetching = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_START:
    case FETCH_USERS_START:
      return {
        ...state,
        [action.id]: true
      }
    case FETCH_USERS_FAILURE:
    case FETCH_USERS_SUCCESS:
    case FETCH_USER_FAILURE:
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        [action.id]: false
      }

    default:
      return state
  }
}

const searchResults = (state = {}, action) => {
    switch (action.type) {
        case SEARCH_USERS_SUCCESS: {
            const { query, offset, count, data } = action

            const result = state[query] || []
            for (let i = 0; i < count; i++) {
                result[offset + i] = data.result[i]
            }

            return {
                ...state,
                [query]: result
            }
        }
        default:
            return state
    }
}



export default combineReducers({
  byId,
  allIds,
  isUserFetching,
  searchUsers,
    searchResults
})


export const getSearchUsersResult = (offset, count, query, state) => {
    const search = state.searchResults[query] || []

    let result = []
    for (let i = 0; i < count; i++) {
        result[i] = search[offset + i]
    }
    result = result.filter(a => a)

    return result.length !== 0 ? result : null
}

export const getUsersSearchResults = state => state.searchUsers
export const getAllAvailableUsers = state => state.allIds
export const getUserById = (state, id) => state.byId[id]
export const getIsUserFetching = (id, state) => state.isUserFetching[id]
