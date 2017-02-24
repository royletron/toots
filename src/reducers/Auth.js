import * as AuthActions from '../actions/Auth';

export default function Auth(state = {
  loading: false,
  logged: false
}, action) {
  switch(action.type) {
    case AuthActions.AUTH_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        logged: false
      });
    case AuthActions.AUTH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        logged: false, user: action.user
      });
    default:
      return state;
  }
}
