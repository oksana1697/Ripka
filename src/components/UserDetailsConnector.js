import { connect } from "react-redux";
import UserDetails from "./UserDetails/UserDetails";

import { getUserById, getIsUserFetching } from "../reducers";
import { fetchUser } from "../actions/fetch";
import {deleteUser} from "../actions/delete";

export default connect(
    (state, { id ,onSuccess}) => ({
        user: getUserById(id, state),
        isUserFetching: getIsUserFetching(id, state),
        onSuccess,
        deleteUser,
    }),
    { fetchUser, deleteUser },
    ({ user, isUserFetching }, { fetchUser,deleteUser }, { id, onSuccess }) => {
        if (!user && !isUserFetching) {
            fetchUser(id);
        }

        return {
            user,
            onSuccess,
            deleteUser
        };
    }
)(UserDetails);
