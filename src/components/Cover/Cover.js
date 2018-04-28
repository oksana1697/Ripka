import React, { Component } from "react";

import "../../../styles/cover.less";

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
        <div className="cover__block">
          <div className="cover__category">
            <i className="cover__category-icon"/>
              <h5 className="cover__category-title">Nonprofit</h5>
          </div>
          <div className="cover__category">
              <i className="cover__category-icon"/>
          </div>
          <div className="cover__category">
              <i className="cover__category-icon"/>
          </div>
          <div className="cover__category">
              <i className="cover__category-icon"/>
          </div>
          <div className="cover__category">
              <i className="cover__category-icon"/>
          </div>
          <div className="cover__category">
              <i className="cover__category-icon"/>
          </div>
          <div className="cover__category">
              <i className="cover__category-icon"/>
          </div>
            <div className="cover__category">
                <i className="cover__category-icon"/>
            </div>
            <div className="cover__category">
                <i className="cover__category-icon"/>
            </div>
            <div className="cover__category">
                <i className="cover__category-icon"/>
            </div>
            <div className="cover__category">
                <i className="cover__category-icon"/>
            </div>
            <div className="cover__category">
                <i className="cover__category-icon"/>
            </div>


      </div>
      </div>
    );
  }
}

export default Cover;
