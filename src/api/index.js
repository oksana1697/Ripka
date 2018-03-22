import { v4 } from 'node-uuid';
import {DateTime} from 'luxon'
import {getData, postData} from "./api";

const date = DateTime.fromObject({
    year: Number(1999),
    month: Number(2),
    day: Number(20),
    hour: Number(20),
    minute: Number(20)
})

export const fetchEvents = () =>
    getData('http://localhost:3000/events').then(function (data){
        console.log(data);
        return data;
    });
export const pushEvent = (newEvent) =>
        postData('http://localhost:3000/events', newEvent).then(function(newEvent){
            return newEvent
        });

