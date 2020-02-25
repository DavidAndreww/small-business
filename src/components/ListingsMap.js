import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";

// const key = "AIzaSyCC3EccEyE6Bq7qyzzoX7RmTUc5UVN4ZOI";

// let url = `https://maps.googleapis.com/maps/api/geocode/json?address=2900SunridgeDrive,Austin,TX,78741&key=${key}`;

// fetch(url)
//   .then(res => res.json())
//   .then(response => {
//     let lat = response.results[0].geometry.location.lat;
//     let lng = response.results[0].geometry.location.lng;
//     console.log(lat, lng);
//   });

// function Map() {
//   return (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: 30.267153, lng: -97.743057 }}
//     >
//       <Marker position={{ lat: 30.267153, lng: -97.743057 }} />
//     </GoogleMap>
//   );
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

class ListingsMap extends React.Component {
  state = {
    lat: "",
    lng: ""
  };

  componentDidMount = () => {
    const address = '2900 Sunridge Drive, Austin, TX 78741'
    const key = "AIzaSyCC3EccEyE6Bq7qyzzoX7RmTUc5UVN4ZOI";
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`;

    fetch(url)
      .then(res => res.json())
      .then(response => {
        let lat = response.results[0].geometry.location.lat;
        let lng = response.results[0].geometry.location.lng;
        this.setState({lat, lng})
        console.log(this.state.lat, this.state.lng);
      });
  };

  Map = () => {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: this.state.lat, lng: this.state.lng }}
      >
        <Marker position={{ lat: this.state.lat, lng: this.state.lng }} />
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

export default ListingsMap;

// var geocoder;
// var map;
// function initialize() {
//   geocoder = new google.maps.Geocoder();
//   var latlng = new google.maps.LatLng(-34.397, 150.644);
//   var mapOptions = {
//     zoom: 8,
//     center: latlng
//   }
//   map = new google.maps.Map(document.getElementById('map'), mapOptions);
// }

// function codeAddress() {
//   var address = passing in address from business object
//   geocoder.geocode( { 'address': address}, function(results, status) {
//     if (status == 'OK') {
//       map.setCenter(results[0].geometry.location);
//       var marker = new google.maps.Marker({
//           map: map,
//           position: results[0].geometry.location
//       });
//     } else {
//       alert('Geocode was not successful for the following reason: ' + status);
//     }
//   });
// }
