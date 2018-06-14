import React, { Component } from "react"
import search from "./search"

import "./Geocoder.scss"
import block from "../../helpers/BEM"
const b = block("Geocoder")

class Geocoder extends Component {
  static defaultProps = {
    inputClass: "",

    inputPlaceholder: "Search",
    showLoader: false,
    onSuggest: function() {},
    focusOnMount: true,
    onSelect: a => {}
  }

  state = {
    results: [],
    focus: null,
    loading: false,
    searchTime: new Date()
  }

  onInput = async e => {
    this.setState({ loading: true })
    const { value } = e.target
    this.props.input.onChange(value)
    if (value === "") {
      this.setState({
        results: [],
        focus: null,
        loading: false
      })
    } else {
      const { searchTime, result } = await search(value)
      this.onResult(result, searchTime)
    }
  }

  moveFocus = dir => {
    if (this.state.loading) return
    this.setState({
      focus:
        this.state.focus === null ? 0 : Math.max(0, Math.min(this.state.results.length - 1, this.state.focus + dir))
    })
  }

  acceptFocus = () => {
    if (this.state.focus !== null) {
      this.props.onSelect(this.state.results[this.state.focus])
    }
  }

  onKeyDown = e => {
    switch (e.which) {
      // up
      case 38:
        e.preventDefault()
        this.moveFocus(-1)
        break
      // down
      case 40:
        this.moveFocus(1)
        break
      // accept
      case 13:
        if (this.state.results.length > 0 && this.state.focus == null) {
          this.clickOption(this.state.results[0], 0)
        }
        this.acceptFocus()
        break
      default:
        return
    }
  }

  onResult = (body, searchTime) => {
    // searchTime is compared with the last search to set the state
    // to ensure that a slow xhr response does not scramble the
    // sequence of autocomplete display.
    if (body && body.features && this.state.searchTime <= searchTime) {
      this.setState({
        searchTime: searchTime,
        loading: false,
        results: body.features,
        focus: null
      })
      this.props.onSuggest(this.state.results)
    }
  }

  clickOption = ({ place_name }, listLocation) => {
    this.setState({ focus: listLocation, results: [] })
    this.props.input.onChange(place_name)
    // this.props.onSelect(place)

    // focus on the input after click to maintain key traversal
    return false
  }

  render() {
    const {
      inputPlaceholder,
      showLoader,
      input: { value }
    } = this.props
    const { results, loading, focus } = this.state

    return (
      <div className={b()}>
        <input
          className={b("input")}
          onInput={this.onInput}
          onKeyDown={this.onKeyDown}
          placeholder={inputPlaceholder}
          type="text"
          value={value}
          onChange={() => {}}
        />

        {results.length > 0 && (
          <ul className={b("results", { loading: showLoader && loading })}>
            {results.map((result, i) => (
              <li
                className={b("result-item", { active: i === focus })}
                onClick={this.clickOption.bind(this, result, i)}
                key={result.id}
              >
                {result.place_name}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }

  componentWillUnmount() {
    console.log("unmount")
  }
}

export default Geocoder
