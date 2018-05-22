import React, {Component} from 'react';
import {addEvent, addUser} from '../../actions/add';
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
import {
    alphaNumeric, maxLength15, maxLength20, minLength2, phoneNumber,
    required
} from "../../helpers/FieldLevelValidationForm";
import {Field, reduxForm} from "redux-form";
import {getIsUserProcessing} from "../../reducers";



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
        if (!this.canBeSubmitted()) {
            ev.preventDefault();
            return;
        }
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

    // canBeSubmitted() {
    //     const errors = validate(this.state.name, this.state.contacts);
    //     const isDisabled = Object.keys(errors).some(x => errors[x]);
    //     return !isDisabled;
    // }

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

        // const errors = validate(this.state.name, this.state.contacts);
        // const isDisabled = Object.keys(errors).some(x => errors[x]);
        const renderInput = ({
                                 input,
                                 label,
                                 type,
                                 meta: { touched, error, warning },
                             }) => (
            <div className="add__input_container">
                <label className="add__field">{label}</label>
                <input
                    required
                    {...input}
                    placeholder={label}
                    type={type}
                    className="add__input"
                />
                {touched &&
                ((error && <span className="add__input_warning">{error}</span>) ||
                    (warning && <span className="add__input_warning">{warning}</span>))}
            </div>
        );

        const renderTextArea = ({
                                    input,
                                    label,
                                    type,
                                    meta: { touched, error, warning },
                                }) => (
            <div className="add__input_container">
                <label className="add__field">{label}</label>
                <textarea {...input} placeholder={label} className="add__input" />
                {touched &&
                ((error && <span className="add__input_warning">{error}</span>) ||
                    (warning && <span className="add__input_warning">{warning}</span>))}
            </div>
        );


        return (
            <div>
                <NavigationAddEvent/>
                <form className="add" onSubmit={this.handleSubmit}>
                    {formSubmitted && <div className="add-event__carpet"/>}

                    <div className="add__title_container">
                        <div className="add__subtitle_overview">
                            <h5 className="add__subtitle_overview-grey">
                                2.Event Details
                            </h5>
                        </div>
                        <h1 className="add__title">Add event details</h1>
                    </div>
                    <div className="add__event_block">
                    <div className="add__subtitle_container">
                        <img className="add__icon_push-pin"/>
                        <h1 className="add__subtitle">Event Overview</h1>
                    </div>
                        <Field
                               name="name"
                               type="text"
                               label="Event Name"
                               component={renderInput}
                               warn={alphaNumeric}
                               validate={[required, maxLength20, minLength2]}
                               // onChange={this.changeHandler('name')}
                        />
                        <Field
                               name="organization"
                               type="text"
                               label="Organization Name"
                               component={renderInput}
                               warn={alphaNumeric}
                               validate={[required, maxLength15, minLength2]}
                               // onChange={this.changeHandler('organization')}
                        />

                    <label className="add__input_container">
                        <span className="add__field">EVENT CATEGORIES</span>
                        <select className="add__categories" value={category} onChange={this.changeHandler('category')}>
                            <option className="add__categories" value='nonprofit'>Nonprofit</option>
                            <option className="add__categories" value='foot&drink'>Food&Drink</option>
                            <option className="add__categories" value='children'>Children</option>
                            <option className="add__categories" value='medicine'>Medicine</option>
                        </select>
                    </label>

                        <Field
                            name="location"
                            type="text"
                            label="Location"
                            component={renderInput}
                            validate={[required, maxLength15, minLength2]}
                            onChange={this.changeHandler('location')}
                        />
                        <Field
                            name="contacts"
                            type="text"
                            label="Contacts"
                            component={renderInput}
                            validate={[required, phoneNumber, maxLength20]}
                            // onChange={this.changeHandler('contacts')}
                        />
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
                        <Field
                            name="description"
                            type="text"
                            label="Event Description"
                            component={renderTextArea}
                            warn={alphaNumeric}
                            // onChange={this.changeHandler('description')}
                            validate={[required,  minLength2]}
                        />
                    <div className="add__input_container">
                        <p className="add__field">DOWNLOAD PHOTO</p>
                        <PhotoUpload photo={URL => this.setState({photo: URL})}/>
                    </div>

                    <div className="add__submit-container">
                        <button className="add__submit">Add Event</button>
                    </div>
                    </div>
                </form>
            </div>
        );
    }
}

function formatDate(date) {
    return date.toLocaleDateString();
}
//
// function validate(name, contacts) {
//     return {
//         name: name.length === 0,
//         contacts: contacts.length === 0,
//         // contacts.type === Number
//     };
// }
AddEvent = reduxForm({
    form: 'fieldLevelValidation',
})(AddEvent);
export default connect(
    state => ({
        isEventProcessing: getIsEventProcessing(state),
    }),
    {addEvent},
)(AddEvent);






