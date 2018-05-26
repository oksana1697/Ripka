import React, { Component } from "react"
import { NavLink, withRouter } from "react-router-dom"
import { searchEvents } from "../../actions/search"

import "../../styles/navigation.scss"
import { connect } from "react-redux"

class NavigationSearchEvents extends Component {
  state = {
    filter: ""
  }

  changeHandler = property => ev => {
    const { value } = ev.target
    const { searchEvents } = this.props
    searchEvents(ev.target.value)
    this.setState({ [property]: value })
  }

  render() {
    const { foundEvents } = this.props
    const { filter, formSubmitted } = this.state

    const getPopupItems = () =>
      foundEvents.map(({ id, name }) => (
        <NavLink key={id} to={"/events/" + id}>
          {name}
        </NavLink>
      ))
    return (
      <>
        <form>
          {formSubmitted && <div className="add-event__carpet" />}
          <div className="navigation__search-bar">
            <input
              value={filter}
              onChange={this.changeHandler("filter")}
              placeholder="Search by key word"
              className="navigation__search-bar_filter"
            />
            <div className="navigation__search-bar_filter_content">{getPopupItems()}</div>
          </div>
        </form>
      </>
    )
  }
}

NavigationSearchEvents = withRouter(
  connect(
    store => {
      const foundEvents = store.events.searchEvents
      return {
        foundEvents
      }
    },
    { searchEvents }
  )(NavigationSearchEvents)
)

export default NavigationSearchEvents
