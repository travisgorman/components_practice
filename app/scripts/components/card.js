import React from 'react';
import jacksons from '../jacksons';
import { Link } from 'react-router';
import Nav from './nav';
import List from './routes/list';


const Card = React.createClass({
  render: function () {
    console.log(this.props);
    let i = this.props.params.id
    return (
      <div>
      <Nav />
      <List />
      <div className="card">
          <h2>{jacksons[i].Name}</h2>
          <img src={jacksons[i].imgUrl} />
          <div className="cardStats">
            <p><span>Favorite Spice: </span>{jacksons[i].spice}</p>
            <p><span>Favorite Spice Girl: </span>{jacksons[i].spiceGirl}</p>
            <p><span>Favorite Spice Island: </span>{jacksons[i].spiceIsland}</p>
          </div>
        </div>
      </div>
    )
  }
});

export default Card;
