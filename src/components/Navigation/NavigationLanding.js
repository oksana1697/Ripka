import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/navigation.less';

class NavigationLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="navigation__container">
          <Link style={{ textDecoration: 'none' }} to="/">
            <h1 className="navigation__logo-content">Ripka</h1>
          </Link>
          {/*<div className="navigation__search-bar">*/}
          {/*<button*/}
          {/*className="navigation__search-bar_filter"*/}
          {/*><span>All categories</span>*/}
          {/*</button>*/}
          {/*<div className="navigation__search-bar_filter_content">*/}
          {/*<a href="#">Nonprofit</a>*/}
          {/*<a href="#">Children</a>*/}
          {/*<a href="#">Food&Drink</a>*/}
          {/*</div>*/}
          {/*</div>*/}
          <div className="navigation__search-bar">
            <input
              placeholder="Search by key word"
              className="navigation__search-bar_filter"
            />
            <div className="navigation__search-bar_filter_content">
              <a href="#">Nonprofit</a>
              <a href="#">Children</a>
              <a href="#">Food&Drink</a>
            </div>
          </div>
          <button className="navigation__search-bar_submit" type="submit">
            <i className="navigation__search-bar_submit-icon" />
          </button>
          <Link to="/events">
            <button className="navigation__settings_name">EVENTS</button>
          </Link>
          <Link to="/users">
            <button className="navigation__settings_name">USERS</button>
          </Link>
            <Link to="/search-events">
                <button className="navigation__settings_name">BETA-SEARCH</button>
            </Link>
          <Link className="navigation__button_right" to="/addevent">
            <button className="navigation__button">POST AN EVENT</button>
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

export default NavigationLanding;
