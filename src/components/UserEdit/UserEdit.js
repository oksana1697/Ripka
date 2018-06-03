import {compose} from "ramda";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {mapProps} from "recompose";
import {reduxForm} from "redux-form";

import {UserAdd} from "../UserAdd/UserAdd";
import {editUser} from "../../actions/edit";

import withUser from "../HOC/withUser";

export default compose(
    withRouter,
    withUser,

    connect(
        null,
        //prettier-ignore
        (dispatch, { id }) => ({ processUser: data => dispatch(editUser(id, data)) })
    ),

    mapProps(props => ({ initialValues: props.user, ...props })),

    reduxForm({
        form: "addUserForm",
        onSubmit: async (data, dispatch, { processUser, history }) => {
            const action = await processUser(data);
            history.push("/users/" + action.id)
        }
    })
)(UserAdd)
