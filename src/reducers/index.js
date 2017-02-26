import { combineReducers } from 'redux';
import Auth from './Auth';
import Signup from './Signup';

const rootReducer = combineReducers({
  Auth,
  Signup
});

export default rootReducer;
