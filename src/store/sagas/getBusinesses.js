import { call, put, takeLatest } from 'redux-saga/effects';

import { getBusinesses as getBusinessesRequest } from '../../api/businesses';
import { getBusinessesSuccess, getBusinessesFailure } from '../actions';
import { GET_BUSINESSES_START } from '../actions/constants';

function* getBusinesses(action) {
  try {
    const { offset, limit, term } = action;
    const payload = yield call(getBusinessesRequest, offset, limit, term);
    yield put(getBusinessesSuccess(payload));
  } catch (error) {
    yield put(getBusinessesFailure(error));
  }
}

export default function* () {
  yield takeLatest(GET_BUSINESSES_START, getBusinesses);
}
