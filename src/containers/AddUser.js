import React, {Component} from "react";
import {addUser} from "../actions/index";
import {connect} from "react-redux";

import PhotoUpload from "../components/PhotoUpload";

import {getIsUserProcessing} from "../reducers";

import "../../styles/add-user.less";

class AddUser extends Component {
    static defaultProps = {
        onSuccess() {
        }
    };

    static getDerivedStateFromProps({isUserProcessing, onSuccess},
                                    {formSubmitted}) {
        if (formSubmitted && !isUserProcessing) {
            onSuccess();
        }
        return {};
    }

    state = {
        name: "",
        description: "",
        contacts: "",
        location: "",
        photo: "",
        interests: "",
        formSubmitted: false
    };

    handleSubmit = ev => {
        ev.preventDefault();

        const {addUser} = this.props;
        const {formSubmitted, ...user} = this.state;

        //TODO: verify data;

        addUser(user);
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
            location,
            interests,
            formSubmitted
        } = this.state;
        return (
            <form className="add-user" onSubmit={this.handleSubmit}>
                {formSubmitted && <div className="add-event__carpet" />}
                <div className="add-user__title_container">
                    <h1 className="add-user__title">Create your profile</h1>
                </div>
                <div className="add-user__subtitle_container">
                    <img
                        src="http://res.cloudinary.com/drzw6h31n/image/upload/c_scale,h_50,w_50/v1522888001/resume_1_zvj4fa.png"/>
                    <h1 className="add-user__subtitle">Profile Overview</h1>
                </div>

                <label className="add-user__input_container">
                    <span className="add-user__field">YOUR NAME</span>
                    <input
                        className="add-user__input"
                        placeholder="Name"
                        value={name}
                        onChange={this.changeHandler("name")}
                    />
                </label>
                <label className="add-user__input_container">
                    <span className="add-user__field">YOUR LOCATION</span>
                    <input
                        className="add-user__input"
                        placeholder="Location"
                        value={location}
                        onChange={this.changeHandler("location")}
                    />
                </label>
                <label className="add-user__input_container">
                    <span className="add-user__field">YOUR CONTACTS</span>
                    <input
                        className="add-user__input"
                        placeholder="Contacts"
                        value={contacts}
                        onChange={this.changeHandler("contacts")}
                    />
                </label>
                <label className="add-user__input_container">
                    <span className="add-user__field">ABOUT YOU</span>
                    <textarea
                        className="add-user__textarea"
                        placeholder="About"
                        value={description}
                        onChange={this.changeHandler("description")}
                        required
                    />
                </label>
                <label className="add-user__input_container">
                    <span className="add-user__field">YOUR INTERESTS & GOALS</span>
                    <input
                        className="add-user__input"
                        placeholder="Interests & Goals"
                        value={interests}
                        onChange={this.changeHandler("interests")}
                        required
                    />
                </label>
                <label className="add-user__input_container">
                    <span className="add-user__field">DOWNLOAD PHOTO</span>
                    <PhotoUpload photo={URL => this.setState({ photo: URL })} />
                </label>
                <div className="add-user__submit-container">
                    <button className="add-user__submit">Add User</button>
                </div>
            </form>
        );


    }
}

const checkField = array1 => {
    for (let i in array1) {
        console.log("i:", array1[i]);
        if (array1[i] === "") {
            alert("Please fill mandatory fields!");
            return true;
        }
        return true;
    }
};

export default connect(
    state => ({
        isUserProcessing: getIsUserProcessing(state)
    }),
    { addUser }
)(AddUser);

