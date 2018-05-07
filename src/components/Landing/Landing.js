import React, { Component } from 'react';

import '../../../styles/category.less';
import Navigation from "../Navigation/Navigation";
/**
 * Represents view of Landing with static image.
 */
class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navigation/>
        <img className="category__image"/>
        <div className="category__container">
          <a className="category__item">
            <div className="category__item-icon">
              <img className="category__item-icon-education" />
            </div>
            <h5 className="category__item-title">Education</h5>
          </a>
          <a className="category__item">
            <div className="category__item-icon">
              <img className="category__item-icon-food" />
            </div>
            <h5 className="category__item-title">Food&Drink</h5>
          </a>
          <a className="category__item">
            <div className="category__item-icon">
              <img className="category__item-icon-nonprofit" />
            </div>
            <h5 className="category__item-title">Nonprofit</h5>
          </a>
          <a className="category__item">
            <div className="category__item-icon">
              <img className="category__item-icon-education" />
            </div>
            <h5 className="category__item-title">Education</h5>
          </a>
          <a className="category__item">
            <div className="category__item-icon">
              <img className="category__item-icon-food" />
            </div>
            <h5 className="category__item-title">Food&Drink</h5>
          </a>
          <a className="category__item">
            <div className="category__item-icon">
              <img className="category__item-icon-nonprofit" />
            </div>
            <h5 className="category__item-title">Nonprofit</h5>
          </a>
          <a className="category__item">
            <div className="category__item-icon">
              <img className="category__item-icon-education" />
            </div>
            <h5 className="category__item-title">Education</h5>
          </a>
          <a className="category__item">
            <div className="category__item-icon">
              <img className="category__item-icon-food" />
            </div>
            <h5 className="category__item-title">Food&Drink</h5>
          </a>
          <a className="category__item">
            <div className="category__item-icon">
              <img className="category__item-icon-nonprofit" />
            </div>
            <h5 className="category__item-title">Nonprofit</h5>
          </a>
          <a className="category__item">
            <div className="category__item-icon">
              <img className="category__item-icon-education" />
            </div>
            <h5 className="category__item-title">Education</h5>
          </a>
        </div>
      </div>
    );
  }
}

export default Landing;
