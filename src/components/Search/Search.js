import React, { Component } from "react"

import "./Search.scss"
import block from "../../helpers/BEM"
const b = block("Search")

class Search extends Component {
  state = {
    filter: "",
    open: false
  }

  changeHandler = property => ev => {
    const { value } = ev.target
    const { find } = this.props
    find(ev.target.value)
    this.setState({ [property]: value })
  }

  render() {
    const { searchResults, onSelect } = this.props
    const { filter, open } = this.state

    return (
      <form className={b()}>
        <input
          className={b("input")}
          onFocus={() => this.setState({ open: true })}
          onChange={this.changeHandler("filter")}
          value={filter}
          placeholder="Search by key word"
        />

        {open && <div className={b("carpet")} onClick={() => this.setState({ open: false })} />}
        <div className={b("popup", { open })}>
          {searchResults.map(({ id, name }) => (
            <span onClick={() => onSelect(id)} className={b("search-item")} key={id}>
              {name}
            </span>
          ))}
        </div>
      </form>
    )
  }
}

export default Search
