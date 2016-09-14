import React from 'react';
import Nav from './nav';

const Signup = React.createClass({
  submitFunction: function(evt) {
    evt.preventDefault();
    let name = this.refs.name.value;
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    let data = {
      name: name,
      username: username,
      password: password
    };
    console.log(data);
  },
  render: function () {
    return (
      <div>
        <Nav/>
        <form className="login-form" onSubmit={this.submitFunction}>
            <h2>Sign Up</h2>
            <input className="login-input" type="text" placeholder="Enter name" ref="name"/>
            <input className="login-input" type="text" placeholder="Enter username" ref="username"/>
            <input className="login-input" type="password" placeholder="Enter password" ref="password"/>
            <input className="login-submit" type="submit" value="Sign Up"/>
          </form>
      </div>
    )
  }
});

export default Signup;
