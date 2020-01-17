import React from 'react';
import {render} from '@testing-library/react';

import PlayerList from '../component/players/PlayerList';
import App from '../App';

test('displays playerlist component', () => {
  const container = render(<App />);

  container.getByText('Names:');
});
