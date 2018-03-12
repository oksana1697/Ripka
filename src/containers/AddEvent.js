import React from 'react'
import {addEvent} from '../actions/index'
import {connect} from 'react-redux'
import {DateTime} from "luxon/src/datetime";

let AddEvent = ({dispatch}) => {
    let name, description,organization, contacts, year, month, day, hour, minute;
    return (
        <div>
            <p>Enter Name:</p>
            <input ref={node => {
                name = node;
            }}/>
            <p >Enter description:</p>
            <input ref={node => {
                description = node;
            }} required/>
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
            <p>Enter Organization Name</p>
            <input ref={node => {
                organization = node;
            }}/>
            <p>Enter Contacts</p>
            <input ref={node => {
                contacts = node;
            }}/>
            <p>Submit:</p>
            <button onClick={()=> {
            // checkField();
                const toDate = DateTime.fromObject({
                    year: Number(year.value),
                    month: Number(month.value),
                    day: Number(day.value),
                    hour: Number(hour.value),
                    minute: Number(minute.value)
                });
                console.log("generated Object DateTime:",toDate);

                if(checkField([description.value,contacts.value,name.value, description.value, year.value, month.value, day.value, hour.value, minute.value])
            ){
                    dispatch(addEvent(name.value,description.value, toDate, organization.value, contacts.value
                    ));

                }
                description.value  = contacts.value = name.value =  description.value = minute.value = year.value = month.value = hour.value = day.value = ''
            }}>
                Add Event
            </button>
        </div>
    );
};
const checkField = (array1) => {
console.log("aaa",array1);
for (let i in array1){
    console.log('i:',array1[i]);
        if (array1[i] === ""){
        alert("Value should be between 0 - 100");
        return true
    }
return true}}



AddEvent = connect()(AddEvent);
export default AddEvent