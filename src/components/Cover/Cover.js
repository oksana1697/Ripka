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
      </div>
    );
  }
}

export default Cover;
