import { all } from 'redux-saga/effects';

import comment from './comment/saga';

export default function* rootSaga() {
  yield all([comment()]);
}
