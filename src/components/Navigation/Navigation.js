import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../styles/navigation.less';

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
          <Link className="navigation__button " to="/users">
            <button className="navigation__button_content hvr-float ">
              USERS
            </button>
          </Link>
          <Link className="navigation__button" to="/addevent">
            <button className="navigation__button_content">
              POST AN EVENT
            </button>
          </Link>
          <Link className="navigation__button" to="/adduser">
            <button className="navigation__button_content">FAKE SIGN UP</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navigation;
