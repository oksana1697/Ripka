import {
  searchEventsFailure,
  searchEventsStart,
  searchEventsSuccess,
  searchUsersFailure,
  searchUsersStart,
  searchUsersSuccess
} from "./index"
import { user as userSchema, event as eventSchema } from "./schema"
import { normalize } from "normalizr"
import * as api from "../api/index"

export const searchEvents = (query, offset, count) => async dispatch => {
  dispatch(searchEventsStart(query, offset, count))

  try {
    const payload = await api.findEvents(query, offset, count)
    const events = normalize(payload, [eventSchema])
    const action = searchEventsSuccess(query, offset, count, events)
    dispatch(action)
    return action
  } catch (e) {
    const action = searchEventsFailure(query, offset, count, e)
    dispatch(action)
    return action
  }
}


export const searchUsers = (query, offset, count) => async dispatch => {
    dispatch(searchUsersStart(query, offset, count))

    try {
        const payload = await api.findUsers(query, offset, count)
        const users = normalize(payload, [userSchema])
        const action = searchUsersSuccess(query, offset, count, users)
        dispatch(action)
        return action
    } catch (e) {
        const action = searchUsersFailure(query, offset, count, e)
        dispatch(action)
        return action
    }
}

