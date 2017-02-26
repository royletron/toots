import { connect } from 'react-redux';
import Navigation from '../../components/Navigation';

function mapStateToProps(state) {
  return {
    logged: state.Auth.logged
  }
}

const NavigationContainer = connect(mapStateToProps)(Navigation);

export default NavigationContainer;
