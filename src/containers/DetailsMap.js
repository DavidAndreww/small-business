import { connect } from 'react-redux'
import { fetchCoords } from '../redux/actions';
import DetailsMap from '../components/DetailsMap';

const mapStateToProps = (state) => {
  return {
    mapCoords: state.mapCoords
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCoords: (url) => dispatch(fetchCoords(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsMap)