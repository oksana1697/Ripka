import {connect} from 'react-redux'
import React, {Component} from 'react'
import EventContainer from "./EventContainer";
import {withRouter} from "react-router-dom";
import {fetchEvents} from "../actions/index";

class VisibleEventList extends Component {

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        const {fetchEvents} = this.props;
        fetchEvents();
    }

    render() {
        const {...rest} = this.props;
        console.log("Render:", {...rest})
        return (
            <EventContainer
                {...rest}
            />
        )
    }
}

const getVisibleEvents = (events) => {
    return events
};

VisibleEventList = withRouter(connect(
    getVisibleEvents,
    {
        fetchEvents
    }
)(VisibleEventList));

export default VisibleEventList;
