import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getAppListsApi, getAppStatsApi } from '../../services/services';

import {
  fetchAppListsSuccess,
  fetchAppListsFailure,
  fetchAppStatsSuccess,
  fetchAppStatsFailure,
} from './appListActions';

import AppListTypes from './appListTypes';

import transformData from '../../utils/transformData';
import persistData from '../../utils/persistData';

function* fetchAppListsStart() {
  try {
    let [res1, res2] = yield all([call(getAppListsApi), call(getAppStatsApi)]);
    res1 = transformData(res1.data);
    res2 = res2.data;
    yield put(fetchAppListsSuccess({ res1, res2 }));
    yield call(persistData, { ...{ res1, res2 } });
  } catch (err) {
    yield put(fetchAppListsFailure(err));
  }
}

function* fetchAppStatsStart({ payload: { appId, color } }) {
  try {
    yield put(fetchAppStatsSuccess({ appId, color }));
  } catch (err) {
    yield fetchAppStatsFailure(err);
  }
}

function* onFetchAppListsStart() {
  yield takeLatest(AppListTypes.FETCH_APP_LISTS_START, fetchAppListsStart);
}

function* onFetchAppStatsStart() {
  yield takeLatest(AppListTypes.FETCH_APP_STATS_START, fetchAppStatsStart);
}

export function* appListSaga() {
  yield all([call(onFetchAppListsStart), call(onFetchAppStatsStart)]);
}
