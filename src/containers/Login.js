import { connect } from 'react-redux';
import Login from '../components/Login';
import { logIn, logInGuest, logOutGuest, logOut} from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: () => dispatch(logIn()),
    logOut: () => dispatch(logOut()),
    logInGuest: () => dispatch(logInGuest()),
    logOutGuest: () => dispatch(logOutGuest())
  }
}

export default connect(null, mapDispatchToProps)(Login)