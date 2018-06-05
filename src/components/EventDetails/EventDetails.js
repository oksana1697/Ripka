import React, {Component} from "react"
import {NavLink, withRouter} from "react-router-dom"
// Todo: update css - remove additional
import moment from "moment"

import {CLOUDINARY_URL} from "../../api/index"

import MapContainer from "../MapContainer/MapContainer"
import PageNotFound from "../PageNotFound/PageNotFound"

import "../../styles/map.scss"
import "./EventDetails.scss"

import block from "../../helpers/BEM"
import {compose} from "ramda"
import withEvent from "../HOC/withEvent"
import {withProps} from "recompose"

const b = block("EventDetails")
const formatDate = date => new Date(moment(date).format()).toDateString()

class EventDetails extends Component {
    render() {
        let props = this.props
        const {event} = this.props
        if (!event) {
            return <PageNotFound/>
        }
        return (
            <div className={b()}>
                <div className={b("settings")}>
                    <div className={b("settings-button")}>
                        <NavLink to={"/events/edit/" + event.id}>
                            <span className={b("icon", ["edit"])}/>
                            <button className={b("settings-text")}>Edit event</button>
                        </NavLink>
                    </div>
                    <div className={b("settings-button")}>
                        <span className={b("icon", ["delete"])}/>
                        <button
                            className={b("settings-text")}
                            onClick={() => {
                                props.deleteEvent(event.id)
                                this.props.onSuccess()
                            }}
                        >
                            Delete event
                        </button>
                    </div>
                </div>
                <div className={b("header")}>
                    <div className={b("header", ["container"])}>
                        <h1 className={b("name")}>{event.name}</h1>
                        <h2 className={b("organization")}>{event.organization}</h2>
                        <div>
                            <p className={b("location")}>{event.location}</p>
                        </div>
                        <div className={b("options")}>
                            <button className={b("options", ["button"])}>Bookmark</button>
                            <button className={b("options", ["button"])}>Report</button>
                        </div>
                    </div>
                </div>
                <div className={b("details")}>
                    <div className={b("details", ["left-block"])}>
                        <div>
                            <h3 className={b("details-title")}>Event Overview</h3>
                            <p className={b("story-title")}>Date & Time</p>
                            <p className={b("story")}>{formatDate(event.time)}</p>
                        </div>
                        <div>
                            <p className={b("story-title")}>Categories</p>
                            <p className={b("story")}>{event.category}</p>
                        </div>
                        <div>
                            <p className={b("story-title")}>Organization</p>
                            <p className={b("story")}>{event.organization}</p>
                        </div>
                        <div>
                            <h3 className={b("details-title")}>Event description</h3>
                            <p className={b("story")}>{event.description}</p>
                        </div>
                    </div>
                    <div className={b("details", ["right-block"])}>
                        <img className={b("photo")} src={CLOUDINARY_URL + "c_fill,q_90/" + event.photo + ".jpg"}
                             alt={"name"}/>
                        <div>
                            <h3 className={b("details-title")}>Contacts of organization</h3>

                            <p className={b("story-title")}>Phone number</p>
                            <p className={b("story")}>{event.contacts}</p>
                        </div>
                        <div>
                            <h3 className={b("details-title")}>Location</h3>

                            <p className={b("story-title")}>City, country</p>
                            <p className={b("story")}>{event.location}</p>
                        </div>
                        <div className="map__container-for-event">
                            <MapContainer events={[event]}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const enhance = compose(withRouter, withProps(({match}) => ({id: Number(match.params.id)})), withEvent)

export default enhance(EventDetails)
