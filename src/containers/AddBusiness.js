import { connect } from 'react-redux';
import { addBiz } from '../redux/actions';
import AddBusiness from '../components/AddBusiness';

const mapDispatchToProps = (dispatch) => {
  return {
    addBiz: (business) => dispatch(addBiz(business))
  }
}

export default connect(null, mapDispatchToProps)(AddBusiness)