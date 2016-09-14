import React from 'react';
import Nav from './nav';
import List from './routes/list';

const App = React.createClass({
  render: function () {
    return (
      <div className="app">
        <Nav />
        <List />
        <div>
          <h1 className="title">
            BEHOLD MY COLLECTION!
          </h1>
        </div>
      </div>
    )
  }
});

export default App;
