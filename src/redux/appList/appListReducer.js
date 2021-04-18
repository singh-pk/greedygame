import AppListTypes from './appListTypes';

const INITIAL_STATE = {
  appLists: {},
  isFetching: true,
  error: null,
  currentAppStats: {},
  appStats: {},
};

const appListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AppListTypes.FETCH_APP_LISTS_SUCCESS:
      return {
        ...state,
        appLists: { ...state.appLists, ...action.payload.res1 },
        appStats: { ...state.appStats, ...action.payload.res2 },
        isFetching: false,
      };
    case AppListTypes.FETCH_APP_LISTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case AppListTypes.FETCH_APP_STATS_START:
      return {
        ...state,
        isFetching: true,
      };
    case AppListTypes.FETCH_APP_STATS_SUCCESS:
      return {
        ...state,
        currentAppStats: action.payload,
        isFetching: false,
      };
    case AppListTypes.FETCH_APP_STATS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default appListReducer;
