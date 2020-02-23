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

const logOut = () =>{
  return {
    type: 'LOG_OUT'
  }
}

const logIn = () => {
  return {
    type: 'LOG_IN',
  }
}

const logInGuest = () => {
  return {
    type: 'LOG_IN_GUEST'
  }
}

const logOutGuest = () => {
  return {
    type: 'LOG_OUT_GUEST'
  }
}

const deleteBiz = (business) =>{
  return {
    type: 'DELETE_BIZ',
    value: business
  }
}

const addBiz = (business) => {
  return {
    type: 'ADD_BIZ',
    value: business
  }
}

export { fetchBusinesses, logIn, logOut, logInGuest, logOutGuest, deleteBiz, addBiz }


//  AIzaSyCC3EccEyE6Bq7qyzzoX7RmTUc5UVN4ZOI

// https://developers.google.com/maps/documentation/javascript/adding-a-google-map

// https://levelup.gitconnected.com/google-map-react-beginners-guide-85bb1a94b04a

// https://www.youtube.com/watch?v=xIYAV6IP4gA


