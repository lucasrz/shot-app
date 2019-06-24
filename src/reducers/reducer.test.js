import reducer from './index';
import { setShots } from '../actions';
import { setShot } from '../actions';
import { clearStore  } from '../actions';
import workerGetShotsSaga  from '../sagas/watchers/getShots';
import  workerGetShotSaga from '../sagas/watchers/getShots';

describe('Reducers', () => {
  it('Set shots', () => {
    const initialState = {};
    const next = reducer(initialState, setShots(['1','2','3']))
    expect(next).toMatchSnapshot()
  });

  it('Set shot', () => {
    const initialState = {};
    const next = reducer(initialState, setShot({}))
    expect(next).toMatchSnapshot()
  });

  it('Clear store', () => {
    const initialState = {};
    const next = reducer(initialState, clearStore());
    expect(next).toMatchSnapshot();
  });

  it('Get shots saga', () => {
    const initialState = {};
    const next = workerGetShotsSaga();
    expect(next).toMatchSnapshot();
  });

  it('Get shot saga', () => {
    const next = workerGetShotSaga({id: '6680212'});
    expect(next).toMatchSnapshot();
  });
});