import React from 'react';
import Item from './item';
import jacksons from '../../jacksons';

const List = React.createClass({
  render: function () {
    let jacksonFive = jacksons.map(function(jackson, i) {
      return (
        <Item
          key={i}
          index={i}
          card={
            {name: jackson.Name}
          }/>
      )
    });
    return (
      <ul className="routes">
        {jacksonFive}
      </ul>
    )
  }
});

export default List;
