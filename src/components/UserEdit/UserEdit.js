import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getIsUserProcessing, getIsUserFetching} from '../../reducers';
import {editUser} from '../../actions/edit';
import {getUserById} from '../../reducers/users';
import {fetchUser} from '../../actions/fetch';

import AddEventNavigation from "../Navigation/NavigationAddUser";
import PhotoUpload from '../PhotoUpload';

import '../../../styles/add.less';
import {CLOUDINARY_URL} from "../../api/index";
import Footer from "../Footer/Footer";

class UserEdit extends Component {
    constructor(props) {
        super(props);
        const initState = {
            name: '',
            description: '',
            contacts: '',
            interests: '',
            location: '',
            photo: '',
            formSubmitted: false,
        };
        this.state = this.props.user ? this.props.user : initState;
    }

    static defaultProps = {
        onSuccess() {
        },
    };

    static getDerivedStateFromProps(nextProps,
                                    prevState) {
        const {user, isUserProcessing, onSuccess} = nextProps;
        const {formSubmitted} = prevState;
        console.log(formSubmitted, isUserProcessing, "f");
        if (formSubmitted && !isUserProcessing) {
            onSuccess();
        }
        console.log('getDerivedStateFromProps');
        // console.log(nextProps, prevState);
        const nextPropsStr = JSON.stringify(nextProps);
        const prevNextPropsStr = JSON.stringify(prevState.nextProps);
        console.log(nextPropsStr);
        console.log(prevNextPropsStr);
        if(nextPropsStr !== prevNextPropsStr){
            console.log('not equal');
            return {...user, nextProps};
        }else{
            return {...prevState.user, nextProps};
        }
    }


    handleSubmit = ev => {
        ev.preventDefault();
        const {editUser, id} = this.props;
        const {formSubmitted, ...user} = this.state;

        editUser(user, id);
        this.setState({formSubmitted: true});
    };

    changeHandler = (property,  ev) => {
        const {value} = ev.target;
        console.log('chnge', value);
        this.setState({[property]: value});
    };

    render() {
        console.log('render', this.state);
        const {
            name,
            description,
            contacts,
            interests,
            location,
            photo,
            formSubmitted,
        } = this.state;
        // const {event} = this.props;
        return (
            <div>
                <AddEventNavigation/>
                <div>
                    <form className="add" onSubmit={this.handleSubmit}>
                        {formSubmitted && <div className="add__carpet"/>}
                        <div className="add__title_container">
                            <h1 className="add__title">Edit your profile</h1>
                        </div>
                        <div className="add__subtitle_container">
                            <img src="http://res.cloudinary.com/ucu/image/upload/w_50,h_40/icon_event_debdmm.png"/>
                            <h1 className="add__subtitle">Profile Overview</h1>
                        </div>

                        <label className="add__input_container">
                            <span className="add__field">YOUR NAME</span>
                            <input
                                className="add__input"
                                placeholder="Name"
                                value={name}
                                onChange={ev=>this.changeHandler('name', ev)}
                            />
                        </label>
                        <label className="add__input_container">
                            <span className="add__field">YOUR LOCATION</span>
                            <input
                                className="add__input"
                                placeholder="Location"
                                value={location}
                                onChange={ev=>this.changeHandler('location', ev)}
                            />
                        </label>
                        <label className="add__input_container">
                            <span className="add__field">YOUR CONTACTS</span>
                            <input
                                className="add__input"
                                placeholder="Contacts"
                                value={contacts}
                                onChange={ev => this.changeHandler('contacts', ev)}
                            />
                        </label>

                        <label className="add__input_container">
                            <span className="add__field">ABOUT YOU</span>
                            <textarea
                                className="add__textarea"
                                placeholder="Description"
                                value={description}
                                onChange={ev => this.changeHandler('description', ev)}
                                required
                            />
                        </label>

                        <label className="add__input_container">
                            <span className="add__field">YOUR INTERESTS & GOALS</span>
                            <input
                                className="add__input"
                                placeholder="Interests & Goals"
                                value={interests}
                                onChange={ev => this.changeHandler('interests', ev)}
                            />
                        </label>

                        <label className="add__input_container">
                            <span className="add__field">DOWNLOAD PHOTO</span>
                            <div className="add__photo-container">
                                <img src={CLOUDINARY_URL + 'c_scale,r_5,w_265/' + photo + '.jpg'}
                                     className="add__photo-img"/>
                            </div>
                            <PhotoUpload photo={URL => this.setState({photo: URL})}/>
                        </label>
                        <div className="add__submit-container">
                            <button className="add__submit">Save changes</button>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        );
    }
}

