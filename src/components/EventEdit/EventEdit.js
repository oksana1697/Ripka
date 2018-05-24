// import React, {Component} from "react";
//
// import {connect} from "react-redux";
// import {getIsEventProcessing, getIsEventFetching} from "../../reducers";
// import {editEvent} from "../../actions/edit";
// import {getEventById} from "../../reducers/events";
// import {fetchEvent} from '../../actions/fetch';
// import Navigation from "../Navigation/Navigation";
// import PhotoUpload from "../PhotoUpload";
//
// import "../../../styles/add.less";
// import {CLOUDINARY_URL} from "../../api/index";
// import Footer from "../Footer/Footer";
//
// class EventEdit extends Component {
//     constructor(props) {
//         super(props);
//         const initState = {
//             name: "",
//             description: '',
//             organization: "",
//             contacts: "",
//             time: new Date(),
//             location: "",
//             photo: "",
//             formSubmitted: false
//         };
//         this.state = this.props.event ? this.props.event : initState;
//     }
//
//     static defaultProps = {
//         onSuccess() {
//         }
//     };
//
//
//     static getDerivedStateFromProps({event, isEventProcessing, onSuccess},
//                                     {formSubmitted}) {
//         console.log(formSubmitted, isEventProcessing, "f")
//         if (formSubmitted && !isEventProcessing) {
//             onSuccess();
//         }
//         return event;
//     }
//
//     handleSubmit = ev => {
//         ev.preventDefault();
//         const {editEvent, id} = this.props;
//         const {formSubmitted, ...event} = this.state;
//         editEvent(event, id);
//         this.setState({formSubmitted: true});
//         console.log("props:", this.state)
//     };
//
//     changeHandler = property => ev => {
//         const {value} = ev.target;
//         this.setState({[property]: value});
//     };
//
//     render() {
//
//         const {
//             name,
//             description,
//             organization,
//             contacts,
//             time,
//             location,
//             photo,
//             formSubmitted
//         } = this.state;
//         // const {event} = this.props;
//         return (
//             <div>
//                 <Navigation/>
//
//                 <form className="add" onSubmit={this.handleSubmit}>
//                     {formSubmitted && <div className="add__carpet"/>}
//                     <div className="add__title_container">
//                         <h1 className="add__title">Edit event details</h1>
//                     </div>
//                     <div className="add__subtitle_container">
//                         <img src="http://res.cloudinary.com/ucu/image/upload/w_50,h_40/icon_event_debdmm.png"/>
//                         <h1 className="add__subtitle">Event Overview</h1>
//                     </div>
//
//                     <label className="add__input_container">
//                         <span className="add__field">Event name</span>
//                         <input
//                             className="add__input"
//                             placeholder="Event Name"
//                             value={name}
//                             onChange={this.changeHandler("name")}
//                         />
//                     </label>
//                     <label className="add__input_container">
//                         <span className="add__field">ORGANIZATION NAME</span>
//                         <input
//                             className="add__input"
//                             placeholder="Organization Name"
//                             value={organization}
//                             onChange={this.changeHandler("organization")}
//                         />
//                     </label>
//                     <label className="add__input_container">
//                         <span className="add__field">LOCATION</span>
//                         <input
//                             className="add__input"
//                             placeholder="Location"
//                             value={location}
//                             onChange={this.changeHandler("location")}
//                         />
//                     </label>
//                     <label className="add__input_container">
//                         <span className="add__field">CONTACTS</span>
//                         <input
//                             className="add__input"
//                             placeholder="Contacts"
//                             value={contacts}
//                             onChange={this.changeHandler("contacts")}
//                         />
//                     </label>
//
//                     <label className="add__input_container">
//                   <span className="add__field">
//                     EVENT DESCRIPTION & REQUIREMENTS
//                   </span>
//                         <textarea
//                             className="add__textarea"
//                             placeholder="Description"
//                             value={description}
//                             onChange={this.changeHandler("description")}
//                             required
//                         />
//                     </label>
//
//                     <label className="add__input_container">
//                         <span className="add__field">DOWNLOAD PHOTO</span>
//                         <img src={CLOUDINARY_URL + 'c_scale,r_5,w_265/' + photo + '.jpg'}/>
//                         <PhotoUpload
//                             // photo={URL => this.setState({photo: URL})}
//                         />
//                     </label>
//                     <div className="add__submit-container">
//                         <button className="add__submit">Save changes</button>
//                     </div>
//                 </form>
//                 <Footer />
//             </div>
//         );
//     }
// }
//
//
// export default connect(
//     (state, {id}) => ({
//         isFetching: getIsEventFetching(id, state),
//         isEventProcessing: getIsEventProcessing(state),
//         event: getEventById(state, id)
//     }),
//     {editEvent, fetchEvent},
//     ({event, isFetching, isEventProcessing}, {fetchEvent, editEvent}, {id, onSuccess}) => {
//         if (!event && !isFetching) {
//             fetchEvent(id);
//         }
//         return {
//             id,
//             event,
//             editEvent,
//             onSuccess,
//             isEventProcessing
//         };
//     },
// )(EventEdit);
import React, {Component} from "react";

