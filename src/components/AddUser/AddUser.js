import React, {Component} from 'react';
import PhotoUpload from '../PhotoUpload';

import {Field, reduxForm} from 'redux-form';
import {addUser} from '../../actions/add';
import {connect} from 'react-redux';

import {
    alphaNumeric,
    maxLength20,
    maxLength15,
    minLength2,
    required,
    email_check,
    phoneNumber,
} from '../../helpers/FieldLevelValidationForm';
import {getIsUserProcessing} from '../../reducers/index';

import '../../../styles/common.less';
import '../../../styles/add.less';
import NavigationAddUser from '../Navigation/NavigationAddUser';
import GeoSuggest from "../GeoSuggest/GeoSuggest";
import Footer from "../Footer/Footer";

class AddUser extends Component {
    static defaultProps = {
        onSuccess() {
        },
    };

    static getDerivedStateFromProps({isUserProcessing, onSuccess},
                                    {formSubmitted},) {
        if (formSubmitted && !isUserProcessing) {
            onSuccess();
        }
        return {};
    }

    state = {
        name: '',
        description: '',
        contacts: '',
        location: '',
        photo: '',
        interests: '',
        formSubmitted: false,
    };

    handleSubmit = ev => {
        ev.preventDefault();
        const {...user} = this.props.addUserForm.values;
        const {location} = this.state;
        const {addUser} = this.props;
        // const { formSubmitted, ...user } = this.state;
        const fullUser = {...user,location};
        console.log('fullUser', fullUser);
        addUser(fullUser);
        this.setState({formSubmitted: true});
        this.props.onSuccess();
    };

    changeHandler = (property, value) =>   {
            // ev => {
        // const {value} = ev.target;
        this.setState({[property]: value});
        console.log('STATE', this.state);
    };

    renderPhotoUpload = () => (
        <PhotoUpload photo={URL => this.props.change('photo', URL)}/>
    );

    renderInput = ({input, label, type, meta: {touched, error, warning}}) => (
        <div className="add__user_input_container">
            <input
                // required
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

    renderTextArea = ({
                          input,
                          label,
                          type,
                          meta: {touched, error, warning},
                      }) => (
        <div className="add__user_input_container">
            <textarea {...input} placeholder={label} className="add__input"/>
            {touched &&
            ((error && <span className="add__input_warning">{error}</span>) ||
                (warning && <span className="add__input_warning">{warning}</span>))}
        </div>
    );

    render() {
        const {handleSubmit, invalid, pristine, reset, submitting} = this.props;
        const {
            // name,
            // description,
            // contacts,
            // location,
            // interests,
            // email,
            formSubmitted,
        } = this.state;
        console.log('THIS.PROPS:      ', this.props);

        // const errors = validate(this.state.name, this.state.contacts);
        // const isDisabled = Object.keys(errors).some(x => errors[x]);

        return (
            <div>
                <NavigationAddUser/>
                <form className="add__user" onSubmit={this.handleSubmit}>
                    {formSubmitted && <div className="add-event__carpet"/>}
                    <div className="add__user_block">
                        <div className="add__user_container">
                            <h1 className="add__user_title">Join Ripka</h1>
                        </div>
                        <Field
                            name="name"
                            type="text"
                            label="Name and Surname"
                            component={this.renderInput}
                            warn={alphaNumeric}
                            validate={[required, maxLength20, minLength2]}
                        />
                        {/*<Field*/}
                            {/*name="location"*/}
                            {/*type="text"*/}
                            {/*label="Location"*/}
                            {/*component={this.renderInput}*/}
                            {/*validate={[required, maxLength15, minLength2]}*/}
                            {/*// onChange={this.changeHandler('location')}*/}
                        {/*>*/}
                            <GeoSuggest onChange={(val)=>this.changeHandler('location', val)}/>
                        {/*</Field>*/}
                        <Field
                            name="email"
                            type="text"
                            label="Email"
                            component={this.renderInput}
                            validate={email_check}
                            // onChange={this.changeHandler('email')}
                        />
                        <Field
                            name="contacts"
                            type="text"
                            label="Contacts"
                            component={this.renderInput}
                            // warn={alphaNumeric}
                            validate={[required, phoneNumber, maxLength20]}
                            // onChange={this.changeHandler('contacts')}
                        />
                        <Field
                            name="description"
                            type="text"
                            label="Description"
                            component={this.renderTextArea}
                            warn={alphaNumeric}
                            // onChange={this.changeHandler('description')}
                            validate={[required, minLength2]}
                        />
                        <Field
                            name="interests"
                            type="text"
                            label="Interests"
                            component={this.renderTextArea}
                            warn={alphaNumeric}
                            // onChange={this.changeHandler('interests')}
                            validate={[required, maxLength20, minLength2]}
                        />
                        <Field name="photo" component={this.renderPhotoUpload}>
                            <div className="add__user_input_container">
                                {/*<PhotoUpload photo={URL => this.setState({ photo: URL })} />*/}
                            </div>
                        </Field>
                        <div className="add__user_input_container">
                            <button
                                type="submit"
                                disabled={invalid || pristine || submitting}
                                className="add__user_button"
                            >
                                Register
                            </button>
                            {/*<button*/}
                            {/*className="add__user_button"*/}
                            {/*type="button"*/}
                            {/*disabled={pristine || submitting}*/}
                            {/*onClick={reset}*/}
                            {/*>*/}
                            {/*Clear Values*/}
                            {/*</button>*/}
                        </div>
                    </div>
                </form>
                <Footer />
            </div>
        );
    }
}

AddUser = reduxForm({
    form: 'addUserForm',
})(AddUser);

export default connect(
    state => ({
        addUserForm: state.form.addUserForm,
        isUserProcessing: getIsUserProcessing(state),
    }),
    {addUser},
)(AddUser);
