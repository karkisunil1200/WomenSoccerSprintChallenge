import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';

import App from '../App';

test('App rendering withoutCrashing', () => {
  const component = render(<App />);
});
