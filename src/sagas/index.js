import { fork } from 'redux-saga/effects';

import Signup from './Signup';
import Auth from './Auth';

export default function* root() {
  yield [
    fork(Auth),
    fork(Signup)
  ]
}
