import { combineReducers } from "redux";

const loggedIn = (state = false, action) => {
  switch (action.type) {
    case "LOG_IN":
      return (state = true);
    case "LOG_OUT":
      return (state = false);
    default:
      return state;
  }
};

const isGuest = (state = false, action) => {
  switch (action.type) {
    case "LOG_IN_GUEST":
      return (state = true);
    case "LOG_OUT_GUEST":
      return (state = false);
    default:
      return state;
  }
};

const listings = (state = [], action) => {
  switch (action.type) {
    case "ADD_BIZ":
      return [...state, action.value];
    case "DELETE_BIZ":
      let newState = [...state];
      let result = newState.filter(biz => biz.name !== action.value);
      return result;
    default:
      return state;
  }
};

const mapCoords = (state = [], action) => {
  switch (action.type) {
    case "FETCH_COORDS":
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({ loggedIn, isGuest, listings, mapCoords });
