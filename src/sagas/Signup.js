import { call, put, takeLatest } from 'redux-saga/effects';
import * as Actions from '../actions/Signup';
import firebase from 'firebase';

function* signup(action) {
  try {
    var user = yield firebase.auth().createUserWithEmailAndPassword(action.email, action.password)
    yield put({ type: Actions.SIGNUP_SUCCESS, user })
  } catch (error) {
    yield put({ type: Actions.SIGNUP_FAILURE, error})
  }
}

export default function* Signup() {
  yield takeLatest(Actions.SIGNUP_REQUEST, signup)
}
