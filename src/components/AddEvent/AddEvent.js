import React, {Component} from 'react';
import {addEvent} from '../../actions/add';
import {connect} from 'react-redux';
//
import DateTimePicker from 'react-datetime-picker';
import PhotoUpload from '../PhotoUpload';
//
import {getIsEventProcessing} from '../../reducers/index';

import '../../../styles/add.less';
import '../../../styles/common.less';
import '../../../styles/react-datetime-picker.less';

import AddEventNavigation from '../Navigation/NavigationAddUser';
import NavigationAddEvent from "../Navigation/NavigationAddEvent";

class AddEvent extends Component {
    static defaultProps = {
        onSuccess() {
        },
    };

    static getDerivedStateFromProps({isEventProcessing, onSuccess},
                                    {formSubmitted},) {
        if (formSubmitted && !isEventProcessing) {
            onSuccess();
        }
        return {};
    }

    state = {
        name: '',
        description: '',
        organization: '',
        category: "",
        contacts: '',
        time: new Date(),
        location: '',
        photo: '',
        formSubmitted: false,
    };

    handleSubmit = ev => {
        ev.preventDefault();
        const {addEvent} = this.props;
        const {formSubmitted, ...event} = this.state;
        addEvent(event);
        this.setState({formSubmitted: true});
        this.props.onSuccess();
    };

    changeHandler = property => ev => {
        const {value} = ev.target;
        this.setState({[property]: value});
    };

    render() {
        const {
            name,
            description,
            organization,
            category,
            contacts,
            time,
            location,
            formSubmitted,
        } = this.state;

        return (
            <div>
                <NavigationAddEvent/>
                <form className="add" onSubmit={this.handleSubmit}>
                    {formSubmitted && <div className="add-event__carpet"/>}
                    <div className="add__title_container">
                        <div className="add__subtitle_overview">
                            <h5 className="add__subtitle_overview-grey">
                                2.Business Profile 3.Promote Job
                            </h5>
                        </div>
                        <h1 className="add__title">Add event details</h1>
                    </div>
                    <div className="add__subtitle_container">
                        <img className="add__icon_push-pin"/>
                        <h1 className="add__subtitle">Event Overview</h1>
                    </div>

                    <label className="add__input_container">
                        <span className="add__field">Event name</span>
                        <input required
                               className="add__input"
                               placeholder="Event Name"
                               value={name}
                               onChange={this.changeHandler('name')}
                        />
                    </label>
                    <label className="add__input_container">
                        <span className="add__field">ORGANIZATION NAME</span>
                        <input required
                               className="add__input"
                               placeholder="Organization Name"
                               value={organization}
                               onChange={this.changeHandler('organization')}
                        />
                    </label>

                    <label className="add__input_container">
                        <span className="add__field">EVENT CATEGORIES</span>
                        <select value={category} onChange={this.changeHandler('category')}>
                            <option className="add__categories" value='nonprofit'>Nonprofit</option>
                            <option className="add__categories" value='foot&drink'>Food&Drink</option>
                            <option className="add__categories" value='children'>Children</option>
                            <option className="add__categories" value='medicine'>Medicine</option>
                        </select>
                    </label>

                    <div className="add__input_container">
                        <p className="add__field">LOCATION</p>
                        <input required
                               className="add__input"
                               placeholder="Location"
                               value={location}
                               onChange={this.changeHandler('location')}
                        />
                    </div>
                    <div className="add__input_container">
                        <p className="add__field">CONTACTS</p>
                        <input required
                               className="add__input"
                               placeholder="Contacts"
                               value={contacts}
                               onChange={this.changeHandler('contacts')}
                        />
                    </div>

                    <div className="add__input_container">
                        <span className="add__field">Time</span>
                        <DateTimePicker
                            value={time}
                            onChange={time => this.setState({time})}
                        />
                    </div>

                    <div className="add__subtitle_container">
                        <img className="add__icon_legal-paper"/>
                        <h1 className="add__subtitle">Event Details</h1>
                    </div>
                    <div className="add__input_container">
                        <span className="add__field">EVENT DESCRIPTION</span>
                        <textarea
                            className="add__textarea"
                            placeholder="Description"
                            value={description}
                            onChange={this.changeHandler('description')}
                            required
                        />
                    </div>

                    <div className="add__input_container">
                        <p className="add__field">DOWNLOAD PHOTO</p>
                        <PhotoUpload photo={URL => this.setState({photo: URL})}/>
                    </div>

                    <div className="add__submit-container">
                        <button className="add__submit">Add Event</button>
                    </div>
                </form>
            </div>
        );
    }
}

function formatDate(date) {
    return date.toLocaleDateString();
}

export default connect(
    state => ({
        isEventProcessing: getIsEventProcessing(state),
    }),
    {addEvent},
)(AddEvent);
