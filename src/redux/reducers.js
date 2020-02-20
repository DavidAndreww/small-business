import { combineReducers } from 'redux'

const loggedIn = (state = false) => state;

export default combineReducers({ loggedIn })