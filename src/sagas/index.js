import { all, fork } from 'redux-saga/effects';

import watchGetShotsSaga  from './watchers/getShots';

export default function* root() {
  yield all([
    fork(watchGetShotsSaga),
  ]);
}
