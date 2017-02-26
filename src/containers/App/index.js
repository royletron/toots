import React from 'react';
import styles from './style.css';
import Login from '../Login';
import Signup from '../Signup';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

export default class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <p>Hello</p>
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
        </div>
      </Router>
    )
  }
}

