import { connect } from "react-redux";
import React, { Component } from "react";
import UserContainer from "./UserContainer/UserContainer";
import { withRouter } from "react-router-dom";
import { fetchUsers } from "../actions/fetch";
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
        // this.fetchData();
        const {...users} = this.props;
        console.log("users",this.props);
        return <UserContainer  {...users}
                              // onEventClick = {this.props.onEventClick}
        />;

    }
}

VisibleUserList = withRouter(
    connect(store => ({
        users: getAllAvailableUsers(store)
    }), { fetchUsers })(VisibleUserList)
);

export default VisibleUserList;