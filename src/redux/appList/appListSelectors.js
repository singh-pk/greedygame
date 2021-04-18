import { createSelector } from 'reselect';

const selectAppList = state => state.appList;

export const selectAllAppLists = createSelector(
  [selectAppList],
  appList => appList.appLists
);

export const selectAppNameById = appId =>
  createSelector(
    [selectAllAppLists],
    appLists => appLists[appId] && appLists[appId].appName
  );

export const selectPublisherNameById = appId =>
  createSelector(
    [selectAllAppLists],
    appLists => appLists[appId] && appLists[appId].publisherName
  );

export const selectCurrentAppStats = createSelector(
  [selectAppList],
  appList => appList.currentAppStats
);

export const selectCurrentAppStatsId = createSelector(
  [selectCurrentAppStats],
  currentAppStats => currentAppStats.appId
);

export const selectIsFetching = createSelector(
  [selectAppList],
  appList => appList.isFetching
);

export const selectAppStats = createSelector(
  [selectAppList],
  appList => appList.appStats
);

export const selectAppStatsById = appId =>
  createSelector([selectAppStats], appStats => appStats[appId]);
