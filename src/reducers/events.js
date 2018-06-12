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
  SEARCH_EVENTS_SUCCESS,
  SEARCH_EVENTS_START,
  SEARCH_EVENTS_FAILURE
} from "../actions/actionTypes"
import { pathOr, uniq, contains, path } from "ramda"

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

    case FETCH_EVENT_SUCCESS:
      return [...state, ...action.ids].filter((el, i, arr) => arr.indexOf(el) === i)

    case ADD_EVENT_SUCCESS: {
      const { id } = action
      return uniq([...state, id])
    }

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
    case EDIT_EVENT_SUCCESS:
    case ADD_EVENT_SUCCESS:
      return {}

    case SEARCH_EVENTS_SUCCESS: {
      const { query, offset, count, data, meta } = action
      const totalCount = meta.total

      let result = pathOr(Array(totalCount), [query, "result"], state)

      result = [...result.slice(0, offset), ...data.result, ...result.slice(offset + count)]

      return {
        ...state,
        [query]: { result, totalCount }
      }
    }
    default:
      return state
  }
}
const isSearchFetching = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_EVENTS_START: {
      const { query, offset, count } = action
      const search = new URLSearchParams()
      search.set("query", query)
      search.set("offset", offset)
      search.set("count", count)
      return { ...state, [search.toString()]: true }
    }
    case SEARCH_EVENTS_SUCCESS:
    case SEARCH_EVENTS_FAILURE: {
      const { query, offset, count } = action
      const search = new URLSearchParams()
      search.set("query", query)
      search.set("offset", offset)
      search.set("count", count)
      return { ...state, [search.toString()]: false }
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
  searchResults,
  isSearchFetching
})

export const getSearchEventsResult = (offset, count, query, state) => {
  const search = path(["searchResults", query, "result"], state)
  if (!search) {
    return null
  } else {
    const result = search.slice(offset, offset + count)
    return contains(undefined, result) ? null : result
  }
}
export const getEventsSearchTotalCount = (query, state) => path(["searchResults", query, "totalCount"], state)
export const getIfEventsSearchFetching = (offset, count, query, state) => {
  const search = new URLSearchParams()
  search.set("query", query)
  search.set("offset", offset)
  search.set("count", count)
  return state.isSearchFetching[search.toString()]
}
export const getEventById = (state, id) => state.byId[id]
export const getIsEventFetching = (id, state) => state.isFetching[id]