export default connect(
    (state, {id}) => ({
        isUserFetching: getIsUserFetching(id, state),
        isUserProcessing: getIsUserProcessing(state),
        user: getUserById(state, id),
    }),
    {editUser, fetchUser},
    ({user, isUserFetching, isUserProcessing},
     {fetchUser, editUser},
     {id, onSuccess},) => {
        if (!user && !isUserFetching) {
            fetchUser(id);
        }
        return {
            id,
            user,
            editUser,
            onSuccess,
            isUserProcessing,
        };
    },
)(UserEdit);

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
//
// import { getIsUserProcessing, getIsUserFetching } from '../../reducers';
// import { editUser } from '../../actions/edit';
// import { getUserById } from '../../reducers/users';
// import { fetchUser } from '../../actions/fetch';
//
// import AddEventNavigation from '../Navigation/NavigationAddUser';
// import PhotoUpload from '../PhotoUpload';
//
// import '../../../styles/add.less';
// import { CLOUDINARY_URL } from '../../api/index';
// import {
//   alphaNumeric,
//   email_check,
//   maxLength15,
//   maxLength20,
//   minLength2,
//   phoneNumber,
//   required,
// } from '../../helpers/FieldLevelValidationForm';
// import { Field, reduxForm } from 'redux-form';
//
// class UserEdit extends Component {
//   constructor(props) {
//     super(props);
//     const initState = {
//       name: '',
//       description: '',
//       contacts: '',
//       interests: '',
//       location: '',
//       photo: '',
//       formSubmitted: false,
//     };
//     this.state = this.props.user ? this.props.user : initState;
//     console.log('this.state: WARNING', this.state);
//   }
//   static defaultProps = {
//     onSuccess() {},
//   };
//
//   static getDerivedStateFromProps(
//     { user, isUserProcessing, onSuccess },
//     { formSubmitted },
//   ) {
//     console.log(formSubmitted, isUserProcessing, 'f');
//     if (formSubmitted && !isUserProcessing) {
//       onSuccess();
//     }
//     return user;
//   }
//
//   handleSubmit = ev => {
//     ev.preventDefault();
//     console.log('props', this.props);
//     const { ...user } = this.props.editUserForm.values;
//     const { editUser, id } = this.props;
//     // const { formSubmitted, ...user } = this.state;
//     editUser(user, id);
//     this.setState({ formSubmitted: true });
//     this.props.onSuccess();
//   };
//
//   changeHandler = property => ev => {
//     const { value } = ev.target;
//     this.setState({ [property]: value });
//   };
//   renderInput = ({
//     name,
//     input,
//     label,
//     type,
//     meta: { touched, error, warning },
//   }) => (
//     <div className="add__input_container">
//       <label className="add__field">{label}</label>
//       <input
//         value={name}
//         {...input}
//         placeholder={label}
//         type={type}
//         className="add__input"
//       />
//       {touched &&
//         ((error && <span className="add__input_warning">{error}</span>) ||
//           (warning && <span className="add__input_warning">{warning}</span>))}
//     </div>
//   );
//   renderPhotoUpload = ({ label }) => (
//     <div className="add__input_container">
//       <label className="add__field">{label}</label>
//       <PhotoUpload photo={URL => this.props.change('photo', URL)} />
//     </div>
//   );
//   renderTextArea = ({
//     input,
//     label,
//     type,
//     meta: { touched, error, warning },
//   }) => (
//     <div className="add__input_container">
//       <label className="add__field">{label}</label>
//
//       <textarea {...input} placeholder={label} className="add__input" />
//       {touched &&
//         ((error && <span className="add__input_warning">{error}</span>) ||
//           (warning && <span className="add__input_warning">{warning}</span>))}
//     </div>
//   );
//   render() {
//     const { handleSubmit, invalid, pristine, reset, submitting } = this.props;
//
//     const {
//       // name,
//       // description,
//       // contacts,
//       // interests,
//       // location,
//       // photo,
//       formSubmitted,
//     } = this.state;
//
//     return (
//       <div>
//         <AddEventNavigation />
//         <div>
//           <form className="add" onSubmit={this.handleSubmit}>
//             {formSubmitted && <div className="add__carpet" />}
//             <div className="add__title_container">
//               <h1 className="add__title">Edit your profile</h1>
//             </div>
//             <div className="add__subtitle_container">
//               <img src="http://res.cloudinary.com/ucu/image/upload/w_50,h_40/icon_event_debdmm.png" />
//               <h1 className="add__subtitle">Profile Overview</h1>
//             </div>
//             <div className="add__event_block">
//               <Field
//                 // defaultValue="jcnskdj"
//                 name="name"
//                 type="text"
//                 label="Name and Surname"
//                 component={this.renderInput}
//                 warn={alphaNumeric}
//                 validate={[required, maxLength20, minLength2]}
//               />
//               <Field
//                 name="location"
//                 type="text"
//                 label="Location"
//                 component={this.renderInput}
//                 validate={[required, maxLength15, minLength2]}
//               />
//               <Field
//                 name="email"
//                 type="text"
//                 label="Email"
//                 component={this.renderInput}
//                 validate={email_check}
//               />
//               <Field
//                 name="contacts"
//                 type="text"
//                 label="Contacts"
//                 component={this.renderInput}
//                 validate={[required, phoneNumber, maxLength20]}
//               />
//
//               <Field
//                 name="description"
//                 type="text"
//                 label="Description"
//                 component={this.renderTextArea}
//                 warn={alphaNumeric}
//                 // onChange={this.changeHandler('description')}
//                 validate={[required, minLength2]}
//               />
//
//               <Field
//                 name="interests"
//                 type="text"
//                 label="Interests"
//                 component={this.renderTextArea}
//                 warn={alphaNumeric}
//                 // onChange={this.changeHandler('interests')}
//                 validate={[required, maxLength20, minLength2]}
//               />
//               <Field
//                 name="photo"
//                 label="Update photo"
//                 component={this.renderPhotoUpload}
//               >
//                 <div className="add__user_input_container">
//                   {/*<PhotoUpload photo={URL => this.setState({ photo: URL })} />*/}
//                 </div>
//               </Field>
//
//               {/*<label className="add__input_container">*/}
//               {/*<span className="add__field">DOWNLOAD PHOTO</span>*/}
//               {/*<div className="add__photo-container">*/}
//               {/*<img*/}
//               {/*src={CLOUDINARY_URL + 'c_scale,r_5,w_265/' + photo + '.jpg'}*/}
//               {/*className="add__photo-img"*/}
//               {/*/>*/}
//               {/*</div>*/}
//               {/*<PhotoUpload photo={URL => this.setState({ photo: URL })} />*/}
//               {/*</label>*/}
//               {/*<div className="add__input_container">*/}
//               <div className="add__button_container">
//                 <button
//                   type="submit"
//                   disabled={invalid || pristine || submitting}
//                   className="add__event_input"
//                 >
//                   Save changes
//                 </button>
//                 <button
//                   className="add__event_input"
//                   type="button"
//                   disabled={pristine || submitting}
//                   onClick={reset}
//                 >
//                   Clear Values
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
// UserEdit = reduxForm({
//   form: 'editUserForm',
// })(UserEdit);
//
//
// export default connect(
//   (state, { id }) => (
//     {
//         editUserForm: state.form.editUserForm,
//
//         isUserFetching: getIsUserFetching(id, state),
//       isUserProcessing: getIsUserProcessing(state),
//       user: getUserById(state, id),
//     }
//   ),
//   { editUser, fetchUser },
//   (
//     { user, isUserFetching, isUserProcessing },
//     { fetchUser, editUser },
//     { id, onSuccess },
//
//   ) => {
//     if (!user && !isUserFetching) {
//       fetchUser(id);
//     }
//     return {
//       id,
//       user,
//       editUser,
//       onSuccess,
//       isUserProcessing,
//     };
//   },
// )(UserEdit);
