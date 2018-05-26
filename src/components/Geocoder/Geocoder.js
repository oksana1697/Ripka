import React, { Component } from "react"
import search from "./search"

import "./Geocoder.scss"
import block from "../../helpers/BEM"
const b = block("Geocoder")

const API_KEY =
  "pk.eyJ1Ijoib2tzYW5hMTk5NyIsImEiOiJjamhuY2lpZ3MzcTAxMzlzMjJzZ3dueGNiIn0.CCCTbGpm18Czx3jMCcvOTw"

class Geocoder extends Component {
  static defaultProps = {
    accessToken: API_KEY,
    endpoint: "https://api.tiles.mapbox.com",
    inputClass: "",
    resultClass: "",
    resultsClass: "",
    resultFocusClass: "strong",
    inputPlaceholder: "Search",
    showLoader: false,
    source: "mapbox.places",
    proximity: "",
    bbox: "",
    types: "",
    onSuggest: function() {},
    focusOnMount: true,
    onSelect: a => {
      console.log(a)
    }
  }

  state = {
    results: [],
    focus: null,
    loading: false,
    searchTime: new Date()
  }

  componentDidMount() {
    if (this.props.focusOnMount) this.refs.input.focus()
  }

  onInput = e => {
    this.setState({ loading: true })
    var value = e.target.value
    if (value === "") {
      this.setState({
        results: [],
        focus: null,
        loading: false
      })
    } else {
      search(
        this.props.endpoint,
        this.props.source,
        this.props.accessToken,
        this.props.proximity,
        this.props.bbox,
        this.props.types,
        value,
        this.onResult
      )
    }
  }

  moveFocus = dir => {
    if (this.state.loading) return
    this.setState({
      focus:
        this.state.focus === null
          ? 0
          : Math.max(0, Math.min(this.state.results.length - 1, this.state.focus + dir))
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

  clickOption = (place, listLocation) => {
    this.props.onSelect(place)
    this.setState({ focus: listLocation })
    // focus on the input after click to maintain key traversal
    this.refs.input.focus()
    return false
  }

  render() {
    const { inputPlaceholder, showLoader, resultsClass, resultClass, resultFocusClass } = this.props
    const { results, loading, focus } = this.state

    return (
      <div className={b()}>
        <input
          ref="input"
          className={b("input")}
          onInput={this.onInput}
          onKeyDown={this.onKeyDown}
          placeholder={inputPlaceholder}
          type="text"
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
}

export default Geocoder
