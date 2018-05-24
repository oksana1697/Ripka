import React, {Component} from 'react';
import Geosuggest from 'react-geosuggest';

import '../../../styles/geosuggest.less'

class GeoSuggest extends Component{

    onFocus() {
        console.log('onFocus'); // eslint-disable-line
    }

    onBlur(value) {
        console.log('onBlur', value); // eslint-disable-line
    }

    onChange(value) {
        console.log('input changes to :' + value); // eslint-disable-line
    }


    onSuggestSelect(suggest){
        console.log(suggest);
    }
    onSuggestNoResults(userInput) {
        console.log('onSuggestNoResults for :' + userInput); // eslint-disable-line
    }
    render(){
        var fixtures = [
            {label: 'Old Elbe Tunnel, Hamburg', location: {lat: 53.5459, lng: 9.966576}},
            {label: 'Reeperbahn, Hamburg', location: {lat: 53.5495629, lng: 9.9625838}},
            {label: 'Alster, Hamburg', location: {lat: 53.5610398, lng: 10.0259135}}
        ];

        return(
            <div>
                <Geosuggest
                    ref={el=>this._geoSuggest=el}
                    placeholder="Kiev, Ukraine"
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    // onChange={this.onChange}
                    onSuggestSelect={this.onSuggestSelect}
                    onSuggestNoResults={this.onSuggestNoResults}
                    location={new google.maps.LatLng(53.558572, 9.9278215)}
                    radius="20" />
                {/*<button onClick={()=>this._geoSuggest.focus()}>Focus</button>*/}
                {/*<button onClick={()=>this._geoSuggest.update('New Zealand')}>Update</button>*/}
                {/*<button onClick={()=>this._geoSuggest.clear()}>Clear</button>*/}
                {/*<button onClick={()=>this._geoSuggest.selectSuggest()}>Search</button>*/}
            </div>
        )
    }
}



export default GeoSuggest;