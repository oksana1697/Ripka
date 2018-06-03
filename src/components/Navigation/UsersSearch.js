import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import { searchUsers } from "../../actions/search"

import "./Navigation.scss"
import { connect } from "react-redux"

import block from "../../helpers/BEM"
import { compose } from "ramda"

const b = block("Navigation")
class UsersSearch extends Component {
  state = {
    filter: ""
  }

  changeHandler = property => ({ target }) => {
    const { value } = target
    const { searchUsers } = this.props
    searchUsers(value)
    this.setState({ [property]: value })
  }

  render() {
    const { foundUsers } = this.props
    const { filter, formSubmitted } = this.state

    return (
      <form className={b("search-bar")}>
        {formSubmitted && <div className={b("carpet")} />}

        <input
          value={filter}
          onChange={this.changeHandler("filter")}
          placeholder="Search by key word"
          className={b("search-bar_filter")}
        />

        <div className={b("search-bar_filter_content")}>
          {foundUsers.map(user => (
            <Link className={b("search-bar_filter_content_item")} key={user.id} to={"users/" + user.id}>
              {user.name}
            </Link>
          ))}
        </div>
      </form>
    )
  }
}

// prettier-ignore
const enhance = compose(
  withRouter,
  connect(
    store => ({ foundUsers: store.users.searchUsers }),
    { searchUsers }
  )
)

export default enhance(UsersSearch)
