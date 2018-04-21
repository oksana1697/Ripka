import { v4 } from 'node-uuid';
import { DateTime } from 'luxon';
import { deleteData, getData, postData } from './api';

export const fetchSliceEvents = num =>
  getData('http://localhost:3000/events?_start=' + num + '&_limit=4').then(
    function(data) {
      console.log('api/index (1):', data);
      return data;
    },
  );

export const fetchEvents = () =>
  getData('http://localhost:3000/events').then(function(data) {
    console.log('api/index/fetchData', data);
    return data;
  });
export const pushEvent = newEvent =>
  postData('http://localhost:3000/events', newEvent).then(function(newEvent) {
    return newEvent;
  });
export const fetchUsers = () =>
  getData('http://localhost:3000/users').then(function(data) {
    return data;
  });
export const pushUser = newUser =>
  postData('http://localhost:3000/users', newUser).then(function(newUser) {
    return newUser;
  });
export const deleteEvent = async id =>
  await deleteData('http://localhost:3000/events', id);
