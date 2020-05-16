const fetchCoords = (url) => {
  return (dispatch) => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        const action = {
          type: "FETCH_COORDS",
          value: response.results[0].geometry.location,
        };
        dispatch(action);
      });
  };
};

const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

const logIn = () => {
  return {
    type: "LOG_IN",
  };
};

const logInGuest = () => {
  return {
    type: "LOG_IN_GUEST",
  };
};

const logOutGuest = () => {
  return {
    type: "LOG_OUT_GUEST",
  };
};

const deleteBiz = (business) => {
  return {
    type: "DELETE_BIZ",
    value: business,
  };
};

const addBiz = (business) => {
  return {
    type: "ADD_BIZ",
    value: business,
  };
};

export {
  fetchCoords,
  logIn,
  logOut,
  logInGuest,
  logOutGuest,
  deleteBiz,
  addBiz,
};
