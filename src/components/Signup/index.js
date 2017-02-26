import React from 'react';

export default class Signup extends React.Component {
  onSignup (e) {
    e.preventDefault();
    this.props.request(this.refs.email.value, this.refs.password.value);
  }
  render () {
    return (
      <div>
        <h2>Signup</h2>
        { this.props.error ? (
          <p>{ this.props.error.message }</p>
        ) : ''}
        <form onSubmit={this.onSignup.bind(this)}>
          <label>Email</label>
          <input type='email' ref='email' />
          <label>Password</label>
          <input type='password' ref='password' />
          <button>Signup</button>
        </form>
      </div>
    )
  }
}

