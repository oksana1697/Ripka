import * as api from "../api/index"
import { normalize } from "normalizr"
import { arrayOfUsers, user as userSchema  } from "./schema"
import {
  addUserFailure,
  addUserStart,
  addUserSuccess,
  fetchUserFailure,
  fetchUserStart,
  fetchUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  editUserFailure,
  editUserStart,
  editUserSuccess,
  searchUsersFailure,
  searchUsersStart,
  searchUsersSuccess,
} from "./index"


export const addUser = users => async dispatch => {
  const tempUser = { ...users }
  dispatch(addUserStart(users))
  try {
    let user = await api.addUser(tempUser)

    if (!user.errors) {
      user = normalize([user], [userSchema])
      const userId = user.result[0]
      user = user.entities.users[userId]

      const action = addUserSuccess(userId, user)
      dispatch(action)

      return action
    } else {
      return dispatch(addUserFailure(user.error))
    }
  } catch (error) {
    return dispatch(addUserFailure(error))
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

export const deleteUser = id => async dispatch => {
  dispatch(deleteUserStart(id));
  try {
    await api.deleteUser(id);
    dispatch(deleteUserSuccess(id));
  } catch (e) {
    dispatch(deleteUserFailure(id));
  }
};

export const editUser = (id, data) => async dispatch => {
  dispatch(editUserStart(id, data))
  try {
    const user = await api.editUser(id, data)
    const action = editUserSuccess(id, user)
    dispatch(action)
    return action
  } catch (e) {
    dispatch(editUserFailure(id, e))
    return e
  }
}

export const searchUsers = (query, offset, count) => async dispatch => {
  dispatch(searchUsersStart(query, offset, count))

  try {
    const payload = await api.findUsers(query, offset, count)
    const users = normalize(payload.result, [userSchema])
    const { meta } = payload
    const action = searchUsersSuccess(query, offset, count, users, meta)
    dispatch(action)
    return action
  } catch (e) {
    const action = searchUsersFailure(query, offset, count, e)
    dispatch(action)
    return action
  }
}
