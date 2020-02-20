const fetchBusinesses = () => {
  return (dispatch) => {
    fetch('here')
    .then(res => res.json())
    .then(response => {
      const action = {
        type: 'FETCH_BUSINESSES',
        value: response.Results
      }
      dispatch(action)
    })
  }
}

export { fetchBusinesses }


//  AIzaSyCC3EccEyE6Bq7qyzzoX7RmTUc5UVN4ZOI

// https://developers.google.com/maps/documentation/javascript/adding-a-google-map

// https://levelup.gitconnected.com/google-map-react-beginners-guide-85bb1a94b04a


// async defer
//     src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCC3EccEyE6Bq7qyzzoX7RmTUc5UVN4ZOI&callback=initMap"