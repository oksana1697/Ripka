import React, {Component} from 'react'
import {addEvent, deleteEvent} from "../actions";

// class EventDetails extends Component {
//     render() {
//          // TODO: change match by name to id / fix routing on this page
//          const currentEvent = this.props.events.find((element) => {
//              return element.name === this.props.match.params.eventName;
//          });
//
//         return (
//             <div>
//                 <div className="event-details__title_container">
//                     <div className="event-details__block-column">
//                         <h1 className="event-details__title">{currentEvent.name}</h1>
//                         <h2 className="event-details__subtitle">{currentEvent.organization}</h2>
//                         <p className="event-details__location">{currentEvent.location}</p>
//                     </div>
//                 </div>
//                 <div className="event-details__title_container">
//                     <div className="event-details__block-row">
//                         <button className="event-details__button">
//                             <img className="event-details__icon-heard"/>
//                             <span className="event-details__button-descr">Bookmark</span>
//                         </button>
//                         <button className="event-details__button"><img className="event-details__icon-flag"/>
//                             <span className="event-details__button-descr">Report</span>
//                         </button>
//                     </div>
//
//                 </div>
//                 <div className="event-details__block-column">
//                     <div className="event-details__subtitle_container">
//                         <img className="event-details__icon-paper"/>
//                         <h1 className="event-details__subtitle">Event Overview</h1>
//                     </div>
//                     <div
//                         className="event-details__container">
//                         <p className="event-details__content">{currentEvent.description}</p>
//                         <div className="event-details__subtitle_container">
//                             <img className="event-details__icon-calendar"/>
//                             <h1 className="event-details__subtitle">Date & time</h1>
//                         </div>
//                         {/*<p className="event-details__content">{currentEvent.date.toFormat("yyyy LLL dd")}</p>*/}
//                         {/*<p className="event-details__content">{currentEvent.date.toFormat("HH:mm")}</p>*/}
//                         <div className="event-details__subtitle_container">
//                             <img className="event-details__icon-contact"/>
//                             <h1 className="event-details__subtitle">Contacts</h1>
//                         </div>
//                         <p className="event-details__content">{currentEvent.contacts}</p>
//                     </div>
//                     <button className="event-details__button-delete" onClick={() =>{
//                         dispatch(deleteEvent(
// >

//                  </div>
//         )//                             currentEvent))}}>Delete event</button>
//                 </div
//     }
// }
//
// export default EventDetails

import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import PhotoUpload from "../components/PhotoUpload";
import DateTime from 'luxon/src/datetime.js'
// const currentEvent = this.props.events.find((element) => {
//     return element.name === this.props.match.params.eventName;}
// );
const getVisibleEvents = (store) => {
    // return {events: [...store.events]}
    return store
};


const currentEvent = [];
let EventDetails = (props) => {
        // TODO: change match by name to id / fix routing on this page

    console.log("DISPATCH:", props.dispatch);
    console.log("STATE:", getVisibleEvents(111));

             const currentEvent = props.events.find((element) => {
                let idToString = element.id.toString();
                return idToString === props.match.params.eventId;
         });

             console.log('121212', currentEvent);

    return (
            <div>
                <div className="event-details__title_container">
                    <div className="event-details__block-column">
                        <h1 className="event-details__title">{currentEvent.name}</h1>
                        <h2 className="event-details__subtitle">{currentEvent.organization}</h2>
                        <p className="event-details__location">{currentEvent.location}</p>
                    </div>
                </div>
                <div className="event-details__title_container">
                    <div className="event-details__block-row">
                        <button className="event-details__button">
                            <img className="event-details__icon-heard"/>
                            <span className="event-details__button-descr">Bookmark</span>
                        </button>
                        <button className="event-details__button"><img className="event-details__icon-flag"/>
                            <span className="event-details__button-descr">Report</span>
                        </button>
                    </div>

                </div>
                <div className="event-details__block-column">
                    <div className="event-details__subtitle_container">
                        <img className="event-details__icon-paper"/>
                        <h1 className="event-details__subtitle">Event Overview</h1>
                    </div>
                    <div
                        className="event-details__container">
                        <p className="event-details__content">{currentEvent.description}</p>
                        <div className="event-details__subtitle_container">
                            <img className="event-details__icon-calendar"/>
                            <h1 className="event-details__subtitle">Date & time</h1>
                        </div>
                        {/*<p className="event-details__content">{currentEvent.date.toFormat("yyyy LLL dd")}</p>*/}
                        {/*<p className="event-details__content">{currentEvent.date.toFormat("HH:mm")}</p>*/}
                        <div className="event-details__subtitle_container">
                            <img className="event-details__icon-contact"/>
                            <h1 className="event-details__subtitle">Contacts</h1>
                        </div>
                        <p className="event-details__content">{currentEvent.contacts}</p>
                    </div>
                    <button className="event-details__button-delete" onClick={() =>{
                        console.log('121212121212', currentEvent)
                        console.log('121212121212', deleteEvent)
                        props.dispatch(deleteEvent(currentEvent));
                    }
                    }>
                        Delete event</button>
                </div>
            </div>
        )
    }

EventDetails = connect()(EventDetails)
export default EventDetails