import React, { Component } from "react"
import { NavLink, withRouter } from "react-router-dom"
import { searchUsers } from "../../actions/search"

import "../../styles/navigation.scss"
import { connect } from "react-redux"

class NavigationSearchUsers extends Component {
  state = {
    filter: ""
  }

  changeHandler = property => ev => {
    const { value } = ev.target
    const { searchUsers } = this.props
    searchUsers(ev.target.value)
    this.setState({ [property]: value })
  }

  render() {
    const { foundUsers } = this.props
    const { filter, formSubmitted } = this.state

    const getPopupItems = () =>
      foundUsers.map(user => (
        <NavLink key={user.id} to={"users/" + user.id}>
          {user.name}
        </NavLink>
      ))
    return (
      <form className="navigation__search-bar">
        {formSubmitted && <div className="add-event__carpet" />}

        <input
          value={filter}
          onChange={this.changeHandler("filter")}
          placeholder="Search by key word"
          className="navigation__search-bar_filter"
        />
        <div className="navigation__search-bar_filter_content">{getPopupItems()}</div>
      </form>
    )
  }
}

NavigationSearchUsers = withRouter(
  connect(
    store => {
      const foundUsers = store.users.searchUsers
      return {
        foundUsers
      }
    },
    { searchUsers }
  )(NavigationSearchUsers)
)

export default NavigationSearchUsers
