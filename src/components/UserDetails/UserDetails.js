import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import '../../../styles/user-details.less';
import '../../../styles/user.less'
import "../../../styles/common.less"
import NavigationLanding from "../Navigation/NavigationSearchEvents";
import {CLOUDINARY_URL} from "../../api/index";

class UserDetails extends Component {
    render() {
        let props = this.props;
        const {user} = this.props;
        if (!user) {
            return 'Loading...';
        }
        return (
            <div>
                <NavigationLanding/>
                <div className="user-details__main-container">
                    <div className='user-details__subnav'>
                        <div className='user-details__left'>
                            <div className='user-details__edit'>
                                <img className="event-details__icon-edit"/>
                                <NavLink
                                    to={'/users/edit/' + user.id}
                                >
                                    <button className="user-details__btn">Edit user</button>
                                </NavLink>
                            </div>
                            <div className='user-details__delete'>
                                <img className="event-details__icon-delete"/>
                                <button
                                    className="user-details__btn"
                                    onClick={() => {
                                        props.deleteUser(user.id);
                                        this.props.onSuccess();
                                    }}
                                >
                                    Delete user
                                </button>
                            </div>
                        </div>
                        <div className='user-details__right'>
                            <button className='user__signUp'>Sign up</button>
                            <span className='user__divider'></span>
                            <button className='user__logIn'>Log in</button>
                        </div>
                    </div>
                    <div className="user-details__big">
                            <img className="user-details__photo" src={CLOUDINARY_URL+'w_170,h_170,c_thumb,g_faces/' + user.photo + '.jpg'}/>
                            <h1 className="user-details__name">{user.name}</h1>
                            <div className="user-details__block-row">
                                <button className="user-details__button">
                                    <img className="user-details__icon-heard"/>
                                    <span className="user-details__button-descr">Bookmark</span>
                                </button>
                                <button className="user-details__button">
                                    <img className="user-details__icon-flag"/>
                                    <span className="user-details__button-descr">Report</span>
                                </button>
                            </div>
                    </div>
                    <div className="user-details__info">
                        <div className="user-details__in">
                            <div className="user-details__title-info">
                                <img className="user-details__icon-paper"/>
                                <h4 className="user-details__subt">About {user.name}</h4>
                                <hr className="user-details__hr"/>
                            </div>
                            <div className="user-details__info-cont">
                                <h6 className="user-details__story-title">Story</h6>
                                <p className="user-details__story">{user.description}</p>
                            </div>
                        </div>
                        <div className="user-details__in">
                            <div className="user-details__title-info">
                                <img className="user-details__icon-contact"/>
                                <h4 className="user-details__subt">Contacts</h4>
                                <hr className="user-details__hr"/>
                            </div>
                            <div className="user-details__info-cont">
                                <h6 className="user-details__story-title">Phone number</h6>
                                <p className="user-details__story">{user.contacts}</p>
                            </div>
                        </div>
                        <div className="user-details__in">
                            <div className="user-details__title-info">
                                <img className="user-details__icon-location"/>
                                <h4 className="user-details__subt">Location</h4>
                                <hr className="user-details__hr"/>
                            </div>
                            <div className="user-details__info-cont">
                                <h6 className="user-details__story-title">Region, city</h6>
                                <p className="user-details__story">{user.location}</p>
                            </div>
                        </div>
                    </div>
                    {/*/!*<p className="user-details__content">{currentEvent.date.toFormat("yyyy LLL dd")}</p>*!/*/}
                    {/*/!*<p className="user-details__content">{currentEvent.date.toFormat("HH:mm")}</p>*!/*/}
                    {/*<div className="user-details__subtitle_container">*/}
                    {/*<img className="user-details__icon-categories"/>*/}
                    {/*<h1 className="user-details__subtitle">Interests</h1>*/}
                    {/*</div>*/}
                    {/*<p className="user-details__content">{user.interests}</p>*/}
                </div>
            </div>
        );
    }
}

export default UserDetails;
