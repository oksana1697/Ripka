import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../styles/navigation.less';

class NavigationAddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="navigation__container">
        <Link style={{ textDecoration: 'none' }} to="/">
          <h1 className="navigation__logo-content">Ripka</h1>
        </Link>
      </div>
    );
  }
}

export default NavigationAddUser;
