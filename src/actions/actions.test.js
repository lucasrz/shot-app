import configureStore from 'redux-mock-store';
import { GET_SHOTS_SAGA, SET_SHOTS, SET_SHOT, GET_SHOT_SAGA, CLEAR_STORE } from '../constants';
import * as actions from './index';

const mockStore = configureStore();
const store = mockStore();

describe('select_actions', () => {
  beforeEach(() => { 
    store.clearActions();
  });

  describe('Clear Store', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          'type': CLEAR_STORE,
        },
      ];

      store.dispatch(actions.clearStore());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('Set Shot', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          'shot': undefined,
          'type': SET_SHOT,
        },
      ];

      store.dispatch(actions.setShot());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('Set Shots', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          'shots': undefined,
          'type': SET_SHOTS,
        },
      ];

      store.dispatch(actions.setShots());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('Get shot saga', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          'type': GET_SHOT_SAGA,
          'id': 1
        },
      ];

      store.dispatch(actions.getShotSaga(1));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('Get shots saga', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          'type': GET_SHOTS_SAGA,
        },
      ];

      store.dispatch(actions.getShotsSaga());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});