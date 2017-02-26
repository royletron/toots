import React from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {
  render () {
    return (
      <div>
        { this.props.logged ? (
          <div>hey</div>
        ) : [
          <Link key='signupLink' to='/signup'>Signup</Link>,
          <Link key='loginLink' to='/login'>Login</Link>
        ]}
      </div>
    )
  }
}
