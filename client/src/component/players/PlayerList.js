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
        console.log(response.data);
        this.setState({playerList: response.data});
      })
      .catch();
  }

  render() {
    console.log('This is the state: ', this.state.playerList);
    return (
      <div>
        <h1>PlayerList is in the house!!</h1>
      </div>
    );
  }
}

export default PlayerList;
