import React from 'react';
import { Link } from 'react-router';

const Item = React.createClass({
  render: function () {
    return (
      <li className="card-name">
        <h3>
          <Link className="side-link"
            to={`/jackson/${this.props.index}`} >
            {this.props.card.name}
          </Link>
        </h3>
      </li>
    )
  }
});

export default Item;
