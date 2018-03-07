import React from 'react'
import {addEvent} from '../actions/index'
import {connect} from 'react-redux'
import {DateTime} from "luxon/src/datetime";
import { Duration } from "luxon/src/duration.js";

let AddEvent = ({dispatch}) => {
    let name, description, year, month, day, hour, minute;
    return (
        <div>
            <h3>Enter Name:</h3>
            <input ref={node => {
                name = node;
            }}/>
            <h3>Enter description:</h3>
            <input ref={node => {
                description = node;
            }}/>
            <h3>Enter Day</h3>
            <input ref={node => {
                day = node;
            }}/>
            <h3>Enter Month</h3>
            <input ref={node => {
                month = node;
            }}/>
            <h3>Enter Year</h3>
            <input ref={node => {
                year = node;
            }}/>
            <h3>Enter Hour</h3>
            <input ref={node => {
                hour = node;
            }}/>
            <h3>Enter Minute</h3>
            <input ref={node => {
                minute = node;
            }}/>

            <h3>Submit:</h3>
            <button onClick={()=> {
                // checkField({name.value, description.value, year.value, month.value, day.value, hour.value, minute.value});

                const toDate = DateTime.fromObject({
                    year: Number(year.value),
                    month: Number(month.value),
                    day: Number(day.value),
                    hour: Number(hour.value),
                    minute: Number(minute.value)
                });
                console.log("generated Object DateTime:",toDate);
                dispatch(addEvent(name.value,description.value, toDate
            ));
                name.value =  description.value = minute.value = year.value = month.value = hour.value = day.value = ''
            }}>
                Add Event
            </button>
        </div>
    );
};
const checkField = (array1) => {
console.log("aaa",array1)
    // for (let x: array1)    {
    //
    //     if (x == ""){
    //     alert("Value should be between 0 - 100");
    //
    // }
    // }
}


AddEvent = connect()(AddEvent);
export default AddEvent