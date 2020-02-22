import { connect } from 'react-redux';
import { addBiz } from '../redux/actions';
import AddBusiness from '../components/AddBusiness';

const mapStateToProps = (state) => {
  return {
    listings: state.listings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBiz: (business) => dispatch(addBiz(business))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBusiness)