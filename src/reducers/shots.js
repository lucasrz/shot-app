import { SET_SHOTS, CLEAR_STORE } from '../constants';
import { SET_SHOT } from '../constants';

const initialState = { shots: [] };

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case SET_SHOTS:
      return {
        ...state,
        shots: action.shots
      };
    case SET_SHOT:
      return {
        ...state,
        shot: action.shot
      };
    case CLEAR_STORE:
      return {
        undefined
      };
    default:
      return state;
  }
}
