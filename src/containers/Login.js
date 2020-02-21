import { connect } from 'react-redux';
import Login from '../components/Login';
import { logIn, logInGuest} from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: () => dispatch(logIn()),
    logInGuest: () => dispatch(logInGuest())
  }
}

export default connect(null, mapDispatchToProps)(Login)