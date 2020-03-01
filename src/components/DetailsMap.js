import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";

class DetailsMap extends React.Component {
  
  componentDidMount = () => {
    const address = `${this.props.address}`;
    const key = "AIzaSyCC3EccEyE6Bq7qyzzoX7RmTUc5UVN4ZOI";
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`;
    this.props.fetchCoords(url)
  };

  Map = () => {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: this.props.mapCoords.lat, lng: this.props.mapCoords.lng }}
      >
        <Marker position={{ lat: this.props.mapCoords.lat, lng: this.props.mapCoords.lng }} />
      </GoogleMap>
    );
  };

  render() {
    const key = "AIzaSyCC3EccEyE6Bq7qyzzoX7RmTUc5UVN4ZOI";
    const WrappedMap = withScriptjs(withGoogleMap(this.Map));
    return (
      <div style={{ width: "100%", height: "50vh" }}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${key}`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    );
  }
}

export default DetailsMap;