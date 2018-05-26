import {connect} from 'react-redux';
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import UserContainer from './UserContainer/UserContainer';
import {fetchUsers} from '../actions/fetch';
import {getAllAvailableUsers, getUserById} from '../reducers/index';
import Footer from "./Footer/Footer";

class VisibleUserList extends Component {
    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const {fetchUsers} = this.props;
        fetchUsers();
    }

    render() {
        const {...users} = this.props;
        return (
            <div>
                <UserContainer {...users} />
                <Footer />
            </div>
        );
    }
}

VisibleUserList = withRouter(
    connect(
        store => {
            const ids = getAllAvailableUsers(store);
            return {
                users: ids.map(id => getUserById(store, id)),
            };
        },
        {fetchUsers},
    )(VisibleUserList),
);

export default VisibleUserList;
