import "../../../styles/add.less";
import React, {Component} from "react";
import DateTimePicker from "react-datetime-picker";
import {connect} from "react-redux";
import {getIsEventProcessing} from "../../reducers";
import {editEvent} from "../../actions/edit";
import {getEventById} from "../../reducers/events";

class EventEdit extends Component {
    static defaultProps = {
        onSuccess() {
        }
    };

    static getDerivedStateFromProps({isEventProcessing, onSuccess},
                                    {formSubmitted}) {
        if (formSubmitted && !isEventProcessing) {
            onSuccess();
        }
        return {};
    }

    state = {
        name: this.props.name,
        description: '',
        organization: "",
        contacts: "",
        time: new Date(),
        location: "",
        photo: "",
        formSubmitted: false
    };
    handleSubmit = ev => {
        ev.preventDefault();
        const {addEvent} = this.props;
        const {formSubmitted, ...event} = this.state;

        // addEvent(event);
        this.setState({formSubmitted: true});
    };

    changeHandler = property => ev => {
        const {value} = ev.target;
        this.setState({[property]: value});
    };

    render() {
        const initState =  {
            name: "",
            description: '',
            organization: "",
            contacts: "",
            time: new Date(),
            location: "",
            photo: "",
            formSubmitted: false
        };
        const {
            name,
            description,
            organization,
            contacts,
            time,
            location,
            formSubmitted
        } = this.props.event? this.props.event: initState;
        // const {event} = this.props;
        return (
            <form className="add" onSubmit={this.handleSubmit}>
                {formSubmitted && <div className="add__carpet"/>}
                <div className="add__title_container">
                    <h1 className="add__title">Add event details</h1>
                </div>
                <div className="add__subtitle_container">
                    <img src="http://res.cloudinary.com/ucu/image/upload/w_50,h_40/icon_event_debdmm.png"/>
                    <h1 className="add__subtitle">Event Overview</h1>
                </div>

                <label className="add__input_container">
                    <span className="add__field">Event name</span>
                    <input
                        className="add__input"
                        placeholder="Event Name"
                        value={name}
                        onChange={this.changeHandler("name")}
                    />
                </label>
                <div className="add__input_container">
                    <p className="add__field">ORGANIZATION NAME</p>
                    <input
                        className="add__input"
                        placeholder="Organization Name"
                        value={organization}
                        onChange={this.changeHandler("organization")}
                    />
                </div>
                <div className="add__input_container">
                    <p className="add__field">LOCATION</p>
                    <input
                        className="add__input"
                        placeholder="Location"
                        value={location}
                        onChange={this.changeHandler("location")}
                    />
                </div>
                <div className="add__input_container">
                    <p className="add__field">CONTACTS</p>
                    <input
                        className="add__input"
                        placeholder="Contacts"
                        value={contacts}
                        onChange={this.changeHandler("contacts")}
                    />
                </div>

                <div className="add__input_container">
          <span className="add__field">
            EVENT DESCRIPTION & REQUIREMENTS
          </span>
                    <textarea
                        className="add__textarea"
                        placeholder="Description"
                        value={description}
                        onChange={this.changeHandler("description")}
                        required
                    />
                </div>

                <div className="add__input_container">
                    <span className="add__field">Time</span>
                    <DateTimePicker
                        value={time}
                        onChange={time => this.setState({time})}
                    />
                </div>

                {/*<div className="add-event__input_container">*/}
                {/*<p className="add-event__field">DOWNLOAD PHOTO</p>*/}
                {/*<PhotoUpload photo={URL => this.setState({ photo: URL })} />*/}
                {/*</div>*/}

                <div className="add__submit-container">
                    <button className="add__submit">Save changes</button>
                </div>
            </form>
        );
    }
}


export default connect(
    (state, {id}) => ({
        isEventProcessing: getIsEventProcessing(state),
        event: getEventById(state, id)
    }),
    {editEvent}
)(EventEdit);
