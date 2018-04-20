import React from 'react'
import {addUser} from '../actions/index'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import PhotoUpload from "../components/PhotoUpload";
import DateTime from 'luxon/src/datetime.js'

import "../../styles/add-user.less"

let AddUser = ({dispatch}) => {
    let user_name,
        user_location,
        user_contacts,
        user_description,
        user_interests,
        user_photo

    return (
        <div>
            <div className="add-user__title_container">
                <h1 className="add-user__title">Create your profile</h1>
            </div>
            <div className="add-user__subtitle_container">
                <img src="http://res.cloudinary.com/drzw6h31n/image/upload/c_scale,h_50,w_50/v1522888001/resume_1_zvj4fa.png"/>
                <h1 className="add-user__subtitle">Profile Overview</h1>
            </div>


            <div className="add-user__input_container">
                <p className="add-user__field">YOUR NAME</p>
                <input className="add-user__input" placeholder="Name" ref={node => {
                    user_name = node;
                }}/>
            </div>
            <div className="add-user__input_container">
                <p className="add-user__field">YOUR LOCATION</p>
                <input className="add-user__input" placeholder="Location" ref={node => {
                    user_location = node;
                }}/>
            </div>
            <div className="add-user__input_container">
                <p className="add-user__field">YOUR CONTACTS</p>
                <input className="add-user__input" placeholder="Contacts" ref={node => {
                    user_contacts = node;
                }}/>
            </div>
            <div className="add-user__input_container">
                <p className="add-user__field">ABOUT YOU</p>
                <input className="add-user__input" placeholder="About" ref={node => {
                    user_description = node;
                }} required/>
            </div>
            <div className="add-user__input_container">
                <p className="add-user__field">YOUR INTERESTS & GOALS</p>
                <input className="add-user__input" placeholder="Interests & Goals" ref={node => {
                    user_interests = node;
                }} required/>
            </div>
            <div className="add-user__input_container">
                <p className="add-user__field">DOWNLOAD PHOTO</p>
                <PhotoUpload photo={(URL) => {
                    user_photo = URL
                }}/>
            </div>
            <div className="add-user__submit-container">
                <Link to="/">
                    <button className="add-user__submit" onClick={() => {
                        if (checkField([user_location.value,
                                user_description.value,
                                user_contacts.value,
                                user_name.value,
                                user_interests.value
                            ])
                        ) {
                            dispatch(addUser(
                                user_name.value,
                                user_location.value,
                                user_contacts.value,
                                user_description.value,
                                user_interests.value,
                                user_photo
                            ));

                        }
                        user_name.value =
                            user_location.value=
                                user_contacts.value=
                                    user_description.value=
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
        console.log('i:', array1[i]);
        if (array1[i] === "") {
            alert("Please fill mandatory fields!");
            return true
        }
        return true
    }
};


AddUser = connect()(AddUser);
export default AddUser