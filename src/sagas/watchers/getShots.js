import { put, takeLatest, call } from 'redux-saga/effects';
import { setShots, setShot } from '../../actions';
import { getShots, getShot } from '../../lib/api';
import { GET_SHOTS_SAGA, GET_SHOT_SAGA } from '../../constants';

function* workerGetShotsSaga() {
  const shots = yield call(getShots);
  yield put(setShots(shots));
}

function* workerGetShotSaga(action) {
  const shot = yield call(getShot, action);
  yield put(setShot(shot));
}

export default function* watchGetShotsSaga() {
  yield takeLatest(GET_SHOTS_SAGA, workerGetShotsSaga);
  yield takeLatest(GET_SHOT_SAGA, workerGetShotSaga);
}
