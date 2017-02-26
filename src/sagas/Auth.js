import { call, put, takeLatest } from 'redux-saga/effects';
import * as Actions from '../actions/Auth';
import firebase from 'firebase';

function* auth(action) {
  try {
    var user = yield firebase.auth().signInWithEmailAndPassword(action.email, action.password);
  } catch (error) {
    put({ type: Actions.AUTH_FAILURE, error });
  }
}

export default function* Auth () {
  yield takeLatest(Actions.AUTH_REQUEST, auth)
}
