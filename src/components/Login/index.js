import React from 'react';

export default class Login extends React.Component {
  login (e) {
    e.preventDefault();
    console.log('Hello');
    this.props.request(this.refs.email.value, this.refs.password.value);
  }
  render () {
    return (
      <div>
        <p>{ this.props.logged ? 'Logged in' : 'Not logged in' }</p>
        <form onSubmit={this.login.bind(this)}>
          <label>Email</label>
          <input type='email' ref='email' />
          <label>Password</label>
          <input type='password' ref='password' />
          <button>Login</button>
        </form>
      </div>
    )
  }
}
