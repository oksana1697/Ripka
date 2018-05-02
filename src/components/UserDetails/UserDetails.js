import React, { Component } from 'react';

import '../../../styles/user-details.less';
import { NavLink } from 'react-router-dom';

class UserDetails extends Component {
  render() {
    let props = this.props;
    const { user } = this.props;
    if (!user) {
      return 'Loading...';
    }
    return (
      <div>
        <div className="user-details__title_container">
          <div className="user-details__block-column">
            <h1 className="user-details__title">{user.name}</h1>
            <h2 className="user-details__subtitle">{user.location}</h2>
          </div>
        </div>
        <div className="user-details__title_container">
          <div className="user-details__block-row">
            <button className="user-details__button">
              <img className="user-details__icon-heard" />
              <span className="user-details__button-descr">Bookmark</span>
            </button>
            <button className="user-details__button">
              <img className="event-details__icon-flag" />
              <span className="user-details__button-descr">Report</span>
            </button>
          </div>
        </div>
        <div className="user-details__block-column">
          <div className="user-details__subtitle_container">
            <img className="user-details__icon-paper" />
            <h1 className="user-details__subtitle">User description</h1>
          </div>
          <div className="user-details__container">
            <p className="user-details__content">{user.description}</p>

            {/*<p className="user-details__content">{currentEvent.date.toFormat("yyyy LLL dd")}</p>*/}
            {/*<p className="user-details__content">{currentEvent.date.toFormat("HH:mm")}</p>*/}
            <div className="user-details__subtitle_container">
              <img className="user-details__icon-contact" />
              <h1 className="user-details__subtitle">Contacts</h1>
            </div>
            <p className="user-details__content">{user.contacts}</p>
          </div>

          <NavLink
            to={'/edit/' + event.id}
            activeStyle={{
              textDecoration: 'none',
              color: 'black',
            }}
            className="event-details__button"
          >
            Edit user
          </NavLink>
          <button
            className="event-details__button-delete"
            onClick={() => {
              props.deleteUser(user.id);
              this.props.onSuccess();
            }}
          >
            Delete user
          </button>
        </div>
      </div>
    );
  }
}

export default UserDetails;
