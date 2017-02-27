import React from 'react';
import styles from './style.css';
import Login from '../Login';
import Signup from '../Signup';
import Navigation from '../Navigation';
import Home from '../../pages/Home';
import Write from '../../containers/Write';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

export default class App extends React.Component {
  render () {
    return (
      <Router>
        <div className={styles.app}>
          <Navigation />
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/write' component={Write} />
        </div>
      </Router>
    )
  }
}

