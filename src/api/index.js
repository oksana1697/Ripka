import { v4 } from 'uuid';
import { deleteData, getData, postData } from './api';

const API_ENDPOINT = 'http://localhost:3000';

export const fetchSliceEvents = num =>
  getData(`${API_ENDPOINT}/events?_start=` + num + '&_limit=4');

export const fetchEvents = () => getData(`${API_ENDPOINT}/events`);

export const fetchEvent = id => getData(`${API_ENDPOINT}/events/${id}`);

export const addEvent = newEvent =>
  postData(`${API_ENDPOINT}/events`, newEvent);

export const fetchUsers = () => getData(`${API_ENDPOINT}/users`);

export const fetchUser = id => getData(`${API_ENDPOINT}/users/${id}`);

export const addUser = newUser => postData(`${API_ENDPOINT}/users`, newUser);

export const deleteEvent = async id =>
  await deleteData(`${API_ENDPOINT}/events`, id);

export const deleteUser = async id =>
  await deleteData(`${API_ENDPOINT}/users`, id);

export const editEvent = updatedEvent =>
  postData(`${API_ENDPOINT}/events`, updatedEvent);

export const editUser = updatedEvent =>
  postData(`${API_ENDPOINT}/users`, updatedEvent);
