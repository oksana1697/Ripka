import React, {Component} from 'react'

class UserDetails extends Component {
    render() {
        // TODO: change match by name to id / fix routing on this page

        const currentUser = this.props.users.find((element) => {
            return element.user_name === this.props.match.params.userName;
        });

        return (
            <div>
                <div className="event-details__title_container">
                    <div className="event-details__block-column">
                        <h1 className="event-details__title">{currentUser.user_name}</h1>
                        <h2 className="event-details__subtitle">{currentUser.user_location}</h2>
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
                        <p className="event-details__content">{currentUser.user_description}</p>
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
                        <p className="event-details__content">{currentUser.user_contacts}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDetails