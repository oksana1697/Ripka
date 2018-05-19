import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../styles/navigation.less';
import "../../../styles/common.less"

class Navigation extends Component {
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
              <Link to="/events">
              <button className="navigation__settings_name">EVENTS</button>
              </Link>
              <Link to="/users">
              <button className="navigation__settings_name">USERS</button>
              </Link>
              <Link className="navigation__button_right" to="/addevent">
                <button className="navigation__button">POST AN EVENT
                </button>
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

{/*<Link className="navigation__button " to="/users">*/}
{/*<button className="navigation__button_content hvr-float ">*/}
{/*USERS*/}
{/*</button>*/}
{/*</Link>
          {/*<Link className="navigation__button" to="/adduser">*/}
{/*<button className="navigation__button_content">FAKE SIGN UP</button>*/}
{/*</Link>*/}
export default Navigation;
