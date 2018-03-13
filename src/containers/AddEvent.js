import React from 'react'
import {addEvent} from '../actions/index'
import {connect} from 'react-redux'
import {DateTime} from "luxon/src/datetime";

let AddEvent = ({dispatch}) => {
    let name, description, organization, contacts, year, month, day, hour, minute, location;
    return (
        <div>
            <h1 className="AddEvent__title">Add event details</h1>
            <h1 className="AddEvent__subtitle">Event Overview</h1>
            <div className="AddEvent__container">
                <p className="AddEvent__field">EVENT NAME</p>
                <input className="AddEvent__input" ref={node => {
                    name = node;
                }}/>
            </div>
            <div className="AddEvent__container">
                <p className="AddEvent__field">ORGANIZATION NAME</p>
                <input className="AddEvent__input" ref={node => {
                    organization = node;
                }}/>
            </div>
            <div className="AddEvent__container">
                <p className="AddEvent__field">LOCATION</p>
                <input className="AddEvent__input" ref={node => {
                    contacts = node;
                }}/>
            </div>
            <div className="AddEvent__container">
                <p className="AddEvent__field">CONTACTS</p>
                <input className="AddEvent__input" ref={node => {
                    contacts = node;
                }}/>
            </div>
            <div className="AddEvent__container">
                <p className="AddEvent__field">EVENT DESCRIPTION & REQUIREMENTS</p>
                <input className="AddEvent__input" ref={node => {
                    description = node;
                }} required/>
            </div>
            <p>Enter Day</p>
            <input ref={node => {
                day = node;
            }}/>
            <p>Enter Month</p>
            <input ref={node => {
                month = node;
            }}/>
            <p>Enter Year</p>
            <input ref={node => {
                year = node;
            }}/>
            <p>Enter Hour</p>
            <input ref={node => {
                hour = node;
            }}/>
            <p>Enter Minute</p>
            <input ref={node => {
                minute = node;
            }}/>

            <p>Submit:</p>
            <button onClick={() => {
                // checkField();
                const toDate = DateTime.fromObject({
                    year: Number(year.value),
                    month: Number(month.value),
                    day: Number(day.value),
                    hour: Number(hour.value),
                    minute: Number(minute.value)
                });
                console.log("generated Object DateTime:", toDate);

                if (checkField([location.value, description.value, contacts.value, name.value, description.value, year.value, month.value, day.value, hour.value, minute.value])
                ) {
                    dispatch(addEvent(name.value, description.value, toDate, organization.value, contacts.value, location.value
                    ));

                }
                description.value = contacts.value = name.value = description.value = location.value = minute.value = year.value = month.value = hour.value = day.value = ''
            }}>
                Add Event
            </button>
        </div>
    );
};
const checkField = (array1) => {
    console.log("aaa", array1);
    for (let i in array1) {
        console.log('i:', array1[i]);
        if (array1[i] === "") {
            alert("Value should be between 0 - 100");
            return true
        }
        return true
    }
}


AddEvent = connect()(AddEvent);
export default AddEvent