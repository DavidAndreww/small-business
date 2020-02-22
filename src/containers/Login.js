import { connect } from 'react-redux';
import Login from '../components/Login';
import { logInGuest } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    logInGuest: () => dispatch(logInGuest())
  }
}

export default connect(null, mapDispatchToProps)(Login)