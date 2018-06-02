import * as api from "../api/index"
import { normalize } from "normalizr"

import { addEventFailure, addEventStart, addEventSuccess, addUserFailure, addUserStart, addUserSuccess } from "./index"
import { event as eventSchema, arrayOfUsers } from "./schema"

export const addEvent = events => async dispatch => {
  const tempEvent = { ...events }
  dispatch(addEventStart(events))
  try {
    let event = await api.addEvent(tempEvent)

    if (!event.errors) {
      event = normalize([event], [eventSchema])
      const eventId = event.result[0]
      event = event.entities.events[eventId]

      const action = addEventSuccess(eventId, event)
      dispatch(action)

      return action
    } else {
      return dispatch(addEventFailure(event.error))
    }
  } catch (error) {
    return dispatch(addEventFailure(error))
  }
}

export const addUser = users => async dispatch => {
  const tempUser = { ...users }
  dispatch(addUserStart(users))
  try {
    let users = await api.addUser(tempUser)
    if (!users.errors) {
      users = normalize([users], arrayOfUsers)
      dispatch(addUserSuccess(users.result, users.entities.users))
    } else {
      dispatch(addUserFailure(users.error))
    }
  } catch (error) {
    dispatch(addUserFailure(error))
  }
}
