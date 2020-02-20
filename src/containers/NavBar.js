import { connect } from 'react-redux';
import NavBar from '../components/NavBar';

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  }
}

export default connect(mapStateToProps)(NavBar)