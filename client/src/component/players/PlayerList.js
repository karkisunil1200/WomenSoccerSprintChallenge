import React from 'react';

import players from '../../hooks/players';
import PlayerCard from './PlayerCard';

import '../styles/Playerlist.css';

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
      return (
        <div className='player'>
          <PlayerCard player={player} />
        </div>
      );
    });

    return (
      <div className='player-list'>
        <div className='players'>
          <h5>Names: {playerCard}</h5>
        </div>
      </div>
    );
  }
}

export default PlayerList;
