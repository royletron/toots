import React from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {
  render () {
    return (
      <div>
        <Link to='/signup'>Signup</Link>
        <Link to='/login'>Login</Link>
      </div>
    )
  }
}
