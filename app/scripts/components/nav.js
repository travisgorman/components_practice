import React from 'react';

const Nav = React.createClass({
  render: function () {
    return (
      <nav>
        <a className="link" href="#add">Create New Card</a>
        <a className="link" href="#login">Login</a>
        <a className="link" href="#signup">Sign Up</a>
        <a className="link" href="#/">Home</a>
      </nav>
    )
  }
});

export default Nav;
