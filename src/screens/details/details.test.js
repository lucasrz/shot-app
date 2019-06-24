import React from 'react';
import renderer from 'react-test-renderer';
import Details from './index';
import store from '../../store';

describe('Details Component', () => {
  it('Should insttiate the component', () => {
    const match = {
      params: {
        id: 1 
      }
    }
    
    const history = {
      push: jest.fn()
    }
    const tree = renderer
    .create(<Details store={store} match={match} history={history}/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  
  it('Testing Details Component when receiving no id', () => {
    const match = {
      params: {
        id: null 
      }
    }
    
    const history = {
      push: jest.fn()
    }
    
    const tree = renderer
    .create(<Details store={store} match={match} history={history}/>)
    .toJSON();
    expect(history.push).toHaveBeenCalledWith('/');
  });
});