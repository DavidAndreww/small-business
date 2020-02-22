import { connect } from 'react-redux';
import Listings from '../components/Listings'
import { deleteBiz, logIn } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    listings: state.listings,
    isGuest: state.isGuest
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBiz: (name) => dispatch(deleteBiz(name)),
    logIn: () => dispatch(logIn())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)