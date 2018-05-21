import { v4 } from 'uuid';
import { deleteData, getData, postData, putData } from './api';

const API_ENDPOINT = 'http://localhost:3000';
export const CLOUDINARY_URL = "https://res.cloudinary.com/ucu/image/upload/";
export const API_KEY = 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo';


export const fetchPaginateUsers = page => getData(`${API_ENDPOINT}/users?_page=${page}&_limit=5`);

export const fetchPaginateEvents = page => getData(`${API_ENDPOINT}/events?_page=${page}&_limit=5`);

export const findEvents = filter => getData(`${API_ENDPOINT}/events?q=${filter}`);

export const findUsers = filter => getData(`${API_ENDPOINT}/users?q=${filter}`);

export const fetchSliceEvents = num => getData(`${API_ENDPOINT}/events?_start=` + num + '&_limit=4');

export const fetchEvents = () => getData(`${API_ENDPOINT}/events`);

export const fetchEvent = id => getData(`${API_ENDPOINT}/events/${id}`);

export const addEvent = newEvent => postData(`${API_ENDPOINT}/events`, newEvent);

export const fetchUsers = () => getData(`${API_ENDPOINT}/users`);

export const fetchUser = id => getData(`${API_ENDPOINT}/users/${id}`);

export const addUser = newUser => postData(`${API_ENDPOINT}/users`, newUser);

export const deleteEvent = async id => await deleteData(`${API_ENDPOINT}/events`, id);

export const deleteUser = async id => await deleteData(`${API_ENDPOINT}/users`, id);

export const editEvent = updatedEvent => putData(`${API_ENDPOINT}/events`, updatedEvent);

export const editUser = updatedUser =>
    putData(`${API_ENDPOINT}/users`, updatedUser);
