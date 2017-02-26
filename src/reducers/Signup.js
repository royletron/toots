import * as Actions from '../actions/Signup';

export default function Signup(state = {
  loading: false,
  error: undefined
}, action) {
  switch(action.type) {
    case Actions.SIGNUP_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: undefined
      });
    case Actions.SIGNUP_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
    default:
      return state;
  }
}
