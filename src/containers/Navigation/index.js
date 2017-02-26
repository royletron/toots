import { connect } from 'react-redux';
import Navigation from '../../components/Navigation';

function mapStateToProps(state) {
  return {
    logged: state.Auth.user !== undefined
  }
}

const NavigationContainer = connect(mapStateToProps)(Navigation);

export default NavigationContainer;
