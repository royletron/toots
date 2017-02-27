import React from 'react';
import ReactDOM from 'react-dom';
import { authSuccess } from './actions/Auth';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import firebase from 'firebase';
firebase.initializeApp({
  apiKey: 'AIzaSyDTvJCEgcOPQwEm-PEWwmSEIRqWO7w9xUc',
  authDomain: 'toots-fcea3.firebaseapp.com'
})
;
import store from './store';

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(authSuccess(user))
  }
})

import App from './containers/App';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if(module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App)
  });
}
