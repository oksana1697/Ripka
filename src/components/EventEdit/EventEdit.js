import { connect } from "react-redux"

import { editEvent } from "../../actions/edit"

import { AddEvent } from "../AddEvent/AddEvent"

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
    { processEvent: editEvent}
  ),

  mapProps(props => ({ initialValues: props.event, ...props })),

  reduxForm({
    form: "addEventForm",
    onSubmit: async (data, dispatch, { id, processEvent, history }) => {
      const action = await processEvent(id, data)
      history.push("/events/" + action.id)
    }
  })
)(AddEvent)
