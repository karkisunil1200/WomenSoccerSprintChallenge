import React from 'react';

import players from '../../hooks/players';
import PlayerCard from './PlayerCard';

class PlayerList extends React.Component {
  state = {
    playerList: []
  };

  componentDidMount() {
    players
      .get('/players')
      .then(response => {
        this.setState({playerList: response.data});
      })
      .catch();
  }

  render() {
    console.log('This is the state: ', this.state.playerList);

    const playerCard = this.state.playerList.map(player => {
      return <PlayerCard player={player} />;
    });

    return (
      <div className='player-list'>
        <div className='players'>
          <h5>Name: {playerCard}</h5>
        </div>
      </div>
    );
  }
}

export default PlayerList;
