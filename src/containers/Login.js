import { connect } from 'react-redux';
import Login from '../components/Login';
import { logInGuest, logIn } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    logInGuest: () => dispatch(logInGuest()),
    logIn: () => dispatch(logIn())
  }
}

export default connect(null, mapDispatchToProps)(Login)