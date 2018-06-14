import React, { Component } from "react"
import { CLOUDINARY_URL } from "../../api/index"
import "./Search.scss"
import block from "../../helpers/BEM"
import { withUser } from "../HOC/user"
import { compose } from "ramda"
import { renameProp } from "recompose"
import { withEvent } from "../HOC/event"
import { withRouter } from "react-router-dom"
const b = block("Search")

const UserSearchItem = ({ user, onSelect, history }) => (
  <span
    onClick={() => {
      history.push(`/users/${user.id}`)
      onSelect(user)
    }}
    className={b("search-item", ["user"])}
  >
    <img
      alt={user.name}
      src={`${CLOUDINARY_URL}w_600,h_600,c_thumb,g_faces/w_48,r_48/${user.photo}.jpg`}
      className={b("photo", ["user"])}
    />
    <span>{user.name}&nbsp;</span>
    <span style={{fontSize: "0.7rem"}}>[{user.location}]</span>
  </span>
)

const EventSearchItem = ({ event, onSelect, history }) => (
  <span
    onClick={() => {
      history.push(`/events/${event.id}`)
      onSelect(event)
    }}
    className={b("search-item")}
  >
    {/*TODO: rename to "title"*/}
    {event.name}
  </span>
)

const WithUserSearchItem = compose(withRouter, renameProp("result", "id"), withUser)(UserSearchItem)
const WithEventSearchItem = compose(withRouter, renameProp("result", "id"), withEvent)(EventSearchItem)

class Search extends Component {
  state = { open: false }

  changeHandler = ev => {
    const { onQueryChange } = this.props
    const { value } = ev.target
    onQueryChange(value)
  }

  render() {
    const { searchResults, query } = this.props
    const { open } = this.state

    return (
      <form className={b()}>
        <input
          className={b("input")}
          onFocus={() => this.setState({ open: true })}
          onChange={this.changeHandler}
          value={query}
          placeholder="Search by key word"
        />

        {open && <div className={b("carpet")} onClick={() => this.setState({ open: false })} />}
        <div className={b("popup", { open })}>
          {searchResults &&
            searchResults.map(
              ({ result, type }) =>
                type === "user" ? (
                  <WithUserSearchItem key={result} result={result} onSelect={() => this.setState({ open: false })} />
                ) : type === "event" ? (
                  <WithEventSearchItem key={result} result={result} onSelect={() => this.setState({ open: false })} />
                ) : (
                  ""
                )
            )}
        </div>
      </form>
    )
  }
}

export default Search
