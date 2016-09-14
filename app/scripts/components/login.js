import React from 'react';
import Nav from './nav';

const Login = React.createClass({
  submitFunction: function(e) {
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    let data = {
      username: username,
      password: password
    };
    console.log(e, username, password, data);
  },
  render: function () {
    return (
      <div>
        <Nav />
        <form className="login-form"
          onSubmit={this.submitFunction}>
            <h2> Login </h2>
            <input
              ref="username"
              className="login-input"
              type="text"
              placeholder="Enter username" />
            <input
              ref="password"
              className="login-input"
              type="password"
              placeholder="Enter password" />
            <input
              className="login-submit"
              type="submit"
              value="Login" />
          </form>
      </div>
    )
  }
});

export default Login;
