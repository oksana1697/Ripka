import React, {Component} from 'react';

export const AddEvent = ({onAddClick}) => {
    let name, description;
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
            <h3>Submit:</h3>
            <button onClick={() => {
                onAddClick(name.value, description.value);
                name.value = '';
                description.value = '';
            }}>
                Add Event
            </button>
        </div>
    );
};


