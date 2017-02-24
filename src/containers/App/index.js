import React from 'react';
import styles from './style.css';
import Login from '../Login';

export default class App extends React.Component {
  render () {
    return (
      <div className={styles.this}>
        <p>Hello</p>
        <Login />
      </div>
    )
  }
}

