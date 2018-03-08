import React from 'react';
import { NavLink } from 'react-router-dom';

const Event = ({name, description, date}) => (

    // console.log('----', this.props.match)

    (<div>
        <NavLink
            to={'/' + name}
            activeStyle={{
                textDecoration: 'none',
                color: 'black',
            }}
        >
            Name: {name}
        </NavLink>
        <p>About</p>
        <p>{description}</p>
        <p>Date & time</p>
        <p>{date.toFormat("yyyy LLL dd")}</p>
        <p>{date.toFormat("HH:mm")}</p>
        <br/>
        <br/>
    </div>));

export default Event






