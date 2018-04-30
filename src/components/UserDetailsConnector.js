import { connect } from "react-redux";
import UserDetails from "./UserDetails/UserDetails";
import { getUserById, getIsUserFetching } from "../reducers";
import { fetchUser } from "../actions/fetch";

export default connect(
    (state, { id }) => ({
        user: getUserById(id, state),
        isUserFetching: getIsUserFetching(id, state)
    }),
    { fetchUser },
    ({ user, isUserFetching }, { fetchUser }, { id }) => {
        if (!user && !isUserFetching) {
            fetchUser(id);
        }

        return {
            user
        };
    }
)(UserDetails);
