import { v4 } from "uuid";
import { deleteData, getData, postData } from "./api";

export const fetchSliceEvents = num =>
  getData("http://localhost:3000/events?_start=" + num + "&_limit=4");

export const fetchEvents = () => getData("http://localhost:3000/events");

export const addEvent = newEvent =>
  postData("http://localhost:3000/events", newEvent);

export const fetchUsers = () => getData("http://localhost:3000/users");
export const pushUser = newUser =>
  postData("http://localhost:3000/users", newUser);

export const deleteEvent = async id =>
  await deleteData("http://localhost:3000/events", id);
