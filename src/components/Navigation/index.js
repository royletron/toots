import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './style.css';

export default class Navigation extends React.Component {
  render () {
    return (
      <div className={styles.this}>
        { this.props.logged ? (
          <NavLink className={styles.link} activeClassName={styles.active} key='writeLink' to='/write'>Write</NavLink>
        ) : [
          <NavLink key='signupLink' to='/signup'>Signup</NavLink>,
          <NavLink key='loginLink' to='/login'>Login</NavLink>
        ]}
      </div>
    )
  }
}
