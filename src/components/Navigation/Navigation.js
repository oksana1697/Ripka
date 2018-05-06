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
          {/*<form>*/}

            <div className="navigation__subcontainer">
              <button
                className="navigation__search"
                value="Search event by keyword">
                  All Categories
              </button>
              <div class="navigation__search_content">
                <a className="navigation__search_content_filter" href="#">Nonprofit</a>
                <a className="navigation__search_content_filter" href="#">Children</a>
                <a className="navigation__search_content_filter" href="#">Food&Drink</a>
              </div>
            </div>
              <button className="navigation__submit" type="submit">
                 <i className="navigation__submit_icon"/>
              </button>


          {/*</form>*/}
          {/*<div>*/}
          {/*</div>*/}
          {/*<Link to="/addevent">*/}
                <button className="navigation__button">
                    <span className="navigation__button_content">POST AN EVENT</span>
                </button>
            {/*</Link>*/}


        </div>

        <label for="show-menu" class="show-menu">
          Show Menu
        </label>
        <input type="checkbox" id="show-menu" role="button" />
        <ul id="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About ￬</a>
            <ul class="hidden">
              <li>
                <a href="#">Who We Are</a>
              </li>
              <li>
                <a href="#">What We Do</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Portfolio ￬</a>
            <ul class="hidden">
              <li>
                <a href="#">Photography</a>
              </li>
              <li>
                <a href="#">Web & User Interface Design</a>
              </li>
              <li>
                <a href="#">Illustration</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
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
