import { connect } from "react-redux";
import React, { Component } from "react";
import UserContainer from "./UserContainer/UserContainer";
import { withRouter } from "react-router-dom";
import { fetchUsers } from "../actions/index";

class VisibleUserList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  render() {
    const { ...rest } = this.props;
    return <UserContainer {...rest} />;
  }
}

VisibleUserList = withRouter(
  connect(users => users, { fetchUsers })(VisibleUserList)
);

export default VisibleUserList;
