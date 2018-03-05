// import React, {Component} from 'react';
//
// export const AddEvent = ({onAddClick}) => {
//     let name, description;
//     return (
//         <div>
//             <h3>Enter Name:</h3>
//             <input ref={node => {
//                 name = node;
//             }}/>
//             <h3>Enter description:</h3>
//             <input ref={node => {
//                 description = node;
//             }}/>
//             <h3>Submit:</h3>
//             <button onClick={() => {
//                 onAddClick(name.value, description.value);
//                 name.value = '';
//                 description.value = '';
//             }}>
//                 Add Event
//             </button>
//         </div>
//     );
// };
//
//
import React from 'react'
import {addEvent} from '../actions/index'
import {connect} from 'react-redux'

let AddEvent = ({dispatch}) => {
    let name, description, date;
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
            <h3>Enter Date in format dd/mm/yyyy :</h3>
            <input ref={node => {
                date = node;
            }}/>
            <h3>Submit:</h3>
            <button onClick={() => {
                dispatch(addEvent(name.value,description.value,date.value));
                name.value = '';
                description.value = '';
                date.value = '';
            }}>
                Add Todoo
            </button>
        </div>
    );
};

AddEvent = connect()(AddEvent);
export default AddEvent