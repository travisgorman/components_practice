import React from 'react';
import Nav from './nav';

const Add = React.createClass({
  submitFunction: function (evt) {
    evt.preventDefault();
    let name = this.refs.name.value;
    let color = this.refs.img.value;
    let breed = this.refs.factoid.value;
    let data = {
      name: name,
      img: img,
      factoid: factoid
    };
    console.log(data);
  },
  render: function () {
    return (
      <div>
        <Nav />
        <form
          className="addCard-form"
          onSubmit={this.submitFunction}>
            <h2> Add a Card </h2>
            <input
              className="login-input"
              type="text"
              placeholder="What's this all about?"
              ref="name" />
            <input
              className="login-input"
              type="text"
              placeholder="Gimmee a factoid..."
              ref="factoid1" />
            <input
              className="login-input"
              type="text"
              placeholder="Lemmee have another one..."
              ref="factoid2" />
            <input
              className="login-input"
              type="text"
              placeholder="How about one more..."
              ref="factoid3" />
            <input
              className="login-input"
              type="text"
              placeholder="Gotta picture?"
              ref="image" />
            <input
              className="login-input"
              type="submit"
              placeholder="Make it Happen"
              ref="add-submit" />
          </form>
      </div>
      )
  }

});

export default Add;
