import {
  fetchUsersFailure,
  searchEventsFailure,
  searchEventsStart,
  searchEventsSuccess,
  searchUsersFailure,
  searchUsersStart,
  searchUsersSuccess
} from "./index"
import { arrayOfUsers, event as eventSchema } from "./schema"
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

export const searchUsers = filter => async dispatch => {
  dispatch(searchUsersStart(filter))
  try {
    let users = await api.findUsers(filter)
    if (!users.error) {
      users = normalize(users, arrayOfUsers)
      dispatch(searchUsersSuccess(users.entities.users))
    } else {
      dispatch(searchUsersFailure(users.error))
    }
  } catch (error) {
    fetchUsersFailure(error)
  }
}
