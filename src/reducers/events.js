import { combineReducers } from "redux"
import {
  ADD_EVENT_FAILURE,
  ADD_EVENT_SUCCESS,
  FETCH_EVENT_SUCCESS,
  FETCH_EVENT_START,
  FETCH_EVENT_FAILURE,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
  FETCH_EVENTS_START,
  DELETE_EVENT_SUCCESS,
  EDIT_EVENT_SUCCESS,
  SEARCH_EVENTS_SUCCESS
} from "../actions/actionTypes"
import { uniq } from "ramda"

export const byId = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_EVENTS_SUCCESS: {
      const { data } = action

      return {
        ...state,
        ...data.entities.events
      }
    }

    case ADD_EVENT_SUCCESS: {
      const { id, event } = action
      return {
        ...state,
        [id]: event
      }
    }

    case FETCH_EVENT_SUCCESS:
      return {
        ...state,
        ...action.events
      }
    case FETCH_EVENTS_SUCCESS:
      return { ...action.events }
    case DELETE_EVENT_SUCCESS:
      const { id } = action
      let keys = Object.keys(state).filter(el => el !== id)
      let newState = {}
      keys.forEach(item => {
        newState[item] = state[item]
      })

      return { ...newState }

    case EDIT_EVENT_SUCCESS: {
      const { id, event } = action
      return {
        ...state,
        [id]: event
      }
    }

    case FETCH_EVENT_FAILURE:
    case ADD_EVENT_FAILURE:
    case FETCH_EVENTS_FAILURE:
      return action
    default:
      return state
  }
}
export const allIds = (state = [], action) => {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
      return [...action.ids].filter((el, i, arr) => arr.indexOf(el) === i)

    case ADD_EVENT_SUCCESS: {
      const { id } = action
      return uniq([...state, id])
    }

    case FETCH_EVENT_SUCCESS:
      return [...state, ...action.ids].filter((el, i, arr) => arr.indexOf(el) === i)
    case DELETE_EVENT_SUCCESS: {
      return state.filter(el => el !== action.id)
    }
    case FETCH_EVENT_FAILURE:
    case FETCH_EVENTS_FAILURE:
    case ADD_EVENT_FAILURE:
      return action
    default:
      return state
  }
}
const searchEvents = (state = [], action) => {
  switch (action.type) {
    default:
      return state
  }
}

const isFetching = (state = {}, action) => {
  switch (action.type) {
    case FETCH_EVENT_START:
    case FETCH_EVENTS_START:
      return {
        ...state,
        [action.id]: true
      }
    case FETCH_EVENTS_FAILURE:
    case FETCH_EVENTS_SUCCESS:
    case FETCH_EVENT_FAILURE:
    case FETCH_EVENT_SUCCESS:
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
    case SEARCH_EVENTS_SUCCESS: {
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
  isFetching,

  searchEvents,

  searchResults
})

export const getSearchEventsResult = (offset, count, query, state) => {
  const search = state.searchResults[query] || []

  let result = []
  for (let i = 0; i < count; i++) {
    result[i] = search[offset + i]
  }
  result = result.filter(a => a)

  return result.length !== 0 ? result : null
}

export const getEventsSearchResults = state => state.searchEvents
export const getAllAvailableEvents = state => state.allIds
export const getEventById = (state, id) => state.byId[id]
export const getIsEventFetching = (id, state) => state.isFetching[id]
