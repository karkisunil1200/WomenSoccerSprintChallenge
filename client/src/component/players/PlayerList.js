import React from 'react';

import players from '../../hooks/players';

class PlayerList extends React.Component {
  state = {
    playerlist: []
  };

  componentDidMount() {
    players
      .get('/players')
      .then(response => {
        console.log(response);
      })
      .catch();
  }

  render() {
    return (
      <div>
        <h1>PlayerList is in the house!!</h1>
      </div>
    );
  }
}

export default PlayerList;
