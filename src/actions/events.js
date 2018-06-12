import * as api from "../api/index"
import { normalize } from "normalizr"
import { arrayOfEvents, event as eventSchema} from "./schema"

import {
  addEventFailure,
  addEventStart,
  addEventSuccess,
  fetchEventFailure,
  fetchEventStart,
  fetchEventSuccess,
  deleteEventFailure,
  deleteEventStart,
  deleteEventSuccess,
  editEventFailure,
  editEventStart,
  editEventSuccess,
  searchEventsFailure,
  searchEventsStart,
  searchEventsSuccess
} from "./index"

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

export const deleteEvent = id => async dispatch => {
  dispatch(deleteEventStart(id));
  try {
    await api.deleteEvent(id);
    dispatch(deleteEventSuccess(id));
  } catch (e) {
    dispatch(deleteEventFailure(id));
  }
};

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

export const searchEvents = (query, offset, count) => async dispatch => {
  dispatch(searchEventsStart(query, offset, count))

  try {
    const payload = await api.findEvents(query, offset, count)
    const events = normalize(payload.result, [eventSchema])
    const { meta } = payload
    const action = searchEventsSuccess(query, offset, count, events , meta)
    dispatch(action)
    return action
  } catch (e) {
    const action = searchEventsFailure(query, offset, count, e)
    dispatch(action)
    return action
  }
}
