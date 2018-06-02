import * as api from "../api/index"
import {
  editEventFailure,
  editEventStart,
  editEventSuccess,
  editUserFailure,
  editUserStart,
  editUserSuccess
} from "./index"

export const editEvent = (id, data) => async dispatch => {
  dispatch(editEventStart(id, data))
  try {
    const event = await api.editEvent(id, data)
    const action = editEventSuccess(id, event)
    dispatch(action)
    return action
  } catch (e) {
    dispatch(editEventFailure(id, e))

    return e
  }
}

export const editUser = id => async dispatch => {
  dispatch(editUserStart(id))
  try {
    await api.editUser(id)
    dispatch(editUserSuccess(id))
  } catch (e) {
    dispatch(editUserFailure(id))
  }
}
