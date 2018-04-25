import { connect } from "react-redux";
import React, { Component } from "react";
import UserContainer from "./UserContainer";
import { withRouter } from "react-router-dom";
import { fetchUsers } from "../actions/index";

import { getAllAvailableUsers} from "../reducers";

class VisibleUserList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  render() {
      const {users} = this.props;
    return <UserContainer users = {users} onEventClick = {this.props.onEventClick}  />;
  }
}

VisibleUserList = withRouter(
    connect(store => ({
        events: getAllAvailableUsers(store)
    }), { fetchUsers })(VisibleUserList)
);

export default VisibleUserList;
