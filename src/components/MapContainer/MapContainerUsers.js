import React from "react"

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"
import geoSearch from "../Geocoder/search"

import "../../styles/map.scss"

import { compose } from "ramda"
import { branch, renderNothing, withProps, withStateHandlers } from "recompose"
import { withUser } from "../HOC/user"

const userMarkerEnhance = compose(
  withUser,
  branch(user => !user, renderNothing),
  withProps(({ user }) => ({ name: user.name })),

  withStateHandlers(
    { position: { lat: 37.778519, lng: -122.40564 } },
    {
      setPosition: ({ position }) => ({ lat, lng }) => {
        if (position.lat !== lat || position.lng !== lng) {
          return { position: { lat, lng } }
        }

        return null
      }
    }
  ),

  withProps(async ({ id, user, setPosition }) => {
    const resp = await geoSearch(user.location)
    const [lng, lat] = resp.result.features[0].center
    setPosition({ lat, lng })
  }),

  branch(position => !position, renderNothing)
)

const UserMarker = userMarkerEnhance(Marker)

const MapContainerUsers = ({
  users,
  google,
  onMapClicked,
  onMarkerClick,
  activeMarker,
  onInfoWindowClose,
  showingInfoWindow,
  selectedPlace
}) => (
  <Map className="map" google={google} onClick={onMapClicked} zoom={3} initialCenter={{ lat: 50.4501, lng: 30.5234 }}>
    {users.map(id => <UserMarker key={id} id={id} onClick={onMarkerClick} />)}

    <InfoWindow marker={activeMarker} onClose={onInfoWindowClose} visible={showingInfoWindow}>
      <div>
        <h1 className="map__location-name">{selectedPlace.name}</h1>
      </div>
    </InfoWindow>
  </Map>
)

const enhance = compose(
  GoogleApiWrapper({ apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo" }),
  withStateHandlers(
    {
      activeMarker: {},
      selectedPlace: {},
      showingInfoWindow: false
    },
    {
      onMarkerClick: () => (props, marker) => ({
        activeMarker: marker,
        selectedPlace: props,
        showingInfoWindow: true
      }),

      onInfoWindowClose: () => ({
        activeMarker: null,
        showingInfoWindow: false
      }),

      onMapClicked: ({ showingInfoWindow }) => () =>
        showingInfoWindow
          ? {
              activeMarker: null,
              showingInfoWindow: false
            }
          : null
    }
  )
)

export default enhance(MapContainerUsers)
