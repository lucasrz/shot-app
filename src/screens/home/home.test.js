import React from 'react';
import renderer from 'react-test-renderer';
import Home from './index';

import store from '../../store';

it('Testing Home Component', () => {
  const tree = renderer
    .create(<Home store={store} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
