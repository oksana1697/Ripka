import React, {Component} from 'react';
import Navigation from "../common/Navigation"
import Footer from "../common/Footer"
import {AddEvent} from "./AddEvent"
import {EventContainer} from "./EventContainer"

//toDo: fix structure
//toDo: bug with representing Events


let nextEventId = 0;
class MainPageLayoutVolunteer extends Component {
    render() {
        const {events, store} = this.props;

        return (
            <div className="MainPageLayoutVolunteer">
                <Navigation/>
                <AddEvent
                    onAddClick={text =>
                        store.dispatch({
                            type: 'ADD_TODO',
                            id: nextEventId++,
                            text
                        })
                    }
                />
                <EventContainer events={events}/>
                <Footer/>
            </div>);
    }
}


export default MainPageLayoutVolunteer





