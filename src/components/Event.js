import React from 'react';
import {DateTime} from "luxon/src/datetime";

const Event = ({name, description, date}) => (
    //  photo={this.state.photo}
    // location={this.state.location}
    // time={this.state.time}
    // name={this.state.name}
    // orgName={this.state.orgName}

    // {date.toFormat("yyyy LLL dd")

    (<div>
        <p><a href='/' path="/:name?"> Name: {name}</a></p>
        <p>About</p>
        <p>{description}</p>
        <p>Date & time</p>
        <p>{date.toFormat("yyyy LLL dd")}</p>
        <p>{date.toFormat("HH:mm")}</p>
        <br/>
        <br/>
    </div>));

export default Event






