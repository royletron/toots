import { call, put, takeLatest } from 'redux-saga/effects';
import * as Actions from '../actions/Auth';
import firebase from 'firebase';

function* auth(action) {
  console.log(action);
  try {
    var user = yield firebase.auth().signInWithEmailAndPassword(action.email, action.password);
    yield put({ type: Actions.AUTH_SUCCESS, user });
  } catch (error) {
    yield put({ type: Actions.AUTH_FAILURE, error });
  }
}

export default function* Auth () {
  yield takeLatest(Actions.AUTH_REQUEST, auth)
}
