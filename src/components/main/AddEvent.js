import React, {Component} from 'react';

export const AddEvent = ({onAddClick}) => {
    let input;
    return (
        <div>
            <input ref={node => {
                input = node;
            }} />
            <button onClick={() => {
                onAddClick(input.value);
                input.value = '';
            }}>
                Add Event
            </button>
        </div>
    );
};


