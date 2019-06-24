import * as constants from './index';
import { Item } from 'semantic-ui-react';

describe('Constantst', () => {
  it('GET_SHOTS_SAGA', () => {
    expect(constants[constants.GET_SHOTS_SAGA]).toEqual(constants.GET_SHOTS_SAGA);
  });

  it('GET_SHOT_SAGA', () => {
    expect(constants[constants.GET_SHOT_SAGA]).toEqual(constants.GET_SHOT_SAGA);
  });

  it('SET_SHOTS', () => {
    expect(constants[constants.SET_SHOTS]).toEqual(constants.SET_SHOTS);
  });

  it('SET_SHOT', () => {
    expect(constants[constants.SET_SHOTS]).toEqual(constants.SET_SHOTS);
  });

  it('CLEAR_STORE', () => {
    expect(constants[constants.CLEAR_STORE]).toEqual(constants.CLEAR_STORE);
  });
});