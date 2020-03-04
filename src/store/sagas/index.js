import { all } from 'redux-saga/effects';

import getBusinesses from './getBusinesses';

export default function* () {
  yield all([
    getBusinesses()
  ]);
}
