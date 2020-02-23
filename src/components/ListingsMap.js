import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 30.267153, lng: -97.743057 }}
    >
      <Marker position={{lat: 30.267153, lng: -97.743057}}/>
    </GoogleMap>
  );
}


const WrappedMap = withScriptjs(withGoogleMap(Map));

const key = "AIzaSyCC3EccEyE6Bq7qyzzoX7RmTUc5UVN4ZOI";

export const ListingsMap = () => {
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
};


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
//   var address = document.getElementById('address').value;
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

// <body onload="initialize()">
// <div id="map" style="width: 320px; height: 480px;"></div>
// <div>
//   <input id="address" type="textbox" value="Sydney, NSW">
//   <input type="button" value="Encode" onclick="codeAddress()">
// </div>
// </body>