import React from "react"
import {connect} from "react-redux"
import {compose} from "ramda";
import {Field, reduxForm} from "redux-form"

import {maxLength, required, email_check, minLength} from "../../helpers/FieldLevelValidationForm"

import {addUser} from "../../actions/add"

import Geocoder from "../Geocoder/Geocoder";
import UserForm from "../UserForm";

import "./UserAdd.scss"
import block from "../../helpers/BEM"
import {withRouter} from "react-router-dom";

const b = block("UserAdd");

export const UserAdd = ({handleSubmit, submitting, id}) => (
    <UserForm className={b()} onSubmit={handleSubmit}>
        {submitting && <div className={b("carpet")}/>}
        <div className={b('container')}>
            <header>
                <h1 className={b("title", ["text"])}>
                    {id ? "Edit profile" : "Join Ripka"}
                </h1>
            </header>
            <Field name="name" label="Name and Surname" component={UserForm.UserInput}
                   validate={[required, maxLength(20), minLength(2)]}/>


            <Field name="email" label="Email" component={UserForm.UserInput} validate={[required,email_check]}/>

            <Field name="contacts" label="Contacts" component={UserForm.UserInput}
                   validate={[required, maxLength(100)]}/>
            <Field
                name="location"
                component={() => (
                    <UserForm.UserFieldSet label={"Location"}>
                        <Geocoder/>
                    </UserForm.UserFieldSet>
                )}
            />
            <Field
                name="description"
                label="Description"
                component={UserForm.UserTextArea}
                validate={[required, minLength(20)]}
            />
            <Field
                name="interests"
                label="Interests"
                component={UserForm.UserTextArea}
                validate={[required, minLength(20)]}
            />
            <Field name="photo" label="Upload Photo" component={UserForm.UserPhotoUpload}/>


            <UserForm.UserFieldSet>
                <UserForm.UserButton>{id ? "Edit profile" : "Register"}</UserForm.UserButton>
            </UserForm.UserFieldSet>
        </div>
    </UserForm>
);

export default compose(
    withRouter,
    connect(null, {processUser: addUser}),

    reduxForm({
        form: "addUserForm",
        onSubmit: async (data, dispatch, {processUser, history}) => {
            const action = await processUser(data)
            history.push("/users/" + action.id)
        }
    })
)(UserAdd)
