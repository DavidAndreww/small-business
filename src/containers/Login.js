import { connect } from 'react-redux';
import Login from '../components/Login';
import { logIn } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: () => dispatch(logIn())
  }
}

export default connect(null, mapDispatchToProps)(Login)