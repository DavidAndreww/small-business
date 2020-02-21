import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import { logOut } from "../redux/actions";

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    isGuest: state.isGuest
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
