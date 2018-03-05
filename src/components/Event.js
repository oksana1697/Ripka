import React from 'react';

const Event = ({name, description, date}) => (
    //  photo={this.state.photo}
    // location={this.state.location}
    // time={this.state.time}
    // name={this.state.name}
    // orgName={this.state.orgName}
    (<div>
        <p><a href='/' path="/:name?"> Name: {name}</a></p>
        <p>Description:{description}</p>
        <p>Date:{date}</p>
        <br/>
        <br/>
    </div>));
export default Event






