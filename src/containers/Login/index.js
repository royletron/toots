import { connect } from 'react-redux';
import { authRequest } from '../../actions/Auth';
import Login from '../../components/Login';

function mapStateToProps(state) {
  return {
    logged: state.Auth.logged
  };
}

function mapDispatchToProps(dispatch) {
  return {
    request: (email, password) => {
      dispatch(authRequest(email, password))
    }
  }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
