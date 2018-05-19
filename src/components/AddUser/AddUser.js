import React, {Component} from 'react';
import {addUser} from '../../actions/add';
import {connect} from 'react-redux';

import PhotoUpload from '../PhotoUpload';

import {getIsUserProcessing} from '../../reducers/index';

import '../../../styles/common.less';
import '../../../styles/add.less';
import NavigationAddUser from '../Navigation/NavigationAddUser';

function validate(name, contacts) {
    // true means invalid, so our conditions got reversed
    return {
        name: name.length === 0,
        contacts: contacts.length === 0,
    };
}

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
        if (!this.canBeSubmitted()) {
            ev.preventDefault();
            return;
        }
        ev.preventDefault();
        const {addUser} = this.props;
        const {formSubmitted, ...user} = this.state;
        addUser(user);
        this.setState({formSubmitted: true});
        this.props.onSuccess();
    };

    changeHandler = property => ev => {
        const {value} = ev.target;
        this.setState({[property]: value});
    };

    canBeSubmitted() {
        const errors = validate(this.state.name, this.state.contacts);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
    }

    render() {
        const {
            name,
            description,
            contacts,
            location,
            interests,
            formSubmitted,
        } = this.state;
        const errors = validate(this.state.name, this.state.contacts);
        const isDisabled = Object.keys(errors).some(x => errors[x]);

        return (
            <div>
                <NavigationAddUser/>
                <form className="add__user" onSubmit={this.handleSubmit}>
                    {formSubmitted && <div className="add-event__carpet"/>}
                    <div className="add__user_block">
                        <div className="add__user_container">
                            <h1 className="add__user_title">Join Ripka</h1>
                        </div>

                        <label className="add__user_input_container">
                            <input
                                required
                                className="add__input"
                                placeholder="First Name"
                                value={name}
                                onChange={this.changeHandler('name')}
                            />
                            <input
                                required
                                className="add__input"
                                placeholder="Last Name"
                                value={name}
                                onChange={this.changeHandler('name')}
                            />
                        </label>
                        <label className="add__user_input_container">
                            <input
                                required
                                className="add__input"
                                placeholder="Location"
                                value={location}
                                onChange={this.changeHandler('location')}
                            />
                        </label>
                        <label className="add__user_input_container">
                            <input
                                required
                                className="add__input"
                                placeholder="Contacts"
                                value={contacts}
                                onChange={this.changeHandler('contacts')}
                            />
                        </label>
                        <label className="add__user_input_container">
              <textarea
                  className="add__textarea"
                  placeholder="About Me"
                  value={description}
                  onChange={this.changeHandler('description')}
                  required
              />
                        </label>
                        <label className="add__user_input_container">
                            <input
                                className="add__input"
                                placeholder="Interests & Goals"
                                value={interests}
                                onChange={this.changeHandler('interests')}
                                required
                            />
                        </label>
                        <div className="add__user_input_container">
                            <PhotoUpload photo={URL => this.setState({photo: URL})}/>
                        </div>
                        <div className="add__user_input_container">
                            <button disabled={isDisabled} className="add__user_button">Add User</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(
    state => ({
        isUserProcessing: getIsUserProcessing(state),
    }),
    {addUser},
)(AddUser);
