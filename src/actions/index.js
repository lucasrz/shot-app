import { GET_SHOTS_SAGA, SET_SHOTS, SET_SHOT, GET_SHOT_SAGA, CLEAR_STORE } from '../constants';

export function setShots(shots) {
  return {
    type: SET_SHOTS,
    shots
  };
}

export function clearStore() {
  return {
    type: CLEAR_STORE
  };
}

export function setShot(shot) {
  return {
    type: SET_SHOT,
    shot
  };
}

export function getShotSaga(id) {
  return {
    type: GET_SHOT_SAGA,
    id
  };
}

//Sagas
export function getShotsSaga() {
  return {
    type: GET_SHOTS_SAGA
  };
}
