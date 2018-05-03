import "../../../styles/add.less";
import React, {Component} from "react";
import DateTimePicker from "react-datetime-picker";
import {connect} from "react-redux";
import {getIsUserProcessing, getIsUserFetching} from "../../reducers";
import {editUser} from "../../actions/edit";
import {getUserById} from "../../reducers/users";
import PhotoUpload from "../PhotoUpload";
import { fetchUser } from '../../actions/fetch';

class UserEdit extends Component {
    constructor(props) {
        super(props);
        const initState = {
            name: "",
            description: "",
            contacts: "",
            interests: "",
            location: "",
            photo: "",
            formSubmitted: false
        };
        this.state = this.props.user? this.props.user : initState;
    }
    static defaultProps = {
        onSuccess() {
        }
    };


    static getDerivedStateFromProps({user, isUserProcessing, onSuccess },
                                    { formSubmitted }) {
        console.log(formSubmitted, isUserProcessing);
        if (formSubmitted && !isUserProcessing) {
            onSuccess();
        }
        return user;
    }

    handleSubmit = ev => {
        ev.preventDefault();
        const {editUser, id} = this.props;
        const {formSubmitted, ...user} = this.state;

        editUser(user, id);
        this.setState({formSubmitted: true});
    };

    changeHandler = property => ev => {
        const {value} = ev.target;
        this.setState({[property]: value});
    };

    render() {

        const {
            name,
            description,
            contacts,
            interests,
            location,
            photo,
            formSubmitted
        } = this.state;
        // const {event} = this.props;
        return (
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
                        onChange={this.changeHandler("name")}
                    />
                </label>
                <label className="add__input_container">
                    <span className="add__field">YOUR LOCATION</span>
                    <input
                        className="add__input"
                        placeholder="Location"
                        value={location}
                        onChange={this.changeHandler("location")}
                    />
                </label>
                <label className="add__input_container">
                    <span className="add__field">YOUR CONTACTS</span>
                    <input
                        className="add__input"
                        placeholder="Contacts"
                        value={contacts}
                        onChange={this.changeHandler("contacts")}
                    />
                </label>


                <label className="add__input_container">
                  <span className="add__field">
                   ABOUT YOU
                  </span>
                    <textarea
                        className="add__textarea"
                        placeholder="Description"
                        value={description}
                        onChange={this.changeHandler("description")}
                        required
                    />
                </label>

                <label className="add__input_container">
                    <span className="add__field">YOUR INTERESTS & GOALS</span>
                    <input
                        className="add__input"
                        placeholder="Interests & Goals"
                        value={interests}
                        onChange={this.changeHandler('interests')}
                    />
                </label>

                <label className="add__input_container">
                    <span className="add__field">DOWNLOAD PHOTO</span>
                    <div className="add__photo-container"><img src={photo} className="add__photo-img" /></div>
                    <PhotoUpload photo={URL => this.setState({photo: URL})}/>
                </label>
                <div className="add__submit-container">
                    <button className="add__submit">Save changes</button>
                </div>
            </form>
        );
    }
}


export default connect(
    (state, {id}) => ({
        isUserFetching: getIsUserFetching(id, state),
        isUserProcessing: getIsUserProcessing(state),
        user: getUserById(state, id)
    }),
    {editUser, fetchUser},
    ({ user, isUserFetching, isUserProcessing}, { fetchUser, editUser }, { id, onSuccess}) => {
        if (!user && !isUserFetching) {
            fetchUser(id);
        }
        return {
            id,
            user,
            editUser,
            onSuccess,
            isUserProcessing
        };
    },
)(UserEdit);
