import React, {Component} from 'react';
import Navigation from "./Navigation"
import Footer from "./Footer"
import {AddEvent} from "./AddEvent"
import {EventContainer} from "./EventContainer"

let nextEventId = 0;

class MainPageLayout extends Component {
    render() {
        const {events, store} = this.props;

        return (
            <div className="MainPageLayout">
                <Navigation/>
                <AddEvent
                    onAddClick={text =>
                        store.dispatch({
                            type: 'ADD_EVENT',
                            id: nextEventId++,
                            text
                        })
                    }
                />
                <EventContainer
                    events={events}/>
                <Footer/>
            </div>);
    }
}

export default MainPageLayout





