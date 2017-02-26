import * as AuthActions from '../actions/Auth';

export default function Auth(state = {
  loading: false,
  error: undefined,
  user: undefined
}, action) {
  switch(action.type) {
    case AuthActions.AUTH_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        user: undefined
      });
    case AuthActions.AUTH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        user: action.user
      });
    default:
      return state;
  }
}
