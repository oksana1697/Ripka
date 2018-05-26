import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink, withRouter } from 'react-router-dom';
import { searchEvents } from '../../actions/search';

import '../../styles/navigation.scss';
import {connect} from "react-redux";

class NavigationSearchEvents extends Component {
    state = {
        filter: '',
    };

    changeHandler = property => ev => {
        const { value } = ev.target;
        const { searchEvents } = this.props;
        searchEvents(ev.target.value);
        this.setState({ [property]: value });
    };

  render() {
      const { foundEvents } = this.props;
      const { filter, formSubmitted } = this.state;

      const getPopupItems = () =>
          foundEvents.map(event => (
              <NavLink to={'/events/' + event.id}>
                  <a key={event.id} href="#">
                      {event.name}
                  </a>
              </NavLink>
          ));
    return (
      <div>
        <div className="navigation__container">
          <Link style={{ textDecoration: 'none' }} to="/">
            <h1 className="navigation__logo-content">Ripka</h1>
          </Link>

            <form>
                {formSubmitted && <div className="add-event__carpet" />}
                <div className="navigation__search-bar">
                    <input
                        value={filter}
                        onChange={this.changeHandler('filter')}
                        placeholder="Search by key word"
                        className="navigation__search-bar_filter"
                    />
                    <div className="navigation__search-bar_filter_content">
                        {getPopupItems()}
                    </div>
                </div>
            </form>
          <Link to="/events">
            <button className="navigation__settings_name">EVENTS</button>
          </Link>
          <Link to="/users">
            <button className="navigation__settings_name">USERS</button>
          </Link>

          <Link className="navigation__button_right" to="/addevent">
            <button className="navigation__button">CREATE AN EVENT</button>
          </Link>
        </div>
        <label className="navigation_show-title">
          <Link style={{ textDecoration: 'none' }} to="/">
            <h1 className="navigation__logo-content">Ripka</h1>
          </Link>
        </label>
        <input type="checkbox" id="show-menu" role="button" />
      </div>
    );
  }
}

NavigationSearchEvents = withRouter(
    connect(
        store => {
            const foundEvents = store.events.searchEvents;
            return {
                foundEvents,
            };
        },
        { searchEvents },
    )(NavigationSearchEvents),
);

export default NavigationSearchEvents;
