import { fork } from 'redux-saga/effects';

import Signup from './Signup';

export default function* root() {
  yield [
    fork(Signup)
  ]
}
