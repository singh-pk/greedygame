import { all, fork } from 'redux-saga/effects';

import { appListSaga } from './appList/appListSagas';

export default function* rootSaga() {
  yield all([fork(appListSaga)]);
}
