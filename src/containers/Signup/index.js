import { connect } from 'react-redux';
import { signupRequest } from '../../actions/Signup';
import Signup from '../../components/Signup';

function mapStateToProps(state) {
  return {
    loading: state.Signup.loading,
    error: state.Signup.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    request: (email, password) => {
      dispatch(signupRequest(email, password))
    }
  }
}

const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(Signup);

export default SignupContainer;
