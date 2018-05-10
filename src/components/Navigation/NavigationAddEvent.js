import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../styles/navigation.less';

class NavigationAddEvent extends Component {
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
                <div className="navigation__settings">
                    <button className="navigation__settings_name">
                        <img
                            className="navigation__profile-photo"
                            src="http://res.cloudinary.com/ucu/image/upload/v1525618640/profile_dezbeo.png"
                        />
                        <span> Oksana</span>
                    </button>
                    <div className="navigation__settings_name_content">
                        <a href="#">Settings</a>
                        <a href="#">Logout</a>
                    </div>
                </div>
            </div>
        );
    }
}

{
    /*<Link className="navigation__button " to="/users">*/
}
{
    /*<button className="navigation__button_content hvr-float ">*/
}
{
    /*USERS*/
}
{
    /*</button>*/
}
{
    /*</Link>
            {/*<Link className="navigation__button" to="/adduser">*/
}
{
    /*<button className="navigation__button_content">FAKE SIGN UP</button>*/
}
{
    /*</Link>*/
}
export default NavigationAddEvent;
