import React, { Component } from "react"

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"
import { getLocation } from "../../api/api"

import "../../styles/map.scss"
import { API_KEY } from "../../api/index"

class MapContainerUsers extends Component {
  constructor(props) {
    super(props)

    const { users } = this.props

    this.state = {
      activeMarker: {},
      selectedPlace: {},
      showingInfoWindow: false,
      users: []
    }

    const getUrl = ({ location }) =>
      `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${API_KEY}`

    Promise.all(users.map(user => getLocation(getUrl(user)))) //makes request and wait until last res
      .then(values => {
        this.setState({
          ...this.state,
          users: values.filter(({ status }) => status === "OK").map((res, index) => {
            return {
              location: res.results[0].geometry.location,
              name: users[index].name,
              id: users[index].id
            }
          })
        })
      }) // change state with mapped responses -> render()
  }

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    })

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    })

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      })
  }

  addMarkers() {
    return this.state.users.map(({ id, name, location }) => (
      <Marker key={id} name={name} onClick={this.onMarkerClick} position={location} />
    ))
  }

  render() {
    return (
      <Map
        className="map"
        google={this.props.google}
        onClick={this.onMapClicked}
        zoom={3}
        initialCenter={{ lat: 50.4501, lng: 30.5234 }}
      >
        {this.addMarkers()}
        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1 className="map__location-name">{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(MapContainerUsers)