import {connect} from "react-redux";
import {getIsEventProcessing, getIsEventFetching} from "../../reducers";
import {editEvent} from "../../actions/edit";
import {getEventById} from "../../reducers/events";
import {fetchEvent} from '../../actions/fetch';
import Navigation from "../Navigation/Navigation";
import PhotoUpload from "../PhotoUpload";

import "../../../styles/add.less";
import {CLOUDINARY_URL} from "../../api/index";
import Footer from "../Footer/Footer";
import {
    alphaNumeric, maxLength15, maxLength20, minLength2, phoneNumber,
    required
} from "../../helpers/FieldLevelValidationForm";
import {Field, reduxForm} from "redux-form";

class EventEdit extends Component {
    constructor(props) {
        super(props);
        const initState = {
            name: "",
            description: '',
            organization: "",
            contacts: "",
            time: new Date(),
            location: "",
            photo: "",
            formSubmitted: false
        };
        this.state = this.props.event ? this.props.event : initState;
    }

    static defaultProps = {
        onSuccess() {
        }
    };

    static getDerivedStateFromProps({event, isEventProcessing, onSuccess},
                                    {formSubmitted}) {
        console.log(formSubmitted, isEventProcessing, "f")
        if (formSubmitted && !isEventProcessing) {
            onSuccess();
        }
        return event;
    }

    handleSubmit = ev => {
        ev.preventDefault();
        const { ...event } = this.props.editEventForm.values;
        const {editEvent, id} = this.props;
        // const {formSubmitted, ...event} = this.state;
        editEvent(event, id);
        this.setState({formSubmitted: true});
    };

    changeHandler = property => ev => {
        const {value} = ev.target;
        this.setState({[property]: value});
    };
    renderInput = ({
                       name,
                       input,
                       label,
                       type,
                       meta: { touched, error, warning },
                   }) => (
        <div className="add__input_container">
            <label className="add__field">{label}</label>
            <input
                value={name}
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
    renderPhotoUpload = ({ label }) => (
        <div className="add__input_container">
            <label className="add__field">{label}</label>
            <PhotoUpload photo={URL => this.props.change('photo', URL)} />
        </div>
    );
    renderTextArea = ({
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

    render() {
        // const { formSubmitted } = this.state;

        const {
            name,
            description,
            organization,
            contacts,
            time,
            location,
            photo,
            formSubmitted
        } = this.state;
        // const {event} = this.props;
        return (
            <div>
                <Navigation/>
                <form className="add" onSubmit={this.handleSubmit}>
                    {formSubmitted && <div className="add__carpet"/>}
                    <div className="add__title_container">
                        <h1 className="add__title">Edit event details</h1>
                    </div>
                    <div className="add__subtitle_container">
                        <img src="http://res.cloudinary.com/ucu/image/upload/w_50,h_40/icon_event_debdmm.png"/>
                        <h1 className="add__subtitle">Event Overview</h1>
                    </div>
                    <Field
                        name="name"
                        type="text"
                        label="Event Name"
                        component={this.renderInput}
                        warn={alphaNumeric}
                        validate={[required, maxLength20, minLength2]}
                    />
                    <Field
                        name="organization"
                        type="text"
                        label="Organization Name"
                        component={this.renderInput}
                        warn={alphaNumeric}
                        validate={[required, maxLength20, minLength2]}
                    />
                    <Field
                        name="location"
                        type="text"
                        label="Location"
                        component={this.renderInput}
                        validate={[required, maxLength15, minLength2]}
                    />
                    <Field
                    name="contacts"
                    type="text"
                    label="Contacts"
                    component={this.renderInput}
                    validate={[required, phoneNumber, maxLength20]}
                    />

                    <Field
                    name="description"
                    type="text"
                    label="Event Description & Requirements"
                    component={this.renderTextArea}
                    warn={alphaNumeric}
                    validate={[required, minLength2]}
                    />
                    <Field
                        name="photo"
                        label="Update photo"
                        component={this.renderPhotoUpload}
                    >
                        <div className="add__user_input_container">
                            {/*<PhotoUpload photo={URL => this.setState({ photo: URL })} />*/}
                        </div>
                    </Field>

                    {/*<label className="add__input_container">*/}
                        {/*<span className="add__field">DOWNLOAD PHOTO</span>*/}
                        {/*<img src={CLOUDINARY_URL + 'c_scale,r_5,w_265/' + photo + '.jpg'}/>*/}
                        {/*<PhotoUpload*/}
                            {/*// photo={URL => this.setState({photo: URL})}*/}
                        {/*/>*/}
                    {/*</label>*/}
                    <div className="add__submit-container">
                        <button className="add__submit">Save changes</button>
                    </div>
                </form>
                <Footer />
            </div>
        );
    }
}

EventEdit = reduxForm({
    form: 'editEventForm',
})(EventEdit);

export default connect(
    (state, {id}) => ({
        editEventForm: state.form.editUserForm,
        isFetching: getIsEventFetching(id, state),
        isEventProcessing: getIsEventProcessing(state),
        event: getEventById(state, id)
    }),
    {editEvent, fetchEvent},
    ({event, isFetching, isEventProcessing}, {fetchEvent, editEvent}, {id, onSuccess}) => {
        if (!event && !isFetching) {
            fetchEvent(id);
        }
        return {
            id,
            event,
            editEvent,
            onSuccess,
            isEventProcessing
        };
    },
)(EventEdit);
