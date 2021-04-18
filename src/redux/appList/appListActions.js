import AppListTypes from './appListTypes';

export const fetchAppListsStart = () => ({
  type: AppListTypes.FETCH_APP_LISTS_START,
});

export const fetchAppListsSuccess = resArr => ({
  type: AppListTypes.FETCH_APP_LISTS_SUCCESS,
  payload: resArr,
});

export const fetchAppListsFailure = error => ({
  type: AppListTypes.FETCH_APP_LISTS_FAILURE,
  payload: error,
});

export const fetchAppStatsStart = appId => ({
  type: AppListTypes.FETCH_APP_STATS_START,
  payload: appId,
});

export const fetchAppStatsSuccess = stats => ({
  type: AppListTypes.FETCH_APP_STATS_SUCCESS,
  payload: stats,
});

export const fetchAppStatsFailure = error => ({
  type: AppListTypes.FETCH_APP_STATS_FAILURE,
  payload: error,
});
