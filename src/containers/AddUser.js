import React from 'react'
import {addUser} from '../actions/index'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import PhotoUpload from "../components/PhotoUpload";
import DateTime from 'luxon/src/datetime.js'

let AddUser = ({dispatch}) => {
    let user_name,
        user_description,
        user_date,
        user_interests,
        user_contacts,
        user_location,
        user_photo

    return (
        <div>
            <div className="add-event__title_container">
                <h1 className="add-event__title">Add event details</h1>
            </div>
            <div className="add-event__subtitle_container">
                <img src="http://res.cloudinary.com/ucu/image/upload/w_50,h_40/icon_event_debdmm.png"/>
                <h1 className="add-event__subtitle">Event Overview</h1>
            </div>


            <div className="add-event__input_container">
                <p className="add-event__field">EVENT NAME</p>
                <input className="add-event__input" placeholder="Event Name" ref={node => {
                    user_name = node;
                }}/>
            </div>
            <div className="add-event__input_container">
                <p className="add-event__field">LOCATION</p>
                <input className="add-event__input" placeholder="Location" ref={node => {
                    user_location = node;
                }}/>
            </div>
            <div className="add-event__input_container">
                <p className="add-event__field">CONTACTS</p>
                <input className="add-event__input" placeholder="Contacts" ref={node => {
                    user_contacts = node;
                }}/>
            </div>
            <div className="add-event__input_container">
                <p className="add-event__field">EVENT DESCRIPTION & REQUIREMENTS</p>
                <input className="add-event__input" placeholder="Description" ref={node => {
                    user_description = node;
                }} required/>
            </div>
            <div className="add-event__input_container">
                <p className="add-event__field">EVENT INTERESTS</p>
                <input className="add-event__input" placeholder="Interests" ref={node => {
                    user_interests = node;
                }} required/>
            </div>
            <div className="add-event__input_container">
                <p className="add-event__field">DOWNLOAD PHOTO</p>
                <PhotoUpload photo={(URL) => {
                    user_photo = URL
                }}/>
            </div>
            <div className="add-event__submit-container">
                <Link to="/">
                    <button className="add-event__submit" onClick={() => {
                        user_date = DateTime.local();
                        if (checkField([user_location.value,
                                user_description.value,
                                user_contacts.value,
                                user_name.value,
                                user_interests.value
                                ])
                        ) {
                            dispatch(addUser(
                                user_date,
                                user_name.value,
                                user_description.value,
                                user_contacts.value,
                                user_location.value,
                                user_interests.value,
                                user_photo
                            ));

                        }
                            user_name.value =
                            user_description.value=
                            user_contacts.value=
                            user_location.value=
                                user_interests.value =
                            user_photo= ''
                    }}>
                        Add User
                    </button>

                </Link>
            </div>
        </div>
    );
};
const checkField = (array1) => {
    for (let i in array1) {
        if (array1[i] === "") {
            alert("Please fill mandatory fields!");
            return true
        }
        return true
    }
};


AddUser = connect()(AddUser);
export default AddUser