import * as api from "../api/index"
import {
  fetchEventFailure,
  fetchEventStart,
  fetchEventSuccess,
  fetchUserFailure,
  fetchUserStart,
  fetchUserSuccess
} from "./index"
import { arrayOfEvents, arrayOfUsers } from "./schema"
import { normalize } from "normalizr"

export const fetchEvent = id => async dispatch => {
  dispatch(fetchEventStart(id))
  try {
    let events = await api.fetchEvent(id)
    if (!events.error) {
      events = normalize([events], arrayOfEvents)
      dispatch(fetchEventSuccess(events.result, events.entities.events))
    } else {
      dispatch(fetchEventFailure(events.error))
    }
  } catch (error) {
    fetchEventFailure(error)
  }
}

export const fetchUser = id => async dispatch => {
  dispatch(fetchUserStart(id))
  try {
    let users = await api.fetchUser(id)
    if (!users.error) {
      users = normalize([users], arrayOfUsers)
      dispatch(fetchUserSuccess(users.result, users.entities.users))
    } else {
      dispatch(fetchUserFailure(users.error))
    }
  } catch (error) {
    fetchUserFailure(error)
  }
}
