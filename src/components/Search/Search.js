import React, { Component } from "react"

import "./Search.scss"
import block from "../../helpers/BEM"
import withUser from "../HOC/withUser"
import { compose } from "ramda"
import { renameProp, renameProps } from "recompose"
const b = block("Search")
const SearchItem = ({ result, onSelect }) => (
  <span onClick={() => onSelect(result)} className={b("search-item")}>
    {result.name}
  </span>
)
const WithUserSearchItem = compose(renameProp("result", "id"), withUser, renameProp("user", "result"))(SearchItem)

class Search extends Component {
  state = {
    open: false
  }

  changeHandler = ev => {
    const { onQueryChange } = this.props
    const { value } = ev.target
    onQueryChange(value)
  }

  render() {
    const { searchResults, onSelect, query } = this.props
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
            searchResults.map(result => (
              <WithUserSearchItem
                key={result}
                result={result}
                onSelect={(value) => {
                  this.setState({ open: false })
                  onSelect(value)
                }}
              />
            ))}
        </div>
      </form>
    )
  }
}

export default Search
