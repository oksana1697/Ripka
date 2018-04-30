import React, { Component } from 'react';

import '../../../styles/cover.less';
import '../../../styles/category.less';
/**
 * Represents view of Cover with static image.
 */
class Cover extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img
          className="cover"
          src="http://res.cloudinary.com/ucu/image/upload/v1521105623/Volunteering_Hands_sugvjw.png"
        />
     
        <div className="category__container">
          <a className="category__item">
              <div className="category__item-icon">
                  <img className="category__item-icon-education"/>
              </div>
            <h5 className="category__item-title">Education</h5>
          </a>
          <a className="category__item">
            <div className="category__item-icon">
                <img className="category__item-icon-food"/>
            </div>
            <h5 className="category__item-title">Food&Drink</h5>
          </a>
          <a className="category__item">
              <div className="category__item-icon">
                  <img className="category__item-icon-nonprofit"/>
              </div>
            <h5 className="category__item-title">Nonprofit</h5>
          </a>
            <a className="category__item">
                <div className="category__item-icon">
                    <img className="category__item-icon-education"/>
                </div>
                <h5 className="category__item-title">Education</h5>
            </a>
            <a className="category__item">
                <div className="category__item-icon">
                    <img className="category__item-icon-food"/>
                </div>
                <h5 className="category__item-title">Food&Drink</h5>
            </a>
            <a className="category__item">
                <div className="category__item-icon">
                    <img className="category__item-icon-nonprofit"/>
                </div>
                <h5 className="category__item-title">Nonprofit</h5>
            </a>
            <a className="category__item">
                <div className="category__item-icon">
                    <img className="category__item-icon-education"/>
                </div>
                <h5 className="category__item-title">Education</h5>
            </a>
            <a className="category__item">
                <div className="category__item-icon">
                    <img className="category__item-icon-food"/>
                </div>
                <h5 className="category__item-title">Food&Drink</h5>
            </a>
            <a className="category__item">
                <div className="category__item-icon">
                    <img className="category__item-icon-nonprofit"/>
                </div>
                <h5 className="category__item-title">Nonprofit</h5>
            </a>
            <a className="category__item">
                <div className="category__item-icon">
                    <img className="category__item-icon-education"/>
                </div>
                <h5 className="category__item-title">Education</h5>
            </a>
        </div>
      </div>
    );
  }
}

export default Cover;
