import React, {Component} from 'react';


import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {getLocation} from "../../api/api";

const API_KEY = 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo';

class MapContainer extends Component {
    constructor(props) {
        super(props);

        const {events} = this.props;

        this.state = {
            activeMarker: {},
            selectedPlace: {},
            showingInfoWindow: false,
            events: [],
        };

        const getUrl = ({location}) => `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${API_KEY}`

        Promise.all(events.map(event => getLocation(getUrl(event)))) //makes request and wait until last res
            .then(values => {
                // console.log(values);
                this.setState({
                    ...this.state,
                    events: values
                        .filter(({status}) => status === 'OK')
                        .map((res, index) => {
                                console.log(res);
                                return {
                                    location: res.results[0].geometry.location,
                                    name: events[index].name,
                                    id: events[index].id
                                }
                            }
                        )
                })
            }); // change state with mapped responses -> render()
    }


    onMarkerClick = (props, marker) =>
        this.setState({
            activeMarker: marker,
            selectedPlace: props,
            showingInfoWindow: true
        });

    onInfoWindowClose = () =>
        this.setState({
            activeMarker: null,
            showingInfoWindow: false
        });

    onMapClicked = () => {
        if (this.state.showingInfoWindow)
            this.setState({
                activeMarker: null,
                showingInfoWindow: false
            });
    };

    addMarkers() {
        return this.state.events.map(({id, name, location}) => (
            <Marker
                key={id}
                name={name}
                onClick={this.onMarkerClick}
                position={location}
            />)
        )
    }

    render() {
        // if (!this.props.loaded) return <div>Loading...</div>;
        console.log('render');
        return (
            <Map
                className="map"
                google={this.props.google}
                onClick={this.onMapClicked}
                style={{height: '100%', position: 'relative', width: '100%'}}
                zoom={2}>

                {this.addMarkers()}
                {/*<Marker*/}
                {/*name="SOMA"*/}
                {/*position={{ lat: 37.778519, lng: -122.40564 }}*/}
                {/*title="The marker`s title will appear as a tooltip."*/}
                {/*/>*/}

                <InfoWindow
                    marker={this.state.activeMarker}
                    onClose={this.onInfoWindowClose}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: ('AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo')
})(MapContainer)
