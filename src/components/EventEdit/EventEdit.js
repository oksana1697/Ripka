import { connect } from "react-redux"

import { editEvent } from "../../actions/edit"

import { EventAdd } from "../EventAdd/EventAdd"

import { reduxForm } from "redux-form"
import { withRouter } from "react-router-dom"
import { compose } from "ramda"
import { mapProps } from "recompose"
import withEvent from "../HOC/withEvent"

export default compose(
  withRouter,
  withEvent,

  connect(
    null,
    //prettier-ignore
    (dispatch, { id }) => ({ processEvent: data => dispatch(editEvent(id, data)) })
  ),

  mapProps(props => ({ initialValues: props.event, ...props })),

  reduxForm({
    form: "addEventForm",
    onSubmit: async (data, dispatch, { processEvent, history }) => {
      const action = await processEvent(data)
      history.push("/events/" + action.id)
    }
  })
)(EventAdd)
